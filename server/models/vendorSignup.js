const { db } = require('../../database/index.js');

module.exports.checkUsername = (username) => {
  return db.query(
    'SELECT * FROM vendors WHERE email = $1\
    ', [username]);
};

module.exports.checkPermitNumberIsValid = (permit) => {
  return db.query('SELECT * FROM vendors WHERE permit_number = $1\
    ', [permit]);
};

module.exports.addUserToDB = (userInfo) => {
  return db.many(
    'UPDATE vendors\
    SET email=$1, first_name=$2, last_name=$3, password=$4\
    WHERE permit_number=$5\
    RETURNING vendor_id\
    ', [userInfo.email, userInfo.firstName, userInfo.lastName, userInfo.pass, userInfo.permit]);
};
