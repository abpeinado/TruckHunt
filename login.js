const { db } = require('../../database/index.js');

module.exports.checkUsername = ( user_info ) => {
  return db.query('SELECT * FROM vendors where ')
}