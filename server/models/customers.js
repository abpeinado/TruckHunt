const { db } = require('../../database/index.js');

module.exports.findByEmail = (email) => {
  return db.oneOrNone('SELECT * FROM customers WHERE email = $1', [email]);
};


module.exports.delete = (user_id) => {
  return db.query('DELETE FROM users WHERE user_id = $1', [user_id]);
};
