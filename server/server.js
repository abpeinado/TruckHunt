const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const truckData = require('./truckListData.js');

const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/public')));

app.post('/foodTrucks', (req, res) => {
  console.log(req.body);
  res.send('data received');
});

app.get('/truckSignup', (req, res) => {
  res.send('hello from truckSignup');
});

app.get('/trucklist', (req, res) => {
  res.send(truckData.truckList.trucks);
});

const server = app.listen(port, () => {
  console.log(`Express Service live and listening on: ${port}`);
});

module.exports = server;
