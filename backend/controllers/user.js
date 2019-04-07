const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Resume = require("../Models/Resume");
const Skills = require("../Models/Skills");
const scrapping = require("../ScrappingLinkedIn/index");
const kmeans = require("node-kmeans");
const configFile = require("../config");
const SkillsType = require("../Dictionnary/SkillsType");

// Load Input Validation
const validateLoginInput = require("../validation/login");

const config = {
    email: process.env.SCRAPEDIN_EMAIL || configFile.email,
    password: process.env.SCRAPEDIN_PASSWORD || configFile.password,
    relatedProfilesKeywords: configFile.relatedProfilesKeywords,
    maxConcurrentCrawlers: configFile.maxConcurrentCrawlers,
    hasToLog: configFile.hasToLog,
    rootProfiles: configFile.rootProfiles,
    isHeadless: true,
    idUser: ""
};

exports.createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User({
            email: req.body.email,
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            role: req.body.role,
            github: req.body.github,
            linkedin: req.body.linkedin,
            class: req.body.class,
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
    const {errors, isValid} = validateLoginInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

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
                    username: fetchedUser.username,
                    role: fetchedUser.role
                },
                "secret_this_should_be_longer",
                {expiresIn: "1h"}
            );
            res.status(200).json({
                success: true,
                token: "Bearer " + token
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
    const resume = mongoose.model("resume", Resume);
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
            });
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
            return true;
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            fetchedUser.linkedin = url;
            return fetchedUser;
        })
        .then(result => {
            fetchedUser.save().then(result => {
                config.rootProfiles.push(url);
                config.idUser = fetchedUser.id;
                scrapping(config);
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(401).json({
                message: "Invalid authentication credentials!"
            });
        });
};

exports.updateUser = (req, res, next) => {
    const user = new User({
        _id: req.body.id,
        title: req.body.title,
        content: req.body.content,
        imagePath: imagePath,
        creator: req.userData.userId
    });
    User.updateOne({_id: req.params.id}, user)
        .then(result => {
            if (result.n > 0) {
                res.status(200).json({message: "Update successful!"});
            } else {
                res.status(401).json({message: "Not authorized!"});
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Couldn't udpate user!"
            });
        });
};

async function getExperiencesOfUser(id) {
    return new Promise(resolve => {
        User.findById(id).exec(function (err, user) {
            return resolve(user.Resume.experiences);
        });
    });
}

async function getSkillsOfUser(id) {
    return new Promise(resolve => {
        User.findById(id).exec(function (err, user) {
            return resolve(user.Resume.Skills);
        });
    });
}

async function getSkillsForCollectData(user) {
    return new Promise(resolve => {
        //console.log(user)
        if (typeof user.Resume !== "undefined") {
            {
                if (typeof user.Resume.Skills !== "undefined") {
                    return resolve(getMoyenneSkills(user.Resume.Skills));
                }
            }
        } else {
            return resolve(0);
        }
    });
}

async function getMoyenneSkills(skills) {
    return new Promise(resolve => {
        let sommeskills = 0;
        let sommelevels = 0;
        for (const skill of skills) {
            sommelevels += skill.level;
            sommeskills++;
        }
        if (sommeskills === 0) {
            return resolve(0);
        } else {
            return resolve(sommelevels / sommeskills);
        }
    });
}

async function getMoyenneSkillsOfConcernedSkills(skills, somme) {
    return new Promise(resolve => {
        let sommelevels = 0;
        for (const skill of skills) {
            console.log(skill.name);
            console.log(skill.level);
            sommelevels += skill.level;
        }
        console.log(sommelevels);
        console.log(somme);
        return resolve(sommelevels / somme);
    });
}

async function getExperiencesForCollectData(user) {
    return new Promise(resolve => {
        if (typeof user.Resume !== "undefined") {
            if (typeof user.Resume.experiences !== "undefined") {
                return resolve(user.Resume.experiences.length);
            }
        } else return resolve(0);
    });
}

async function makeData(array) {
    const data = [];
    // for(const user of array){ //x is a bad name by the way
    const attribute1 = await getSkillsOfUser(array.id);
    const attribute2 = await getExperiencesOfUser(array.id);
    data.push(attribute1, attribute2);
    // }
    return attribute1;
}

