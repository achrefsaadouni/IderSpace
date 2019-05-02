const express = require("express");

const UserController = require("../controllers/user");
const authCheck = require("../middleware/check-auth");
const upload = require('../handler/multer');

const router = express.Router();

router.post("/signup", UserController.createUser);

router.post("/login", UserController.userLogin);

router.post("/addResume", authCheck, UserController.addResume);

router.post("/addLinkedIn",authCheck, UserController.addlinkedIn);

router.put("/:d", UserController.updateUser);

router.get("/some-info/:id", UserController.getSomeInfoUser);

router.get("/getSkills/:id", UserController.getSkills);

router.get("/getAllSkills", UserController.getAllSkills);

router.post("/addSkills", authCheck, UserController.addSkills);

router.post("/addExperience", authCheck, UserController.addExperience);

router.get("/getExperiences/:id", UserController.getExperiences);

router.post("/removeSkill", UserController.removeSkill);

router.post("/removeExperience", UserController.removeExperience);

router.post("/checkData", UserController.checkData);

router.post("/getRecommendation", UserController.getRecommendation);

router.post("/updateSkill", UserController.updateSkill);

router.post("/changeProfilImage",authCheck ,upload.single('image') , UserController.changeProfilImage);

router.post("/changeCouvertureImage",authCheck ,upload.single('image') , UserController.changeCouvertureImage);

router.get("/profile", authCheck, UserController.getProfileForConnectedUser);

router.post("/addPublications", authCheck, UserController.addPublications);

router.get("/getActivityByUser", authCheck, UserController.getActivityByUser);

router.post("/manageActivityRequest", authCheck, UserController.manageActivityRequest);


router.post("/manageRequestFriend", authCheck, UserController.manageRequestFriend);


router.post("/getFriends", authCheck, getFriends.manageRequestFriend);

router.get("/profiles", UserController.getAllProfiles);

module.exports = router;
