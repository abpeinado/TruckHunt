const Search = require('./models/search.js');
const MenuItems = require('./models/menuItems.js');
const utils = require('./utils.js');
const Orders = require('./models/orders.js');

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
// module.exports.vendorIncomingOrders = (req, res) => {
//   console.log('body: ', req.body);
//   // res.send(orderingData.VendorOrders);
//   const fakeData = [
//     {
//       order_id: 1,
//       order_time: '2017-04-24 16:15:17.816122-07',
//       customer_email: 'matt@gmail.com',
//       price_total: 7000,
//       order_status: 0, // 0 = on time, 1 = delayed, 2 = ready for pickup
//       items: [{ menu_item_id: 14, name: 'kale salad', price: 2000, quantity: 4, item_note: 'no goat cheese' },
//       { menu_item_id: 15, name: 'cheeseburger', price: 5000, quantity: 2, item_note: 'add cado' }]
//     },
//     {
//       order_id: 2,
//       order_time: '2017-04-24 16:17:13.816122-07',
//       customer_email: 'sam@gmail.com',
//       price_total: 6000,
//       order_status: 1, // 0 = on time, 1 = delayed, 2 = ready for pickup
//       items:
//       [{ menu_item_id: 14, name: 'eggs and ham', price: 2000, quantity: 2, item_note: 'no onions' },
//       { menu_item_id: 15, name: 'chicken sando', price: 4000, quantity: 1, item_note: 'add extra cado' }]
//     },
//     {
//       order_id: 3,
//       order_time: '2017-04-24 16:18:17.816122-07',
//       customer_email: 'mike@gmail.com',
//       price_total: 7000,
//       order_status: 0, // 0 = on time, 1 = delayed, 2 = ready for pickup
//       items: [{ menu_item_id: 13, name: 'hotty totties', price: 10000, quantity: 8, item_note: 'extra shot' },
//       { menu_item_id: 18, name: 'mango jangos', price: 5000, quantity: 2, item_note: 'add cado' }]
//     },
//     {
//       order_id: 4,
//       order_time: '2017-04-24 16:20:13.816122-07',
//       customer_email: 'benicci@gmail.com',
//       price_total: 2000,
//       order_status: 2, // 0 = on time, 1 = delayed, 2 = ready for pickup
//       items: [{ menu_item_id: 14, name: 'coconut struddle', price: 3000, quantity: 1, item_note: 'napkins please' },
//       { menu_item_id: 15, name: 'pizza', price: 1000, quantity: 1, item_note: 'add pepperoni and pinapples' }]
//     }
//   ];
//   console.log('fakeData', fakeData);
//   res.send(fakeData);
// };

module.exports.orderStatus = (req, res) => {
  const orderStatus = req.body.orderStatus;
  const orderID = req.body.orderID;

  // console.log('gettin hotter', req.body.orderStatus);
  // console.log('gettin hotter', req.body.orderID);

  if (orderStatus === 'READY') {
    return Orders.updateStatus(orderID, 2)
      .then((response) => {
        console.log('response yeah looking for vendoriID)', response);
        return Orders.findVendorOrders(response.vendor_id);
      })
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        console.log('response no', err);
        res.status(400).send(err);
      });
  } else if (orderStatus === 'DELAYED') {
    return Orders.updateStatus(orderID, 1)
      .then((response) => {
        console.log('response yeah looking for vendoriID)', response);
        return Orders.findVendorOrders(response.vendor_id);
      })
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        console.log('response no', err);
        res.status(400).send(err);
      });
  } else if (orderStatus === 'ONTIME') {
    return Orders.updateStatus(orderID, 0)
      .then((response) => {
        console.log('response yeah looking for vendoriID)', response);
        return Orders.findVendorOrders(response.vendor_id);
      })
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        console.log('response no', err);
        res.status(400).send(err);
      });
  }
  return res.send(400);
};

