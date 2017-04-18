const { db } = require('../../database/index.js');

module.exports.userLogin = (user) => {
  return db.query(
    'SELECT * FROM customers WHERE username = $1 && password = $2\
    ', [user.user, user.pass]);
};

module.exports.vendorLogin = (user) => {
  return db.query(
    'SELECT vendor_id FROM vendors WHERE email = $1 AND password = $2\
    ', [user.user, user.pass]);
};

