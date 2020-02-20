const express = require('express');
const app = express();
const router = require('./routes');
const mongoose = require('mongoose');
mongoose.Promise = Promise;

const isDev = process.env.NODE_ENV !== 'production';

const DB_URL= isDev ? require('./config').DB_URL : require('./config').DB_URL_PROD;

mongoose.connect(DB_URL, {useMongoClient: true}, (err) => {
  if (err) return console.error(err);               // eslint-disable-line no-console
  console.log(`Connected to database ${DB_URL}`);   // eslint-disable-line no-console
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/', router);

module.exports = app;