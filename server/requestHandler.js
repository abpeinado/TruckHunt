const { Vendors } = require('./models/vendors.js');
const { Customers } = require('./models/customers.js');
const { Schedules } = require('./models/schedules.js');

module.exports.search = (req, res) => {
  console.log(req.body);
  res.send('data received');
};

module.exports.truckSignup = (req, res) => {
  const userInfo = req.body.userInfo;
  console.log('userInfo inside requesthandler truckSignup', userInfo);
  res.send(true);
};
