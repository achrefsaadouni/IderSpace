const Filter = require("bad-words");
const Question = require("../models/Question");
const BadWord = require("../models/BadWord");
const User = require("../models/user");

filter = new Filter();

exports.addBadWord = (req, res, next) => {
  const newBadWord = BadWord({
    word: req.body.word
  });
  newBadWord
    .save()
    .then(result => {
      res.status(201).json({
        word: result
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Creating word failed!"
      });
    });
};

exports.deleteBadWord = (req, res, next) => {
  BadWord.deleteOne({ _id: req.params.id })
    .then(result => {
      res.status(200).json({ message: "Deletion successful!" });
    })
    .catch(error => {
      res.status(500).json({
        message: "Deleting word failed!"
      });
    });
};

exports.getAllBadWords = (req, res, next) => {
  console.log("hello");
  BadWord.find()
    .then(documents => {
      res.status(200).json({
        words: documents
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Fetching words failed!"
      });
    });
};

exports.createQuestion = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");

  //adding bad words
  let badwords = [];
  BadWord.find()
    .then(documents => {
      for (var i = 0; i < documents.length; i++) {
        badwords.push(documents[i].word);
      }
    })
    .then(() => {
      filter.addWords(...badwords);
      console.log(badwords);
      const question = new Question({
        category: req.body.categoryId,
        createdAt: new Date(),
        subject: filter.clean(req.body.subject),
        content: filter.clean(req.body.content),
        author: req.userData.userId
      });
      if (
        filter.isProfane(req.body.content) ||
        filter.isProfane(req.body.subject)
      ) {
        return res.status(400).json({
          message: "bad words exist",
          badword: true
        });
      }
      question
        .save()
        .then(createdQuestion => {
          res.status(201).json({
            badword: false,
            message: "question added successfully",
            question: createdQuestion
          });
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({
            message: "Creating a question failed!"
          });
        });
    });
};

exports.updateQuestion = (req, res, next) => {
  //adding bad words
  let badwords = [];
  BadWord.find()
    .then(documents => {
      for (var i = 0; i < documents.length; i++) {
        badwords.push(documents[i].word);
      }
    })
    .then(() => {
      filter.addWords(...badwords);
      console.log(badwords);
      const question = {
        subject: req.body.subject,
        content: req.body.content
      };
      Question.findOne({ _id: req.params.id, author: req.userData.userId })
        .then(result => {
          result.subject = question.subject;
          result.content = question.content;
          result.category = question.category;
          result.save().then(result => {
            if (
              filter.isProfane(req.body.content) ||
              filter.isProfane(req.body.subject)
            ) {
              return res.status(400).json({
                message: "bad words exist",
                badword: true
              });
            }
            return res.status(200).json({
              badword: false,
              message: "Update successful!"
            });
          });
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({
            message: "Couldn't udpate question!"
          });
        });
    });
};

exports.getQuestions = (req, res, next) => {
  const pageSize = +req.query.pageSize; //number of questions
  const currentPage = +req.query.currentPage; //number of page
  const questionQuery = Question.find();
  let fetchedQuestions;
  if (pageSize && currentPage) {
    questionQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }
  questionQuery
    .then(documents => {
      fetchedQuestions = documents;
      return Question.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Questions fetched successfully!",
        questions: fetchedQuestions,
        maxQuestions: count
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Fetching Questions failed!"
      });
    });
};

exports.getQuestion = (req, res, next) => {
  Question.findById(req.params.id)
    .then(Question => {
      if (Question) {
        res.status(200).json(Question);
      } else {
        res.status(404).json({ message: "Question not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching Question failed!"
      });
    });
};

exports.deleteQuestion = (req, res, next) => {
  Question.deleteOne({ _id: req.params.id, author: req.userData.userId })
    .then(result => {
      console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Deleting Questions failed!"
      });
    });
};

