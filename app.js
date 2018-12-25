'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes');
const pug = require('pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', api);
app.set('view engine', 'pug');
app.get('/login', (req, res) => {
  res.render('index.pug');
});


module.exports= app;
