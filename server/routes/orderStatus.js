const Orders = require('../models/orders.js');
const convertOrderItemsToOrder = require('../utils.js').convertOrderItemsToOrder;

module.exports = (req, res) => {
  const orderStatus = req.body.orderStatus;
  const orderID = req.body.orderID;

  const orderTable = {
    ONTIME: 0,
    DELAYED: 1,
    READY: 2,
    COMPLETE: 3
  };

  Orders.updateStatus(orderID, orderTable[orderStatus])
    .then((response) => {
      return Orders.getIncomingOrderItems(response.vendor_id);
    })
    .then(orderItems => {
      const orders = convertOrderItemsToOrder(orderItems);
      res.status(200).send(orders);
    })
    .catch(err => {
      res.status(404).send(err);
    });
};
