const { db } = require('../../database/index.js');

module.exports.new = (vendor) => {
  return db.one(
    'INSERT INTO vendors\
    (permit_number, food_category)\
    VALUES (${permit_number}, ${food_category}\
    RETURNING vendor_id',
    vendor);
};

module.exports.update = (vendor_id, column, updatedValue) => {
  return db.query('UPDATE users SET $1~ = $2 WHERE user_id = $3 RETURNING *', [column, updatedValue, vendor_id]);
};

// permit is at index 17 in the array
// food items is index 19
// EXAMPLE RETURN OBJ
// { permit_number: '17MFF-0179',
//   food_category: 'Cold Truck: Pre-packaged Sandwiches: Various Beverages: Salads: Snacks' }
