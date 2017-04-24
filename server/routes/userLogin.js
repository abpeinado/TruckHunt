const Login = require('../models/login.js');

module.exports = (req, res) => {
  const user = req.body.userInfo.user;
  const pass = req.body.userInfo.pass;
  Login.userLogin(user, pass)
    .then((response) => {
      if (response.length === 0) {
        throw new Error('Invalid user/pass');
      }
      console.log('response from successful login serverside', response);
      res.status(200).send(response);
    })
    .catch((error) => {
      console.error(error);
      res.status(401).send(error);
    }
  );
};
