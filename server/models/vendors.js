const { db } = require('../../database/index.js');

module.exports.new = (vendor) => {
  return db.one(
    'INSERT INTO vendors\
    (email, first_name, last_name, password)\
    VALUES (${email}, ${first_name}, ${last_name}, ${password})\
    RETURNING vendor_id',
    vendor);
};

module.exports.update = (vendor_id, column, updatedValue) => {
  return db.query('UPDATE users SET $1~ = $2 WHERE user_id = $3 RETURNING *', [column, updatedValue, user_id]);
};