async function returnNameSkill(array) {
    let chaine = "";
    for (const t of array) {
        chaine += t.name + ":" + t.level;
    }
    return chaine;
}

exports.getSkills = async (req, res, next) => {
    let skills = await getSkillsOfUser(req.params.id);
    return res.status(200).json({
        Skills: skills
    });
};

exports.getExperiences = async (req, res, next) => {
    let experience = await getExperiencesOfUser(req.params.id);
    return res.status(200).json({
        Experiences: experience
    });
};

function getAllConcernedUsers() {
    return new Promise(resolve => {
        User.find().then(async user => {
            return resolve(user);
        });
    });
}

exports.checkData = async (req, res, next) => {
    const data = [];
    let response = await getAllConcernedUsers();
    const tt = await makeData(response);
    let people = {user: response.firstname};
    for (var i = 0; i < tt.length; i++) {
        people = {
            ...people,
            ["" + tt[i].name]: tt[i].level
        };
    }
    data.push(people);
    return res.status(200).json({
        data
    });
};

exports.addSkills = (req, res, next) => {
    const skills = mongoose.model("skills", Skills);
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
            return verify;
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "user already have this skill"
                });
            } else {
                fetchedUser.Resume.Skills.push(
                    new skills({
                        name: req.body.nameSkill,
                        level: 1,
                        type: SkillsType(req.body.nameSkill)
                    })
                );
                fetchedUser.save().then(result => {
                    res.status(200).json({
                        msg: "skill has been added successfully"
                    });
                });
            }
        })
        .catch(err => {
            console.log(err);
        });
};

exports.addExperience = (req, res, next) => {
    const experiences = mongoose.model("experiences", Experience);
    let fetchedUser;
    User.findById({_id: req.body.id})
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "undifined user"
                });
            }
            user.Resume.experiences.push(
                new experiences({
                    name: req.body.name,
                    description: req.body.description,
                    start_date: req.body.startDate,
                    end_date: req.body.endDate,
                    address: req.body.address
                })
            );
            user.save().then(result => {
                res.status(200).json({
                    msg: "Experience has been added successfully"
                });
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(401).json({
                message: "Invalid authentication credentials!"
            });
        });
};

exports.removeSkill = (req, res, next) => {
    let skillstab;
    let fetcheduser;
    let state = true;
    User.findById({_id: req.body.id})
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "undifined user"
                });
            }
            fetcheduser = user;
            skillstab = user.Resume.Skills;
            for (const skill of skillstab) {
                if (skill.id === req.body.idSkill) {
                    state = false;
                    user.Resume.Skills.id(req.body.idSkill).remove();
                }
            }
            return state;
        })
        .then(result => {
            if (!result) {
                fetcheduser.save().then(result => {
                    res.status(200).json({
                        msg: "skill deleted successfully"
                    });
                });
            } else {
                return res.status(401).json({
                    message: "Something wrong with the delete!"
                });
            }
        })
        .catch(err => {
            console.log(err);
            return res.status(401).json({
                message: "Something wrong with the delete!"
            });
        });
};

exports.removeExperience = (req, res, next) => {
    let experiencestab;
    let fetcheduser;
    let state = true;
    User.findById({_id: req.body.id})
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "undifined user"
                });
            }
            fetcheduser = user;
            experiencestab = user.Resume.experiences;
            for (const experience of experiencestab) {
                if (experience.id === req.body.idExperience) {
                    state = false;
                    user.Resume.experiences.id(req.body.idExperience).remove();
                }
            }
            return state;
        })
        .then(result => {
            if (!result) {
                fetcheduser.save().then(result => {
                    res.status(200).json({
                        msg: "Experience deleted successfully"
                    });
                });
            } else {
                return res.status(401).json({
                    message: "Something wrong with the delete!"
                });
            }
        })
        .catch(err => {
            console.log(err);
            return res.status(401).json({
                message: "Something wrong with the delete!"
            });
        });
};

