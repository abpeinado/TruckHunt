const Search = require('./models/search.js');
const MenuItems = require('./models/menuItems.js');
const utils = require('./utils.js');
const Orders = require('./models/orders.js');
// const orderingData = require('./incomingOrdersData.js');
// const Schedules = require('./models/schedules.js');
// const request = require('request');
// const Vendors = require('./models/vendors.js');

module.exports.search = (req, res) => {
  const timeAsNum = utils.convertTimeToNumber(req.body.date.time);
  Search.scheduleData(timeAsNum, req.body.date.dayOfWeek)
    .then((response) => {
      const newArr = [];
      for (let i = 0; i < response.length; i++) {
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
      res.send(foodCategories);
    })
    .catch((error) => {
      console.log('here');
      res.send(error);
    });
};

module.exports.vendorSignup = require('./routes/vendorSignup.js');

module.exports.vendorLogin = require('./routes/vendorLogin.js');

module.exports.userLogin = require('./routes/userLogin.js');

module.exports.userSignup = require('./routes/userSignup.js');

module.exports.authenticate = require('./routes/stripeAuthorization.js');

module.exports.stripe = require('./routes/stripeCallback.js');

module.exports.checkout = require('./routes/checkout.js');

module.exports.vendorIncomingOrders = require('./routes/vendorIncomingOrders.js');

module.exports.orderStatus = (req, res) => {
  const orderStatus = req.body.orderStatus;
  const orderID = req.body.orderID;

  // console.log('gettin hotter', req.body.orderStatus);
  // console.log('gettin hotter', req.body.orderID);

  if (orderStatus === 'READY') {
    return Orders.updateStatus(orderID, 2)
      .then((response) => {
        // console.log('response yeah', response);
        res.status(201).send(response);
      })
      .catch((err) => {
        console.log('response no', err);
        res.status(400).send(err);
      });
  } else if (orderStatus === 'DELAYED') {
    return Orders.updateStatus(orderID, 1)
      .then((response) => {
        // console.log('response yeah', response);
        res.status(201).send(response);
      })
      .catch((err) => {
        console.log('response no', err);
        res.status(400).send(err);
      });
  } else if (orderStatus === 'ONTIME') {
    return Orders.updateStatus(orderID, 0)
      .then((response) => {
        // console.log('response yeah', response);
        res.status(201).send(response);
      })
      .catch((err) => {
        console.log('response no', err);
        res.status(400).send(err);
      });
  }
  return res.send(400);
};

