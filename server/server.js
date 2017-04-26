/* eslint-disable global-require */
if (process.env.PORT === undefined) {
  // imports environment vars from .env file, keep at top
  require('dotenv').config();
}
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const requestHandler = require('./requestHandler.js');

const port = process.env.PORT || 8000;
const app = express();

// uncomment the console logs below for debugging:
app.use((req, res, next) => {
  // console.log('requrl= ', req.url);
  // console.log('reqmethod= ', req.method);
  next();
});

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/public')));

app.post('/search', requestHandler.search);

app.post('/orderStatus', requestHandler.orderStatus);

app.post('/menu', requestHandler.menu);

app.post('/vendorSignup', requestHandler.vendorSignup);

app.post('/vendorLogin', requestHandler.vendorLogin);

app.post('/userLogin', requestHandler.userLogin);

app.post('/userSignup', requestHandler.userSignup);

app.post('/stripe', requestHandler.stripe);

app.get('/authenticate', requestHandler.authenticate);

app.post('/checkout', requestHandler.checkout);

app.post('/vendorIncomingOrders', requestHandler.vendorIncomingOrders);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

const server = app.listen(port, () => {
  console.log(`Express Service live and listening on: ${port}`);
});

module.exports = server;
