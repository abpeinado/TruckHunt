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
  Search.scheduleData()
    .then((response) => {
      //-----------
      // If you want to modify the data received from the query to better display
      // on the client-side pass the response into a function inported from utils.js
      // and transform the object there. Return the transformed object and pass it
      // into res.send instead of response.
      // there will need to be a function from utils that filters out any food
      // trucks that are not scheduled for the time the user selects
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
      if (response.length === 0) {
        throw new Error();
      }
      return VendorSignup.checkPermit(permit);
    })
    .then((response) => {
      if (response.length === 0) {
        throw new Error();
      }
      return VendorSignup.addUser(userInfo);
    })
    .then((response) => {
      if (response.length === 0) {
        throw new Error();
      }
      res.send(response);
    })
    .catch((error) => res.send(error));
};

module.exports.vendorLogin = (req, res) => {
  const userInfo = req.body.userInfo;
  Login.vendorLogin(userInfo)
    .then((response) => {
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
      res.send(response);
    })
    .catch((error) => {
      console.error(error);
      res.send(error);
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
      res.send(response);
    })
    .catch((error) => {
      console.error(error);
      res.send(error);
    });
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
