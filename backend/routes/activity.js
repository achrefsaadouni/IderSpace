const express = require("express");

const ActivityController = require("../controllers/Activities");
const checkAuth = require("../middleware/check-auth")
const router = express.Router();

router.post("/create",checkAuth, ActivityController.createActivity);
router.post("/createActivity",checkAuth, ActivityController.create);
router.put("/addModules",checkAuth ,ActivityController.addModulesToActivity);
router.put("/addTodos",checkAuth, ActivityController.addToDosToModule);
router.put("/addMembersManually",checkAuth, ActivityController.addMembersManually);
router.put("/addSupervisor",checkAuth, ActivityController.assignSupervisors);
router.put("/assignModule",checkAuth, ActivityController.assignModule);
router.post("/pushTodo",checkAuth, ActivityController.pushTodoToValidation);
router.put("/validateRequest",checkAuth, ActivityController.validateRequest);
router.get("/getAllCreatedActivities",checkAuth, ActivityController.getAllCreatedActivities);
router.get("/getActivityModules",checkAuth, ActivityController.getActivityModules);
router.get("/getTodoByModule",checkAuth, ActivityController.getTodoByModule);
router.get("/getAllActivitiesSupervisor",checkAuth, ActivityController.getAllActivitiesSupervisor);
router.get("/getAllActivitiesSupervisor",checkAuth, ActivityController.getAllActivitiesSupervisor);
router.get("/getAllForStudent",checkAuth, ActivityController.getAllForStudent);
router.get("/getAllSupervisors",checkAuth, ActivityController.getAllSupervisors);
router.post("/getAllMembers",checkAuth, ActivityController.getAllMembers);
router.delete("/deleteToDo",checkAuth, ActivityController.deleteToDo);
ActivityController.incrementProgress()
ActivityController.enrichCv()


module.exports = router;
