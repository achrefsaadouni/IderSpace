const express = require("express");

const ChatController = require("../controllers/chat");

const router = express.Router();

router.post("/", ChatController.ask);


module.exports = router;
