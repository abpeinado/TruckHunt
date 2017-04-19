const Vendors = require('./models/vendors.js');
const Customers = require('./models/customers.js');
const Schedules = require('./models/schedules.js');
const VendorSignup = require('./models/vendorSignup.js');
const UserSignup = require('./models/userSignup.js');
const Login = require('./models/login.js');

module.exports.search = (req, res) => {
  console.log(req.body);
  res.send('data received');
};

module.exports.vendorSignup = (req, res) => {
  const userInfo = req.body.userInfo;
  const user = req.body.userInfo.user;
  const permit = req.body.userInfo.permit;
  console.log('vendorSignup');

  VendorSignup.checkUsername(user)
    .then((response) => {
      if (response.length === 0) {
        throw new Error();
      }
      return VendorSignup.checkPermit(permit);
    })
    .then((response) => {
      if (response.length === 0) {
        throw new Error();
      }
      return VendorSignup.addUser(userInfo);
    })
    .then((response) => {
      if (response.length === 0) {
        throw new Error();
      }
      res.send(response);
    })
    .catch((error) => res.send(error));
};

module.exports.vendorLogin = (req, res) => {
  const userInfo = req.body.userInfo;
  Login.vendorLogin(userInfo)
    .then((response) => {
      console.log('response', response);
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    }
  );
};

module.exports.userLogin = (req, res) => {
  const user = req.body.userInfo.user;
  const pass = req.body.userInfo.pass;
  Login.userLogin(user, pass)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.error(error);
      res.send(error);
    }
  );
};

module.exports.userSignup = (req, res) => {
  const user = req.body.userInfo.user;
  const pass = req.body.userInfo.pass;

  UserSignup.checkUsername(user)
    .then((response) => {
      if (response.length !== 0) {
        throw new Error();
      }
      return UserSignup.addUser(user, pass);
    })
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.error(error);
      res.send(error);
    }
  );
};

