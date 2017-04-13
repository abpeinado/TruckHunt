const { db } = require('../../database/index.js');

// example query
module.exports.truckInfo = (id) => {
  return db.query(`SELECT * from users where id = ${id};`);
};
