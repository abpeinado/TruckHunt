const Orders = require('../models/orders.js');
const convertOrderItemsToOrder = require('../utils.js').convertOrderItemsToOrder;

module.exports = (req, res) => {
  console.log('HERE------------------------>>>>>', req.body);
  const vendorId = req.body.vendorId;
  if (vendorId === 0) {
    res.status(200).send({ ignore: true });
  } else {
    console.log('this hsould be vendor id', vendorId);
    console.log('this hsould be vendor id type ', typeof vendorId);
    Orders.getIncomingOrderItems(vendorId)
    .then(orderItems => {
      console.log('this is where it is', orderItems);
      const orders = convertOrderItemsToOrder(orderItems);
      console.log('orders: ', JSON.stringify(orders));
      res.status(200).send(orders);
    })
    .catch(err => {
      console.log('error getting orders', err);
      res.sendStatus(404);
    });
  }
};

/*
return format:
[{order_id: 1,
  customer_email: 'matt@gmail.com,
  order_time: '2017-04-24 16:15:17.816122-07',
  price_total: 1200,
  order_status: 0,// 0 = on time, 1 = delayed, 2 = ready for pickup
  items: [{menu_item_id: 14, name: 'kale salad', price: 2000, quantity: 4, item_note: '-no goat cheese' }, ...]
 },
 {order_id: 2, ...}, ....
]
*/

// module.exports({ body: { vendorId: 24 } }); // uncomment to test
