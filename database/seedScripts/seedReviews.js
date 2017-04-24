const Vendors = require('../../server/models/vendors.js');
const Reviews = require('../../server/models/reviews.js');
const utils = require('../../server/utils.js');

Vendors.findVendorIds()
  .then((vendorIds) => {
    for (let i = 0; i < vendorIds.length; i++) {
      const randomRating = Math.floor(Math.random() * 3) + 3;
      const initialReview = {
        customer_id: 1,
        vendor_id: vendorIds[i].vendor_id,
        rating: randomRating,
        review: 'Good food'
      };
      Reviews.newReview(initialReview);
    }
  })
  // .then(() => {
  //   pgp.end();
  // })
  .catch((error) => {
    console.log('error: ', error);
  });
