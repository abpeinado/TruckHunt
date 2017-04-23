const { db } = require('../../database/index.js');

module.exports.newReview = (newReview) => {
  return db.one(
    'INSERT INTO reviews\
    (customer_id, vendor_id, rating, review)\
    VALUES (${customer_id}, ${vendor_id}, ${rating}, ${review})\
    RETURNING vendor_id',
    newReview);
};
