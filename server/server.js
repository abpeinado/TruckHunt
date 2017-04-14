const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const truckData = require('./truckListData.js');
const requesthandler = require('./requestHandler.js');

const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/public')));

/**
**
Please build all routes in requestHandler.js
to keep the server file organized and out code modular.
Use the POST to '/search' as an example.
**
**/
app.post('/search', requesthandler.search);

app.get('/truckSignup', (req, res) => {
  res.send('hello from truckSignup');
});

app.get('/trucklist', (req, res) => {
  res.send(truckData.truckList.trucks);
});

app.get('/truckInfo', (req, res) => {
  res.send(truckData.truckList.trucks[0]);
});

const server = app.listen(port, () => {
  console.log(`Express Service live and listening on: ${port}`);
});

module.exports = server;
