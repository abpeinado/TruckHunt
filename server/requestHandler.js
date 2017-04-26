const Orders = require('./models/orders.js');
const convertOrderItemsToOrder = require('./utils.js').convertOrderItemsToOrder;

module.exports.search = require('./routes/search.js');

module.exports.menu = require('./routes/menu.js');

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
