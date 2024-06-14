const Image = require('./../model/imageModel');

exports.postImage = async (req, res, next) => {
  try {
    const newDoc = await Image.create(req.body);
    res.status(201).json({
      status: 'success',
      data: newDoc,
    });
  } catch (error) {
    next(error);
  }
};

exports.getImage = async (req, res, next) => {
  try {
    let filter = {};
    if (req.params.imageId) filter = { _id: req.params.imageId };
    const doc = await Image.find(filter);

    res.status(200).json({
      status: 'success',
      result: doc.length,
      data: doc,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteImage = async (req, res, next) => {
  try {
    const bodyLabel = req.body.label;
    //   console.log(req.params.imageId);
    const [doc] = await Image.find({ _id: req.params.imageId });
    const { label } = doc;
    if (label === bodyLabel) {
      await Image.findByIdAndDelete(req.params.imageId);
      res.status(204).json({
        status: 'success',
        data: null,
      });
    } else {
      res.status(400).json({
        status: 'fail',
        message: 'The label should be the same',
      });
    }
  } catch (error) {
    next(error);
  }
};
