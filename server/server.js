'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8888;
const app = express();

app.use('/', express.static(path.static(__.dirname + '../src/client')));

app.listen(port, function(){
  console.log('Express Service live and listening on: ', port);
})
