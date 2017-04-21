const Vendors = require('./models/vendors.js');
const Customers = require('./models/customers.js');
const Schedules = require('./models/schedules.js');
const VendorSignup = require('./models/vendorSignup.js');
const UserSignup = require('./models/userSignup.js');
const Login = require('./models/login.js');
const stripe = require('stripe')(process.env.STRIPE_KEY);
const Search = require('./models/search.js');
const MenuItems = require('./models/menuItems.js');
const utils = require('./utils.js');

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
      //-----------
      // To filter schedule data by location pass the response into a
      // function inported from utils.js and transform the object there.
      // Return the transformed object and pass it into res.send
      res.send(response);
    })
    .catch((error) => res.send(error));
};

module.exports.menu = (req, res) => {
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
      res.send(menu);
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
  console.log('vendorSignup');

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
        throw new Error('invalid permit', response);
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
      res.status(401).send(error.message);
    }
  );
};

module.exports.vendorLogin = (req, res) => {
  const userInfo = req.body.userInfo;
  Login.vendorLogin(userInfo)
    .then((response) => {
      if (response.length === 0) {
        throw new Error('invalid combo');
      }
      console.log('response', response);
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
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
      res.status(403).send(error);
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
  // console.log('recieved a checkout!');
  const token = req.body.orderInfo;
  // console.log('token: ', token);
  const currency = 'USD';
  const amount = 1000; // cents, minumum is 50
  const description = 'this is a SMample charge';

  stripe.charges.create({
    source: token,
    currency,
    amount,
    description
  }, (err, charge) => {
    if (err) {
      console.log('error in checkout:', err);
    } else {
      console.log('success', charge);
      // update orders table
    }
  });
  res.send('order number blahblahblah');
};
