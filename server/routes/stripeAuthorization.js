const request = require('request');
const Vendors = require('../models/vendors.js');

module.exports = (req, res) => {
  const code = req.query.code;
  const user = req.query.state;
  console.log('appending user_id in oauth2 request', user);

  const options = { method: 'GET',
    url: 'https://connect.stripe.com/oauth/token',
    qs: {
      grant_type: 'authorization_code',
      client_id: process.env.STRIPE_APP_ID,
      code,
      client_secret: process.env.STRIPE_SECRET_KEY
    },
    headers: {
      'cache-control': 'no-cache'
    }
  };

  // console.log('inside authenticate', code);
  request.post(options, (error, response, body) => {
    if (error) throw new Error(error);
    const accessToken = JSON.parse(body).stripe_user_id;
    // TODO: pass user_id from client for db insertion
    Vendors.addVendorToken(accessToken, user)
      .then(() => {
        res.redirect('/vendor');
      })
      .catch((err) => res.status(400).send(err));
  });
};
