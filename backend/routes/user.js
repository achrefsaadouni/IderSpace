const express = require("express");

const UserController = require("../controllers/user");

const router = express.Router();

router.post("/signup", UserController.createUser);

router.post("/login", UserController.userLogin);

router.post("/addResume" , UserController.addResume);

router.post("/addlinkedIn" , UserController.addlinkedIn);

router.get("/getSkills/:id" , UserController.getSkills);

router.post("/addskills" , UserController.addSkills);

router.get("/getExperiences/:id" , UserController.getExperiences);

module.exports = router;