exports.getRecommendation = async (req, res, next) => {
    const reqSkills = req.body.reqSkills;
    const data = [];
    let users = await getAllConcernedUsers();
    let people = {};
    for (const user of users) {
        const skill = await getSkillsForCollectData(user);
        const experience = await getExperiencesForCollectData(user);
        const concernedScore = await getSkillsConcerned(user, reqSkills);
        let prototype = {
            user: user.id,
            skills: skill,
            Experiences: experience,
            ApprovedAnswer: user.nbrBestAnswer,
            concernedScore: concernedScore
        };
        people = Object.assign(prototype);
        data.push(people);
    }
    let vectors = [];
    let vectors2 = [];
    let vector3 = [];
    for (let i = 0; i < data.length; i++) {
        vectors2[i] = [
            data[i]["skills"],
            data[i]["Experiences"],
            data[i]["ApprovedAnswer"]
        ];
    }
    for (let i = 0; i < data.length; i++) {
        let x = 0;
        let y = 0;
        for (let j = 0; j < vectors2[i].length; j++) {
            x += vectors2[i][j];
            y++;
        }
        vector3[i] = x / y;
        x = 0;
        y = 0;
        vectors[i] = [data[i]["concernedScore"], vector3[i]];
    }
    let response = await getidWithRecommendation(vectors);
    let listUsers = [];
    for (const t of response) {
        listUsers.push(users[t]);
    }
    return res.status(200).json(listUsers);
};

async function getSkillsConcerned(user, reqSkills) {
    return new Promise(async resolve => {
        //console.log(user)
        if (typeof user.Resume !== "undefined") {
            {
                if (typeof user.Resume.Skills !== "undefined") {
                    const findedSkills = await returnFindedSkills(user, reqSkills);
                    if (findedSkills.length !== 0) {
                        return resolve(
                            getMoyenneSkillsOfConcernedSkills(findedSkills, reqSkills.length)
                        );
                    } else {
                        return resolve(0);
                    }
                }
            }
        } else {
            return resolve(0);
        }
    });
}

async function returnFindedSkills(user, reqSkills) {
    return new Promise(resolve => {
        const skills = [];
        for (const reqskill of reqSkills) {
            for (const skill of user.Resume.Skills) {
                if (skill.name.toUpperCase().indexOf(reqskill.toUpperCase()) !== -1) {
                    skills.push(skill);
                }
            }
        }
        return resolve(skills);
    });
}

function getidWithRecommendation(vectors) {
    return new Promise(resolve => {
        kmeans.clusterize(vectors, {k: 2}, (err, res) => {
            let Recommendation = [];
            if (err) console.error(err);
            else {
                let x = 0;
                let y = 0;
                let newcentre;
                for (let i = 0; i < res.length; i++) {
                    for (let j = 0; j < res[i].centroid.length; j++) {
                        if (j === 0) {
                            x += 1 * res[i].centroid[j];
                        }
                        if (j === 1) {
                            x += 1 * res[i].centroid[j];
                        }
                    }
                    console.log(res);
                    if (y < x) {
                        y = x;
                        newcentre = i;
                    }
                    x = 0;
                }
                let vector4;
                let people = "";
                for (let i = 0; i < res[newcentre].clusterInd.length; i++) {
                    //console.log('dkhal mara');
                    console.log(res[newcentre].clusterInd[i]);
                    Recommendation.push(res[newcentre].clusterInd[i]);
                }
            }
            return resolve(Recommendation);
        });
    });
}

exports.updateSkill = (req, res, next) => {
    let skillstab;
    let fetcheduser;
    let state = true;
    let newLevel = req.body.level;
    User.findById({_id: req.body.idUser})
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "undifined user"
                });
            }
            fetcheduser = user;
            skillstab = user.Resume.Skills;
            for (const skill of skillstab) {
                if (skill.id === req.body.idSkill) {
                    state = false;
                    if (newLevel) {
                        console.log(user.Resume.Skills.id(req.body.idSkill).level);
                        user.Resume.Skills.id(req.body.idSkill).level = newLevel;
                    }
                }
            }
            return state;
        })
        .then(result => {
            if (!result) {
                fetcheduser.save().then(result => {
                    res.status(200).json({
                        msg: "skill updated successfully"
                    });
                });
            } else {
                return res.status(401).json({
                    message: "Something wrong with the update of the skill!"
                });
            }
        })
        .catch(err => {
            console.log(err);
            return res.status(401).json({
                message: "Something wrong with the update of the skill!"
            });
        });
};
