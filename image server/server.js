const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const port = process.env.PORT || 2002;

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
