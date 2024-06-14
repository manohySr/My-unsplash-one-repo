const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');
const Tour = require('./models/tourModel');
const Review = require('./models/reviewModel');
const User = require('./models/userModel');

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log('DB connection successful!'));

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/tours.json`));
const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/reviews.json`)
);
const users = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/users.json`));

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    await Review.deleteMany();
    await User.deleteMany();
    console.log('All collection deleted in DB');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

const importData = async () => {
  try {
    await Tour.create(tours);
    await Review.create(reviews);
    await User.create(users);
    console.log(`All collection imported from ${__filename} to the DB`);
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
