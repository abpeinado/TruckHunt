const { Vendors } = require('./models/vendors.js');
const { Customers } = require('./models/customers.js');
const { Schedules } = require('./models/schedules.js');
const VendorSignup = require('./models/vendorSignup.js');
const UserSignup = require('./models/userSignup.js');
const Login = require('./models/login.js');

module.exports.search = (req, res) => {
  console.log(req.body);
  res.send('data received');
};

module.exports.truckSignup = (req, res) => {
  const userInfo = req.body.userInfo;
  const username = req.body.userInfo.user;
  const permit = req.body.userInfo.permit;

  // Check username, if available add user
  VendorSignup.checkUsername(username)
    .then((response) => {
      if (response.length === 0) {
        // check permit
        VendorSignup.checkPermit(permit)
          .then((response) => {
            // valid permit
            if (response.length !== 0) {
              VendorSignup.addUser(userInfo)
                .then(() => res.send(true))
                .catch((error) => res.send(error));
            } else {
              // Invalid permit
              res.send(false);
            }
          })
          .catch((error) => res.send(error));
      } else {
        res.send(false);
      }
    })
    .catch((error) => res.send(error));
};

module.exports.truckLogin = (req, res) => {
  const userInfo = req.body.userInfo;
  Login.vendorLogin(userInfo)
    .then((response) => {
      console.log('response', response);
      res.send(response);
    })
    .catch((error) => res.send(error));
};

module.exports.userLogin = (req, res) => {
  const user = req.body.userInfo.user;
  const pass = req.body.userInfo.pass;
  Login.userLogin(user, pass)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => res.send(error));
};

module.exports.userSignup = (req, res) => {
  const user = req.body.userInfo.user;
  const pass = req.body.userInfo.pass;

  // Check for available username
  UserSignup.checkUsername(user)
    .then((response) => {
      // Proceed if username isn't already taken
      if (response.length === 0) {
        // Add user to db
        UserSignup.addUser(user, pass)
          .then((response) => {
            res.send(response);
          })
          .catch((error) => console.log(error));
      }
    })
    .catch((error) => console.log(error));
};

