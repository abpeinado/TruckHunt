const { db } = require('../../database/index.js');

module.exports.newVendor = (vendor) => {
  return db.one(
    'INSERT INTO vendors\
    (vendor_name, permit_number, food_category)\
    VALUES (${vendor_name}, ${permit_number}, ${food_category})\
    RETURNING vendor_id',
    vendor);
};

module.exports.findVendorPermitsAndIds = () => {
  return db.query('SELECT permit_number, vendor_id FROM vendors');
};

module.exports.findVendorIdByPermitNumber = (permit_number) => {
  return db.oneOrNone('SELECT vendor_id FROM vendors WHERE permit_number = $1', [permit_number]);
};

// // add token TODO:
// module.exports.addVendorToken = (token, vendor) => {
//   console.log('inside add addVendorToken')
//   return db.query('UPDATE vendors SET stripe_user_id=$1 WHERE vendor_id=$2', [token, vendor]);
// };

// add token current implementation
module.exports.addVendorToken = (token) => {
  console.log('inside add addVendorToken');
  return db.query('UPDATE vendors SET stripe_user_id=$1', [token]);
};

// get token
module.exports.getVendorToken = (vendor) => {
  return db.query('SELECT stripe_user_id FROM vendors WHERE vendor_id=$1', [vendor]);
};
