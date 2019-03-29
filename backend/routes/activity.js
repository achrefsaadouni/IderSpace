const express = require("express");

const ActivityController = require("../controllers/Activities");
const checkAuth=require("../middleware/check-auth")
const router = express.Router();

router.post("/create",checkAuth, ActivityController.createActivity);



module.exports = router;
