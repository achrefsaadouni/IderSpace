const express = require("express");

const QuestionController = require("../controllers/question");
const authCheck = require("../middleware/check-auth");

const router = express.Router();

router.post("/", authCheck, QuestionController.createQuestion);

router.get("/last3", QuestionController.getLast3Questions);

router.delete("/:id", authCheck, QuestionController.deleteQuestion);

router.get("/:id", authCheck, QuestionController.getQuestion);

router.get("/", QuestionController.getQuestions);

router.get("/forum/:id", authCheck, QuestionController.getQuestionsByCategory);
//"category": ObjectId("5caa1f12ff6f1827b83b6464"),

router.put("/:id", authCheck, QuestionController.updateQuestion);

router.post("/like/:id", authCheck, QuestionController.likeQuestion);

router.post("/unlike/:id", authCheck, QuestionController.unlikeQuestion);

router.post("/comment/:id", authCheck, QuestionController.addCommenttoQuestion);

router.get("/comments/:id", QuestionController.getAllCommentsQuestions);

router.get("/search/1/1/1/:text", QuestionController.searchQuestion);

router.delete(
  "/:id/comment/:comment_id",
  authCheck,
  QuestionController.deleteCommenttoQuestion
);

router.post(
  "/comment/:id/:comment_id",
  authCheck,
  QuestionController.bestCommentQuestion
);

router.get("/get/badwords", QuestionController.getAllBadWords);

router.post("/badword", QuestionController.addBadWord);

router.delete("/badword/:id", QuestionController.deleteBadWord);

module.exports = router;
