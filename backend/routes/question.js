const express = require("express");

const QuestionController = require("../controllers/question");
const authCheck = require("../middleware/check-auth");

const router = express.Router();

router.post("/", authCheck, QuestionController.createQuestion);

router.delete("/:id", authCheck, QuestionController.deleteQuestion);

router.get("/:id", authCheck, QuestionController.getQuestion);

router.get("/", authCheck, QuestionController.getQuestions);

router.put("/:id", authCheck, QuestionController.updateQuestion);

module.exports = router;
