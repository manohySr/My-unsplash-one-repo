const express = require('express');
const morgan = require('morgan');

const app = express();

// Using third part middleware
app.use(morgan('dev'));
app.use(express.json()); // Used to parse JSON bodies
app.use(express.static(`${__dirname}/public`));
// Allowing cors
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

module.exports = app;
