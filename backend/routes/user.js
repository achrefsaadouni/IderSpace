const express = require("express");

const UserController = require("../controllers/user");

const router = express.Router();

router.post("/signup", UserController.createUser);

router.post("/login", UserController.userLogin);

router.post("/addResume" , UserController.addResume);

router.post("/addLinkedIn" , UserController.addlinkedIn);

router.get("/getSkills/:id" , UserController.getSkills);

router.post("/addSkills" , UserController.addSkills);

router.post("/addExperience" , UserController.addExperience);

router.get("/getExperiences/:id" , UserController.getExperiences);

router.post("/removeSkill" , UserController.removeSkill);

router.post("/removeExperience" , UserController.removeExperience);

router.post("/checkData" , UserController.checkData);

module.exports = router;
