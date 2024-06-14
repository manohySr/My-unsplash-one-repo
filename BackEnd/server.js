const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });

const app = require('./app');

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log('DB connection successful!'));

// $env:NODE_ENV = "development"; node .\server.js => in the powershell for windows

const port = process.env.PORT || 1999;
app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
