const { db } = require('../../database/index.js');

module.exports.addOrder = ({ vendor_id,
                            customer_id,
                            customer_email,
                            price_total,
                            order_status = 0,
                            order_note = '',
                            menuItems = []
                          }) => {
  return db.one(
    'INSERT INTO orders\
    (vendor_id, customer_id, customer_email, price_total, order_status, order_note)\
    VALUES ($1, $2, $3, $4, $5, $6)\
    RETURNING order_id\
    ', [vendor_id, customer_id, customer_email, price_total, order_status, order_note])

  .then(({ order_id }) => {
    return db.tx(t => {
      const queries = menuItems.map(({ menu_item_id, quantity = 1, note = '' }) => {
        return t.none(
          'INSERT INTO order_items\
          (order_id, menu_item_id, quantity, item_note)\
          VALUES ($1, $2, $3, $4)\
          ', [order_id, menu_item_id, quantity, note]);
      });
      return t.batch(queries);
    })
    .then(() => {
      return order_id;
    })
    .catch(error => {
      return (error);
    });
  });
};

module.exports.updateStatus = (order_id, int) => {
  return db.one(
    'UPDATE orders SET order_status = $1\
    WHERE order_id = $2\
    RETURNING order_id\
    ', [int, order_id]);
};
