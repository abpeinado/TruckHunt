const { db } = require('../../database/index.js');

module.exports.checkUsername = (user) => {
  return db.query(
    'SELECT * FROM customers WHERE username = $1\
    ', [user]);
};

module.exports.addUser = (user, pass) => {
  return db.one(
    'INSERT INTO customers\
    (username, password)\
    VALUES ($1, $2)\
    RETURNING customer_id\
    ', [user, pass]);
};
