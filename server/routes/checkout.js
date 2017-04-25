const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Orders = require('../models/orders.js');
const Vendors = require('../models/vendors.js');

module.exports = (req, res) => {
  const { tokenID, customer_email, vendor_id, customer_id, menuItems, total, order_note } = req.body.orderInfo; // eslint-disable-line no-unused-vars
  const order = {
    vendor_id,
    customer_id, // null for checkout as guest
    customer_email,
    price_total: total,
    order_note,
    menuItems
  };
  // TODO: validate order - make sure there are some menu items, for example

  Orders.addOrder(order)
  .then(order_ID => {
    const description = `Truck Hunt SF, order ${order_ID} with vendor ${vendor_id}`;
    const chargeParams = {
      source: tokenID,
      currency: 'USD',
      amount: total,
      description
    };
    Vendors.getVendorToken(vendor_id) // get vendor token from db
    .then(result => {
      const vendor_token = result.stripe_user_id; // change to 'acct_1ACGNQGa2IsVgA8q' to test with a specific vendor account;
      // console.log('vendor_token:', vendor_token);
      if (vendor_token) {
        chargeParams.destination = {
          account: vendor_token
        };
      }
      stripe.charges.create(chargeParams, (err, charge) => { // eslint-disable-line no-unused-vars
        if (err) {
          // const { message, statusCode, requestId } = err.raw; // get more info on order
          console.log('error charging card charge', err);
          res.statusMessage = 'Error processing payment';
          res.sendStatus(402);
          Orders.updateStatus(order_ID, 5)
          .catch((updateStatusErr) => {
            console.log('error cancelling order: ', updateStatusErr);
          });
        } else {
          res.status(201).send({ order_ID }); // success
          console.log('order placed successfuly: ', charge);
        }
      });
    })
    .catch(err => {
      console.log('error getting vendor token:', err);
      res.statusMessage = 'Error accessing vendor account';
      res.sendStatus(503);
    });
  })
  .catch(error => {
    console.log('error saving order:', error);
    res.statusMessage = 'Error saving order';
    res.sendStatus(503);
  });
};
