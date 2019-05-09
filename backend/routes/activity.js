const express = require("express");

const ActivityController = require("../controllers/Activities");
const checkAuth = require("../middleware/check-auth")
const router = express.Router();

router.post("/create",checkAuth, ActivityController.createActivity);
router.post("/createActivity",checkAuth, ActivityController.create);
router.put("/addModules",checkAuth ,ActivityController.addModulesToActivity);
router.post("/addTodo", ActivityController.addTodo);
router.put("/addMembersManually",checkAuth, ActivityController.addMembersManually);
router.put("/addSupervisor",checkAuth, ActivityController.assignSupervisors);
router.put("/assignModule",checkAuth, ActivityController.assignModule);
router.post("/pushTodo",checkAuth, ActivityController.pushTodoToValidation);
router.post("/removeTodo",checkAuth, ActivityController.removeTodoToValidation);
router.post("/validateRequest",checkAuth, ActivityController.validateRequest);
router.get("/getAllCreatedActivities",checkAuth, ActivityController.getAllCreatedActivities);
router.get("/getActivityModules",checkAuth, ActivityController.getActivityModules);
router.post("/getTodoByModule", ActivityController.getTodoByModule);
router.get("/getAllActivitiesSupervisor",checkAuth, ActivityController.getAllActivitiesSupervisor);
router.get("/getAllActivitiesSupervisor",checkAuth, ActivityController.getAllActivitiesSupervisor);
router.get("/getAllForStudent",checkAuth, ActivityController.getAllForStudent);
router.get("/getAllForAdmin",checkAuth, ActivityController.getAllForAdmin);
router.get("/getAllSupervisors",checkAuth, ActivityController.getAllSupervisors);
router.post("/getAllMembers",checkAuth, ActivityController.getAllMembers);
router.post("/deleteToDo",checkAuth, ActivityController.deleteToDo);
router.post("/getActivityById", ActivityController.getActivityById);
router.post("/getActMembers",checkAuth, ActivityController.getActMembers);
router.post("/createModule",checkAuth, ActivityController.createModule);
//ActivityController.incrementProgress()
ActivityController.enrichCv()


module.exports = router;
