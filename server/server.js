'strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../src/client')));

app.get('/home', (req, res) => {
  res.send('hello world from home');
});

app.listen(port, () => {
// console.log(`Express Service live and listening on: ${port}`);
});
