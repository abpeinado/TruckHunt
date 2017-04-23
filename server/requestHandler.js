const VendorSignup = require('./models/vendorSignup.js');
const UserSignup = require('./models/userSignup.js');
const Login = require('./models/login.js');
const stripe = require('stripe')(process.env.STRIPE_KEY);
const Search = require('./models/search.js');
const MenuItems = require('./models/menuItems.js');
const request = require('request');
const Vendors = require('./models/vendors.js');

// const Schedules = require('./models/schedules.js');
// const utils = require('./utils.js');

module.exports.search = (req, res) => {
  // when geospacial querying is implemented we will pass
  // the address/coordinates into Search.scheduleData()
  // --------------------------------------------------
  // to filter by time uncomment the lines below the example object
  // and delete Search.scheduleData(). You also havve to delete
  // the scheduleData function in search.js and replace it with the one
  // that is commented out. Also make sure you have
  // dropped and reseeded the database
  // {
  //   "time": "11:56 AM",
  //   "dayOfWeek": 1
  // }
  // const timeAsNum = utils.convertTimeToNumber(req.body.time);
  // Search.scheduleData(timeAsNum, req.body.dayOfWeek)
  Search.scheduleData()
    .then((response) => {
      console.log('test res', JSON.parse(response[0].coordinates));
      const newArr = [];
      for (let i = 0; newArr.length < 100; i++) {
        const tempItem = response[i];
        tempItem.coordinates = JSON.parse(tempItem.coordinates);
        newArr.push(tempItem);
      }

      //-----------
      // If you want to modify the data received from the query to better display
      // on the client-side pass the response into a function inported from utils.js
      // and transform the object there. Return the transformed object and pass it
      // into res.send instead of response.
      // there will need to be a function from utils that filters out any food
      // trucks that are not scheduled for the time the user selects
      return newArr;
      // To filter schedule data by location pass the response into a
      // function inported from utils.js and transform the object there.
      // Return the transformed object and pass it into res.send
      // res.send(response);
    })
    .then((newArr) => res.send(newArr))
    .catch((error) => res.send(error));
};

module.exports.menu = (req, res) => {
  // console.log('menu route body', req.body);
  const defaultFoodCategory = 'Cold Truck: packaged sandwiches: snacks: candy: hot and cold drinks';
  MenuItems.foodCategories()
    .then((foodCategories) => {
      let found = false;
      for (let i = 0; i < foodCategories.length; i++) {
        if (foodCategories[i].food_category === req.body.food_category) {
          found = true;
        }
      }
      if (found) {
        return true;
      }
      return false;
    })
    .then((found) => {
      if (found) {
        return MenuItems.menuData(req.body.food_category);
      }
      return MenuItems.menuData(defaultFoodCategory);
    })
    .then((menu) => {
      // create category array
      const foodCategories = [];
      // create menuItems object
      const menuItems = {};
      // loop thru menu
      for (let i = 0; i < menu.length; i++) {
        // get food category
        const course = menu[i].course;
        // if the food cat is not in menuItems object
        if (!menuItems[course]) {
          // push to food cat array
          foodCategories.push(menu[i].course);
          // create array containing the menu item and
          menuItems[course] = [menu[i]];
          // add that to menuItems[foodcategory]
        } else {
          // push the menuItem to menuItems[foodcategory]
          menuItems[course].push(menu[i]);
        }
      }
      for (let j = 0; j < foodCategories.length; j++) {
        let course = {};
        course.title = foodCategories[j];
        course.items = menuItems[foodCategories[j]];
        foodCategories[j] = course;
        course = {};
      }
      // console.log('menuItems', menuItems);
      // console.log('foodCategories', foodCategories);
      res.send(foodCategories);
    })
    .catch((error) => {
      console.log('here');
      res.send(error);
    });
};

