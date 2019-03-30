const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Resume = require("../Models/Resume");
const Skills = require('../Models/Skills.js');
const scrapping = require('../ScrappingLinkedIn/index');
const configFile = require('../config');
const SkillsType = require('../Dictionnary/SkillsType');
const config = {
    email: process.env.SCRAPEDIN_EMAIL || configFile.email,
    password: process.env.SCRAPEDIN_PASSWORD || configFile.password,
    relatedProfilesKeywords: configFile.relatedProfilesKeywords,
    maxConcurrentCrawlers: configFile.maxConcurrentCrawlers,
    hasToLog: configFile.hasToLog,
    rootProfiles: configFile.rootProfiles,
    isHeadless: true,
    idUser: ''
}

exports.createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User({
            email: req.body.email,
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            role: req.body.role,
            password: hash
        });
        user
            .save()
            .then(result => {
                console.log("ok");
                res.status(201).json({
                    message: "User created!",
                    result: result
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    });
};

exports.userLogin = (req, res, next) => {
    let fetchedUser;
    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password);
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            const token = jwt.sign(
                {
                    email: fetchedUser.email,
                    userId: fetchedUser._id,
                    username: fetchedUser.username
                },
                "secret_this_should_be_longer",
                {expiresIn: "1h"}
            );
            res.status(200).json({
                token: token,
                expiresIn: 3600,
                user: {
                    email: fetchedUser.email,
                    username: fetchedUser.username,
                    firstname: fetchedUser.firstname,
                    lastname: fetchedUser.lastname,
                    role: fetchedUser.role
                }
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(401).json({
                message: "Invalid authentication credentials!"
            });
        });
};

exports.addResume = (req, res, next) => {
    const resume = mongoose.model('resume', Resume);
    let fetchedUser;
    User.findById({_id: req.body.id})
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "undifined user"
                });
            }
            fetchedUser = user;
            return true;
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            fetchedUser.Resume = new resume({
                hobbies: req.body.hobbies,
                about: req.body.about,
                languages: req.body.languages
            });
            fetchedUser.save().then(result => {
                res.status(200).json({
                    fetchedUser
                });
            })
        })
        .catch(err => {
            console.log(err);
            return res.status(401).json({
                message: "Invalid authentication credentials!"
            });
        });
};


exports.addlinkedIn = (req, res, next) => {
    const url = req.body.url;
    let fetchedUser;
    User.findById({_id: req.body.id})
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "undifined user"
                });
            }
            fetchedUser = user;
        })
        .then(() => {
            fetchedUser.linkedin = url;
            fetchedUser.save().then(result => {
                config.rootProfiles.push(url);
                config.idUser = fetchedUser.id;
                scrapping(config);
            })
        })
        .catch(err => {
            console.log(err);
            return res.status(401).json({
                message: "Invalid authentication credentials!"
            });
        });
};


async function getSkillsOfUser(id) {
    return new Promise(resolve => {
        User.findById(id).exec(function (err, user) {
            return resolve(user.Resume.Skills);
        });
    });

}


async function getExperiencesOfUser(id) {
    return new Promise(resolve => {
        User.findById(id).exec(function (err, user) {
            return resolve(user.Resume.experiences);
        });
    });

}

exports.getSkills = async (req, res, next) => {
    let skills = await getSkillsOfUser(req.params.id)
    return res.status(200).json({
        Skills: skills
    });
};

exports.getExperiences = async (req, res, next) => {
    let experience = await getExperiencesOfUser(req.params.id)
    return res.status(200).json({
        Experiences: experience
    });
};

exports.addSkills = (req, res, next) => {
    const skills = mongoose.model('skills', Skills);
    let fetchedUser;
    let verify = true;
    User.findById({_id: req.body.id})
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "undifined user"
                });
            }
            for (const skill of user.Resume.Skills) {
                if (skill.name === req.body.nameSkill) {
                    verify = false;
                }
            }
            fetchedUser = user;
            return verify
        }).then(result => {
        if (!result) {
            return res.status(401).json({
                message: "user already have this skill"
            });
        } else {
            fetchedUser.Resume.Skills.push(new skills({
                name: req.body.nameSkill,
                level: 1,
                type: SkillsType(req.body.nameSkill)
            }));
            fetchedUser.save().then(result => {
                res.status(200).json({
                    msg: "skill has been added successfully"
                });
            })
        }
    })
        .catch(err => {
            console.log(err);
            return res.status(401).json({
                message: "Invalid authentication credentials!"
            });
        });
};



