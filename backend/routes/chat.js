const express = require("express");
const ChatController = require("../controllers/chat");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

router.post("/", checkAuth,ChatController.ask);
router.get("/",checkAuth,ChatController.getAll);


module.exports = router;