module.exports.vendorSignup = (req, res) => {
  const userInfo = req.body.userInfo;
  const user = req.body.userInfo.user;
  const permit = req.body.userInfo.permit;

  VendorSignup.checkUsername(user)
    .then((response) => {
      if (response.length !== 0) {
        console.log('invalid username inside throw', response);
        throw new Error('invalid username');
      }
      return VendorSignup.checkPermitNumberIsValid(permit);
    })
    .then((response) => {
      if (response.length === 0) {
        throw new Error('invalid permit');
      }
      return VendorSignup.addUserToDB(userInfo);
    })
    .then((response) => {
      if (response.length === 0) {
        throw new Error('error adding user', response);
      }
      res.status(201).send(response);
    })
    .catch((error) => {
      console.error('inside catch of vendorSignup', error);
      res.status(400).send(error.message);
    }
  );
};

module.exports.vendorLogin = (req, res) => {
  const user = req.body.userInfo.user;
  const pass = req.body.userInfo.pass;

  Login.vendorLogin(user, pass)
    .then((response) => {
      if (response.length === 0) {
        throw new Error('invalid combo');
      }
      console.log('response', response);
      res.status(202).send(response);
    })
    .catch((error) => {
      res.status(401).send(error);
    }
  );
};

module.exports.userLogin = (req, res) => {
  const user = req.body.userInfo.user;
  const pass = req.body.userInfo.pass;
  Login.userLogin(user, pass)
    .then((response) => {
      if (response.length === 0) {
        throw new Error('Invalid user/pass');
      }
      res.status(200).send(response);
    })
    .catch((error) => {
      console.error(error);
      res.status(401).send(error);
    }
  );
};

module.exports.userSignup = (req, res) => {
  const user = req.body.userInfo.user;
  const pass = req.body.userInfo.pass;

  UserSignup.checkUsername(user)
    .then((response) => {
      if (response.length !== 0) {
        throw new Error();
      }
      return UserSignup.addUser(user, pass);
    })
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((error) => {
      console.error(error);
      res.status(403).send(error);
    }
  );
};

module.exports.checkout = (req, res) => {
  console.log('recieved a checkout - orderInfo:', req.body.orderInfo);
  const { tokenID, email, vendorID, menuItems, total } = req.body.orderInfo; // eslint-disable-line no-unused-vars
  const currency = 'USD';
  const amount = total; // cents, minumum is 50
  const description = `Truck Hunt SF order with vendor ${vendorID}`;

  // TODO: create order in orders table, save to submitted order
  const submittedOrder = {
    order_ID: '12345678'
  };
  // TODO: send client error if problem saving orders
    // const details = 'Error placing order'
    // res.status(503).send(details)

  stripe.charges.create({
    source: tokenID,
    currency,
    amount,
    description
  }, (err, charge) => { // eslint-disable-line no-unused-vars
    if (err) { // error charging card
      // TODO: delete order from database
      // const { message, statusCode, requestId } = err.raw;
      const details = 'Error processing payment';
      res.statusMessage = details;
      res.send(402);
    } else {
      res.status(201).send(submittedOrder); // success
    }
  });
};

module.exports.stripe = (req, res) => {
  const user = req.body.user;
  console.log('user', user);

  const stripeSignupOrCreate = `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${process.env.app_id}&scope=read_write&state=8888`;

  res.redirect(stripeSignupOrCreate);
};

module.exports.authenticate = (req, res) => {
  const code = req.query.code;
  const user = req.query.state;
  console.log('appending user_id in oauth2 request', user);

  const options = { method: 'GET',
    url: 'https://connect.stripe.com/oauth/token',
    qs: {
      grant_type: 'authorization_code',
      client_id: process.env.app_id,
      code,
      client_secret: process.env.api_key
    },
    headers: {
      'cache-control': 'no-cache'
    }
  };

  // console.log('inside authenticate', code);
  request.post(options, (error, response, body) => {
    if (error) throw new Error(error);
    const accessToken = JSON.parse(body).stripe_user_id;
    // TODO: pass user_id from client for db insertion
    Vendors.addVendorToken(accessToken, 'jj@jj.com')
      .then(() => {
        res.redirect('/vendor');
      })
      .catch((err) => res.status(400).send(err));
  });
};
