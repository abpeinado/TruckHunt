const Search = require('./models/search.js');
const MenuItems = require('./models/menuItems.js');
// const Schedules = require('./models/schedules.js');

const request = require('request');
const Vendors = require('./models/vendors.js');
const Orders = require('./models/orders.js');
const utils = require('./utils.js');


module.exports.search = (req, res) => {
  console.log('client req1', req.body);
  console.log('client req2', req.body.date);
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
  const timeAsNum = utils.convertTimeToNumber(req.body.date.time);
  Search.scheduleData(timeAsNum, req.body.date.dayOfWeek)
    .then((response) => {
      console.log('test res', JSON.parse(response[0].coordinates));
      const newArr = [];
      for (let i = 0; newArr.length < 20; i++) {
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
