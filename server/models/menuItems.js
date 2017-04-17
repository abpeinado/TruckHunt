const { db } = require('../../database/index.js');

module.exports.newItem = (item) => {
  return db.one(
    'INSERT INTO menu_items\
    (name, course, food_category, price, item_description)\
    VALUES (${name}, ${course}, ${food_category}, ${price}, ${item_description})\
    RETURNING menu_item_id',
    item);
};

module.exports.update = (vendor_id, column, updatedValue) => {
  return db.query('UPDATE users SET $1~ = $2 WHERE user_id = $3 RETURNING *', [column, updatedValue, vendor_id]);
};

// permit is at index 17 in the array
// food items is index 19
// EXAMPLE RETURN OBJ
// { permit_number: '17MFF-0179',
//   food_category: 'Cold Truck: Pre-packaged Sandwiches: Various Beverages: Salads: Snacks' }
