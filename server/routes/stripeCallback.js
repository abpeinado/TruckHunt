// const stripe = require('stripe')(process.env.STRIPE_KEY);

module.exports = (req, res) => {
  const user = req.query.user;
  // console.log('user', user);
  // console.log('user', req.query.user);

  const stripeSignupOrCreate = `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${process.env.app_id}&scope=read_write&state=${user}`;

  res.redirect(stripeSignupOrCreate);
};
