const express = require("express");

const UserController = require("../controllers/user");
const authCheck = require("../middleware/check-auth");

const router = express.Router();

router.post("/signup", UserController.createUser);

router.post("/login", UserController.userLogin);

router.post("/addResume", authCheck, UserController.addResume);

router.post("/addLinkedIn", UserController.addlinkedIn);

router.put("/:d", UserController.updateUser);

router.get("/getSkills/:id", UserController.getSkills);

router.post("/addSkills", authCheck, UserController.addSkills);

router.post("/addExperience", authCheck, UserController.addExperience);

router.get("/getExperiences/:id", UserController.getExperiences);

router.post("/removeSkill", UserController.removeSkill);

router.post("/removeExperience", UserController.removeExperience);

router.post("/checkData", UserController.checkData);

router.post("/getRecommendation", UserController.getRecommendation);

router.post("/updateSkill", UserController.updateSkill);

router.get("/profile", authCheck, UserController.getProfileForConnectedUser);

router.get("/profiles", UserController.getAllProfiles);

module.exports = router;
