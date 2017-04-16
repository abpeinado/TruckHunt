const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const truckData = require('./truckListData.js');
const requestHandler = require('./requestHandler.js');
const orderingData = require('./incomingOrdersData.js');
const truckLocs = require('./truckLocations.js');
const db = require('../database/index.js');

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

app.post('/search', requestHandler.search);

app.post('/truckSignup', requestHandler.truckSignup);

app.get('/truckLocations', (req, res) => {
  res.send(truckLocs.truckLocs.trucks);
});

app.get('/trucklist', (req, res) => {
  res.send(truckData.truckList.trucks);
});

app.get('/truckInfo', (req, res) => {
  res.send(truckData.truckList.trucks[0]);
});

app.get('/vendorIncomingOrder', (req, res) => {
  res.send(orderingData.VendorOrders.order);
});

const server = app.listen(port, () => {
  console.log(`Express Service live and listening on: ${port}`);
});

module.exports = server;
