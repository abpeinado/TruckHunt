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

/**
GET /search
Query: lat, long, time and optionally radius
response: [trucks] (include lat/long, menu data, etc)
**/
// ******REFACTOR THESE ROUTES INTO THE ABOVE********
app.post('/search', requestHandler.search);

app.get('/truckLocations', (req, res) => {
  res.send(truckLocs.truckLocs.trucks);
});

app.get('/trucklist', (req, res) => {
  res.send(truckData.truckList.trucks);
});

app.get('/truckInfo', (req, res) => {
  res.send(truckData.truckList.trucks[0]);
});
// ************************************************


/**
POST /vendorSignup
body: {email, password, etc}
**/
// ******REFACTOR This ROUTE INTO THE ABOVE********
app.post('/truckSignup', requestHandler.truckSignup);
// ************************************************

/**
POST /customerSignup
body: {email, password, etc}
**/

/**
POST /vendorLogin
body: {email, password}
**/

/**
POST /customerLogin
body: {email, password}
**/

/**
POST /checkout
body: {stripe ID, menu item id's, vendor id}
response: order number
**/

app.get('/vendorIncomingOrder', (req, res) => {
  res.send(orderingData.VendorOrders.order);
  // response: [orders] -- will include all orderes with status of unfulfilled (0)
});

/**
POST /orderStatus
body: {order number, new status}
**/

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

const server = app.listen(port, () => {
  console.log(`Express Service live and listening on: ${port}`);
});

module.exports = server;
