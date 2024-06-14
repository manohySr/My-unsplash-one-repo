const express = require('express');
const morgan = require('morgan');
const imageRouter = require('./route/imageRoute');

const app = express();

app.use(morgan('dev'));
// Limit to 10kb the data into req.body
app.use(express.json({ limit: '10kb' }));
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

app.use('/api/v1/', imageRouter);

app.use((req, res, next) => {
  console.error(error);
  next();
});

module.exports = app;
