const express = require("express");

const ForumController = require("../controllers/forum");
const authCheck = require("../middleware/check-auth");

const router = express.Router();

router.post("/", ForumController.addForum);

router.delete("/:id", ForumController.deleteForum);

router.get("/:id", ForumController.getForum);

router.get("/", ForumController.getAllForum);

module.exports = router;
