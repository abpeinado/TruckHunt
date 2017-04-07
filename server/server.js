'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.use('/', express.static(path.join(__dirname, '../src/client')));

app.get('/home', function(req, res){
  res.send('hello world from home');
})

app.listen(port, function(){
  console.log('Express Service live and listening on: ', port);
})
