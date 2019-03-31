const express = require("express");

const ActivityController = require("../controllers/Activities");
const checkAuth=require("../middleware/check-auth")
const router = express.Router();

router.post("/create", ActivityController.createActivity);
router.put("/addModules", ActivityController.addModulesToActivity);
router.put("/addTodos", ActivityController.addToDosToModule);



module.exports = router;
