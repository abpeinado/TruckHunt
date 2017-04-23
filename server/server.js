/* eslint-disable global-require */

if (process.env.PORT === undefined) {
  require('dotenv').config(); // imports environment vars from .env file, keep at top
}
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const truckData = require('./truckListData.js');
const requestHandler = require('./requestHandler.js');
const orderingData = require('./incomingOrdersData.js');
const truckLocs = require('./truckLocations.js');

const port = process.env.PORT || 8000;
const app = express();


// useful for debugging, please do not remove:
app.use((req, res, next) => {
  // console.log('requrl= ', req.url);
  // console.log('reqmethod= ', req.method);
  next();
});

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/public')));

/**
Please build out functionality in requestHandler.js
to keep the server file organized and out code modular.
**/

/**
POST /search
query: lat, long, time and optionally radius
response: [trucks] (include lat/long, menu data, etc)
// ******REFACTOR THESE ROUTES INTO THE ABOVE********/
app.post('/search', requestHandler.search);

app.post('/menu', requestHandler.menu);

app.post('/vendorSignup', requestHandler.vendorSignup);

app.post('/vendorLogin', requestHandler.vendorLogin);

app.post('/userLogin', requestHandler.userLogin);

app.post('/userSignup', requestHandler.userSignup);

app.get('/stripe', requestHandler.stripe);

app.get('/authenticate', requestHandler.authenticate);


app.get('/truckLocations', (req, res) => {
  res.send(truckLocs.truckLocs.trucks);
});

app.get('/trucklist', (req, res) => {
  res.send(truckData.truckList.trucks);
});

app.get('/truckInfo', (req, res) => {
  res.send(truckData.truckList.trucks[0]);
});

/**
POST /checkout
body: {stripe ID, menu item id's, vendor id}
response: order number
**/
app.post('/checkout', requestHandler.checkout);

/**
GET /vendorIncomingOrders
query: vendor ID
response: [orders] -- will include all orderes with status of unfulfilled (0)
// ******REFACTOR THIS ROUTE INTO THE ABOVE********/
app.get('/vendorIncomingOrder', (req, res) => {
  res.send(orderingData.VendorOrders.order);
});
// ************************************************

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
