const Orders = require('../models/orders.js');
const convertOrderItemsToOrder = require('../utils.js').convertOrderItemsToOrder;

module.exports = (req, res) => {
  const { vendor_id } = req.body;
  // console.log(vendor_id);

  Orders.getIncomingOrderItems(vendor_id)
  .then(orderItems => {
    const orders = convertOrderItemsToOrder(orderItems);
    // console.log('orders: ', JSON.stringify(orders));
    res.status(200).send(orders);
  })
  .catch(err => {
    console.log('error getting orders', err);
    res.sendStatus(404);
  });
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

// module.exports({ body: { vendor_id:5 } }); //uncomment to test
