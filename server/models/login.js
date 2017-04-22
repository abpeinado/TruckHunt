const { db } = require('../../database/index.js');

module.exports.userLogin = (user, pass) => {
  return db.query(
    'SELECT customer_id FROM customers WHERE username = $1 AND password = $2\
    ', [user, pass]);
};

module.exports.vendorLogin = (user, pass) => {
  return db.query(
    'SELECT vendor_id FROM vendors WHERE email = $1 AND password = $2\
    ', [user, pass]);
};

