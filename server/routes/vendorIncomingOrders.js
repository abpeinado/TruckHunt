const Orders = require('../models/orders.js');
const convertOrderItemsToOrder = require('../utils.js').convertOrderItemsToOrder;

module.exports = (req, res) => {
  const vendorId = req.body.vendorId;
  if (vendorId === 0) {
    res.status(201).send({ ignore: true });
  } else {
    Orders.getIncomingOrderItems(vendorId)
    .then(orderItems => {
      const orders = convertOrderItemsToOrder(orderItems);
      res.status(201).send(orders);
    })
    .catch(err => {
      console.log('error getting orders', err);
      res.sendStatus(404);
    });
  }
};
