const VendorSignup = require('../models/vendorSignup.js');

module.exports = (req, res) => {
  const userInfo = req.body.userInfo;
  const user = req.body.userInfo.user;
  const permit = req.body.userInfo.permit;

  VendorSignup.checkUsername(user)
    .then((response) => {
      if (response.length !== 0) {
        throw new Error('invalid username');
      }
      return VendorSignup.checkPermitNumberIsValid(permit);
    })
    .then((response) => {
      if (response.length === 0) {
        throw new Error('invalid permit');
      }
      return VendorSignup.addUserToDB(userInfo);
    })
    .then((response) => {
      if (response.length === 0) {
        throw new Error('error adding user', response);
      }
      res.status(201).send(response);
    })
    .catch((error) => {
      console.error('inside catch of vendorSignup', error);
      res.status(400).send(error.message);
    }
  );
};
