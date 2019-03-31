const express = require("express");

const ChatbotController = require("../controllers/chatbot");

const router = express.Router();

router.post("/", ChatbotController.chat);


module.exports = router;
