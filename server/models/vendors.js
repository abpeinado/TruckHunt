const { db } = require('../../database/index.js');

module.exports.newVendor = (vendor) => {
  return db.one(
    'INSERT INTO vendors\
    (permit_number, food_category)\
    VALUES (${permit_number}, ${food_category})\
    RETURNING vendor_id',
    vendor);
};

module.exports.findVendorIdByPermitNumber = (permit_number) => {
  return db.oneOrNone('SELECT vendor_id FROM vendors WHERE permit_number = $1', [permit_number]);
};
