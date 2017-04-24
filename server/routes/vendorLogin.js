const Login = require('../models/login.js');

module.exports = (req, res) => {
  const user = req.body.userInfo.user;
  const pass = req.body.userInfo.pass;

  Login.vendorLogin(user, pass)
    .then((response) => {
      if (response.length === 0) {
        throw new Error('invalid combo');
      }
      console.log('response', response);
      res.status(202).send(response);
    })
    .catch((error) => {
      res.status(401).send(error);
    }
  );
};
