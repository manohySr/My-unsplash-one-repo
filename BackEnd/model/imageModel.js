const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  label: {
    type: String,
    required: [true, 'Label cannot be empty'],
    unique: true
  },
  photo: {
    type: String,
    required: [true, 'Photo url cannot be empty'],
  },
});

const Image = new mongoose.model('Image', imageSchema);

module.exports = Image;
