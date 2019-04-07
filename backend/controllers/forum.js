const Forum = require("../models/Forum");

exports.addForum = (req, res, next) => {
  const newForum = Forum({
    category: req.body.category
  });
  newForum
    .save()
    .then(result => {
      res.status(201).json({
        category: result
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Creating forum failed!"
      });
    });
};

exports.deleteForum = (req, res, next) => {
  Forum.deleteOne({ _id: req.params.id })
    .then(result => {
      res.status(200).json({ message: "Deletion successful!" });
    })
    .catch(error => {
      res.status(500).json({
        message: "Deleting forum failed!"
      });
    });
};

exports.getAllForum = (req, res, next) => {
  BadWord.find()
    .then(documents => {
      res.status(200).json({
        category: documents
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Fetching categories failed!"
      });
    });
};

exports.getForum = (req, res, next) => {
  Forum.findById(req.params.id)
    .then(result => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "forum not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching category failed!"
      });
    });
};
