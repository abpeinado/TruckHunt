module.exports.search = (req, res) => {
  console.log(req.body);
  res.send('data received');
};

module.exports.truckSignup = (req, res) => {
  const userInfo = req.body.userInfo;
  console.log('yyyeeeehaww', userInfo);
  res.send(true);
};
