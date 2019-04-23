const express = require("express");
const ChatController = require("../controllers/chat");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

router.post("/", checkAuth,ChatController.ask);
router.get("/",checkAuth,ChatController.getAll);
router.delete("/",checkAuth,ChatController.delete);

module.exports = router;
