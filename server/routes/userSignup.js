const UserSignup = require('../models/userSignup.js');

module.exports = (req, res) => {
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
      res.status(201).send(response);
    })
    .catch((error) => {
      console.error(error);
      res.status(403).send(error);
    }
  );
};