exports.likeQuestion = (req, res, next) => {
  Question.findById(req.params.id).then(result => {
    if (
      result.likes.filter(like => like.user.toString() === req.userData.userId)
        .length > 0
    ) {
      return res
        .status(400)
        .json({ alreadyliked: "User already liked this post" });
    }

    // Add user id to likes array
    result.likes.unshift({ user: req.userData.userId });

    result.save().then(result => res.json(result));
  });
};

exports.unlikeQuestion = (req, res, next) => {
  Question.findById(req.params.id)
    .then(result => {
      if (
        result.likes.filter(
          like => like.user.toString() === req.userData.userId
        ).length === 0
      ) {
        return res
          .status(400)
          .json({ alreadyliked: "You have not yet liked this post" });
      }

      // Get remove index
      const removeIndex = result.likes
        .map(item => item.user.toString())
        .indexOf(req.userData.userId);

      // Splice out of array
      result.likes.splice(removeIndex, 1);

      // Save
      result.save().then(result => res.json(result));
    })
    .catch(err => res.status(404).json({ postnotfound: "No Question found" }));
};

exports.addCommenttoQuestion = (req, res, next) => {
  Question.findById(req.params.id)
    .then(result => {
      const newComment = {
        content: req.body.content,
        name: req.body.name,
        user: req.userData.userId
      };

      // Add to comments array
      result.comments.unshift(newComment);

      // Save
      result.save().then(result => res.json(result));
    })
    .catch(err => res.status(404).json({ postnotfound: "No Question found" }));
};

exports.deleteCommenttoQuestion = (req, res, next) => {
  Question.findById(req.params.id)
    .then(result => {
      // Check to see if comment exists
      if (
        result.comments.filter(
          comment => comment._id.toString() === req.params.comment_id
        ).length === 0
      ) {
        return res
          .status(404)
          .json({ commentnotexists: "Comment does not exist" });
      }

      // Get remove index
      const removeIndex = result.comments
        .map(item => item._id.toString())
        .indexOf(req.params.comment_id);

      // Splice comment out of array
      result.comments.splice(removeIndex, 1);

      result.save().then(result => res.json(result));
    })
    .catch(err => res.status(404).json({ postnotfound: "No Question found" }));
};

exports.bestCommentQuestion = (req, res, next) => {
  Question.findById(req.params.id)
    .then(result => {
      // Check to see if comment exists
      if (
        result.comments.filter(
          comment => comment._id.toString() === req.params.comment_id
        ).length === 0
      ) {
        return res
          .status(404)
          .json({ commentnotexists: "Comment does not exist" });
      }

      if (result.author._id.toString() === req.userData.userId) {
        // unprove the last comment if exist
        if (
          result.comments.filter(comment => comment.approved === true)
            .length !== 0
        ) {
          result.comments.forEach(comment => {
            comment.approved = false;
          });
        }

        // Approve the comment
        result.comments.find(
          comment => comment._id.toString() === req.params.comment_id
        ).approved = true;

        // add +1 aprove to user
        const userId = result.comments
          .find(comment => comment._id.toString() === req.params.comment_id)
          .user._id.toString();
        User.findById(userId).then(user => {
          user.nbrBestAnswer += 1;
          user.save();
        });

        result.save().then(result => res.json(result));
      } else {
        return res.status(401).json({ commentnotexists: "Not authorized" });
      }
    })
    .catch(err => res.status(404).json({ postnotfound: "No Question found" }));
};

exports.getAllCommentsQuestions = (req, res, next) => {
  const questionQuery = Question.findById(req.params.id).distinct("comments"); // get all comments
  let fetcheDoc;
  questionQuery
    .then(documents => {
      fetcheDoc = documents;
      return fetcheDoc.length;
    })
    .then(count => {
      res.status(200).json({
        message: "Comments fetched successfully!",
        comments: fetcheDoc,
        maxComments: count
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Fetching Questions failed!"
      });
    });
};
