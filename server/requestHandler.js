const Search = require('./models/search.js');
const MenuItems = require('./models/menuItems.js');
const utils = require('./utils.js');
const Orders = require('./models/orders.js');
const convertOrderItemsToOrder = require('./utils.js').convertOrderItemsToOrder;

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
      return newArr;
    })
    .then((newArr) => res.send(newArr))
    .catch((error) => res.send(error));
};

module.exports.menu = (req, res) => {
  const defaultFoodCategory = 'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages';
  MenuItems.foodCategories()
    .then((foodCategories) => {
      console.log('body food category', req.body.food_category);
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
      console.log('found', found);
      if (found) {
        return MenuItems.menuData(req.body.food_category);
      }
      return MenuItems.menuData(defaultFoodCategory);
    })
    .then((menu) => {
      console.log('menu', menu);
      const foodCategories = [];
      const menuItems = {};
      for (let i = 0; i < menu.length; i++) {
        const course = menu[i].course;
        if (!menuItems[course]) {
          foodCategories.push(menu[i].course);
          menuItems[course] = [menu[i]];
        } else {
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
      // console.log('error here', error);
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

  if (orderStatus === 'READY') {
    return Orders.updateStatus(orderID, 2)
      .then((response) => {
        console.log('response yeah looking for vendoriID 2)', response);
        return Orders.getIncomingOrderItems(response.vendor_id);
      })
      .then(orderItems => {
        const orders = convertOrderItemsToOrder(orderItems);
        console.log('2----------------orders: ', JSON.stringify(orders));
        res.status(200).send(orders);
      })
      .catch(err => {
        console.log('error getting orders', err);
        res.sendStatus(404);
      });
  } else if (orderStatus === 'DELAYED') {
    return Orders.updateStatus(orderID, 1)
      .then((response) => {
        console.log('response yeah looking for vendoriID 1)', response);
        return Orders.getIncomingOrderItems(response.vendor_id);
      })
      .then(orderItems => {
        const orders = convertOrderItemsToOrder(orderItems);
        console.log('1----------------orders: ', JSON.stringify(orders));
        res.status(200).send(orders);
      })
      .catch(err => {
        console.log('error getting orders', err);
        res.sendStatus(404);
      });
  } else if (orderStatus === 'ONTIME') {
    return Orders.updateStatus(orderID, 0)
      .then((response) => {
        console.log('response yeah looking for vendoriID 0)', response);
        return Orders.getIncomingOrderItems(response.vendor_id);
      })
      .then(orderItems => {
        const orders = convertOrderItemsToOrder(orderItems);
        console.log('0----------------orders: ', JSON.stringify(orders));
        res.status(200).send(orders);
      })
      .catch(err => {
        console.log('error getting orders', err);
        res.sendStatus(404);
      });
  } else if (orderStatus === 'COMPLETE') {
    return Orders.updateStatus(orderID, 3)
      .then((response) => {
        console.log('response yeah looking for vendoriID 3)', response);
        return Orders.getIncomingOrderItems(response.vendor_id);
      })
      .then(orderItems => {
        const orders = convertOrderItemsToOrder(orderItems);
        console.log('3----------------orders: ', JSON.stringify(orders));
        res.status(200).send(orders);
      })
      .catch(err => {
        console.log('error getting orders', err);
        res.sendStatus(404);
      });
  }
  return res.send(400);
};

