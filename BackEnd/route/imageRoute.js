const express = require('express');
const imageRouter = express.Router();
const controller = require('./../controller/imageController');

imageRouter
  .route('/unsplash')
  .post(controller.postImage)
  .get(controller.getImage);

imageRouter
  .route('/unsplash/:imageId')
  .get(controller.getImage)
  .post(controller.deleteImage);
module.exports = imageRouter;
