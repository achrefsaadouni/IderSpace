const Question = require("../models/Question");

exports.createQuestion = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const question = new Question({
    createdAt: new Date(),
    subject: req.body.subject,
    content: req.body.content,
    author: req.userData.userId
  });
  question
    .save()
    .then(createdQuestion => {
      res.status(201).json({
        message: "question added successfully",
        question: {
          ...createdQuestion,
          id: createdQuestion._id
        }
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Creating a question failed!"
      });
    });
};

exports.updateQuestion = (req, res, next) => {
  const question = new Question({
    _id: req.body.id,
    subject: req.body.subject,
    content: req.body.content
  });
  question
    .updateOne({ _id: req.params.id, author: req.userData.userId }, question)
    .then(result => {
      console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Updated successful!" });
      } else {
        res.status(401).json({ message: "Updated successful!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Couldn't udpate question!"
      });
    });
};

exports.getQuestions = (req, res, next) => {
  const pageSize = +req.query.pagesize; //number of questions
  const currentPage = +req.query.page; //number of page
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
