const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Activity = require("../Models/Activity");
const Resume = require("../Models/Resume");
const Skills = require("../Models/Skills");
const scrapping = require("../ScrappingLinkedIn/index");
const kmeans = require("node-kmeans");
const configFile = require("../config");
const SkillsType = require("../Dictionnary/SkillsType");
const cloudinary = require('cloudinary');
require('../handler/cloudinary');
const upload = require('../handler/multer');


// Load Input Validation
const validateLoginInput = require("../validation/login");

const config = {
    email: process.env.SCRAPEDIN_EMAIL || configFile.email,
    password: process.env.SCRAPEDIN_PASSWORD || configFile.password,
    relatedProfilesKeywords: configFile.relatedProfilesKeywords,
    maxConcurrentCrawlers: configFile.maxConcurrentCrawlers,
    hasToLog: configFile.hasToLog,
    rootProfiles: configFile.rootProfiles,
    isHeadless: false,
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
            password: hash,
            adresse: req.body.adresse,
            sexe: req.body.sexe,
            birthday: req.body.birthday,
            activityRequest: []
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
                    role: fetchedUser.role,
                    profileImage: fetchedUser.profileImage
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
    User.findById({_id: req.userData.userId})
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
            fetchedUser.firstLogin = true;
            fetchedUser.facebook = req.body.facebook;
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
    User.findById({_id: req.userData.userId})
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
            console.log('------------' + url);
            if (result.linkedin !== '') {
                config.rootProfiles.push(url);
                config.idUser = fetchedUser.id;
                scrapping(config).then(r => {
                    return r;
                }).then(result => {
                    fetchedUser.save();
                    res.send(result);
                })
            } else {
                fetchedUser.save();
                res.send(fetchedUser);
            }

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
            if (typeof user.Resume !== "undefined") {
                {
                    if (typeof user.Resume.Skills !== "undefined") {
                        return resolve((user.Resume.Skills));
                    }
                }
            } else {
                return resolve();
            }
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

async function returnArrayAllSkills(arraySkills, devskills, microsoftSkills, personalSkills, otherSkills) {
    return new Promise(resolve => {
        if (typeof arraySkills !== "undefined" && typeof devskills !== "undefined" && typeof microsoftSkills !== "undefined" && typeof personalSkills !== "undefined" && typeof otherSkills !== "undefined") {
            for (let j = 0; j < arraySkills.length; j++) {
                let stat = false;
                if (arraySkills[j].type === "developpement") {
                    for (let f = 0; f < devskills.length; f++) {
                        if (arraySkills[j].name === devskills[f]) {
                            stat = true;
                        }
                    }
                    if (stat === false) {
                        devskills.push(arraySkills[j].name)
                    }
                } else if (arraySkills[j].type === "microsoft Skills") {
                    for (let f = 0; f < microsoftSkills.length; f++) {
                        if (arraySkills[j].name === microsoftSkills[f]) {
                            stat = true;
                        }
                    }
                    if (stat === false) {
                        microsoftSkills.push(arraySkills[j].name)
                    }
                } else if (arraySkills[j].type === "personal Skills") {
                    for (let f = 0; f < personalSkills.length; f++) {
                        if (arraySkills[j].name === personalSkills[f]) {
                            stat = true;
                        }
                    }
                    if (stat === false) {
                        personalSkills.push(arraySkills[j].name)
                    }
                } else {
                    for (let f = 0; f < otherSkills.length; f++) {
                        if (arraySkills[j].name === otherSkills[f]) {
                            stat = true;
                        }
                    }
                    if (stat === false) {
                        otherSkills.push(arraySkills[j].name)
                    }
                }
            }
            //console.log(userSkills);
            return resolve([devskills, microsoftSkills, personalSkills, otherSkills])
        } else {
            resolve([devskills, microsoftSkills, personalSkills, otherSkills]);
        }
    });
}


exports.getAllSkills = async (req, res, next) => {
    let devSkills = [];
    let microsoftSkills = [];
    let personalSkills = [];
    let otherSkills = [];
    const users = await getAllConcernedUsers(false);
    for (let i = 0; i < users.length; i++) {

        const returnedSkills = (await getSkillsOfUser(users[i].id));
        var result = await returnArrayAllSkills(returnedSkills, devSkills, microsoftSkills, personalSkills, otherSkills)
        devSkills = result[0];
        microsoftSkills = result[1];
        personalSkills = result[2];
        otherSkills = result[3];

    }


    return res.status(200).json({
        devSkills,
        microsoftSkills,
        personalSkills,
        otherSkills
    });
};

exports.getExperiences = async (req, res, next) => {
    let experience = await getExperiencesOfUser(req.params.id);
    return res.status(200).json({
        Experiences: experience
    });
};

function getAllConcernedUsers(classe) {
    return new Promise(resolve => {
        let listUser = [];
        User.find().then(async user => {
            //
            if (classe !== false) {
                for (t of user) {
                    if (t.class === classe) {
                        listUser.push(t);
                    }
                }
                return resolve(listUser);
            } else {
                return resolve(user);
            }
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
    User.findById({_id: req.userData.userId})
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
    User.findById({_id: req.userData.userId})
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
    const classe = req.body.classe;
    let users;
    if (typeof classe !== "undefined") {
        users = await getAllConcernedUsers(classe);
    } else {
        users = await getAllConcernedUsers(false);
    }
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
    let listUsers = [];
    let iteration = 0;
    while (iteration < 10) {
        let response = await getidWithRecommendation(vectors);
        iteration = iteration + 1;
        for (const t of response) {
            listUsers.push(t);
        }
    }
    let uniqueId = [];
    let bestRecommendation = [];
    let mayBeRecommended = [];
    for (const t of listUsers) {
        let status = false;
        for (const f of uniqueId) {
            if (t === f) {
                status = true;
            }
        }
        if (status === false) {
            uniqueId.push(t);
        }
    }
    for (let t = 0; t < uniqueId.length; t++) {
        let nombreiteration = 0;
        for (let f = 0; f < listUsers.length; f++) {
            if (uniqueId[t] === listUsers[f]) {
                nombreiteration = nombreiteration + 1;
            }
        }
        if (nombreiteration > 7) {
            bestRecommendation.push(users[uniqueId[t]]);
        } else {
            mayBeRecommended.push(users[uniqueId[t]]);
        }
    }
    return res.status(200).json({
        Recommended: bestRecommendation,
        MayBeRecommended: mayBeRecommended
    });
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

exports.getProfileForConnectedUser = (req, res, next) => {
    User.findOne({_id: req.userData.userId})
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "user not found"
                });
            }
            return res.status(200).json(user);
        })
        .catch(err => {
            console.log(err);
            return res.status(401).json({
                message: "Fetching profile failed!"
            });
        });
};

exports.getAllProfiles = (req, res, next) => {
    User.find()
        .then(user => {
            return res.status(200).json(user);
        })
        .catch(err => {
            console.log(err);
            return res.status(401).json({
                message: "Fetching profiles failed!"
            });
        });
};

exports.getSomeInfoUser = (req, res, next) => {
    User.findById(req.params.id, ["username", "firstname", "lastname"])
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "not found"
                });
            }
            return res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            return res.status(401).json({
                message: "Fetching users failed!"
            });
        });
};


exports.getActivityByUser = (req, res, next) => {
    User.findById({_id: req.userData.userId})
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "not found"
                });
            }
            return res.status(200).json(result.activityRequest);
        })
        .catch(err => {
            console.log(err);
            return res.status(401).json({
                message: "Fetching users failed!"
            });
        });
};

exports.changeProfilImage = async (req, res, next) => {
    const result = await cloudinary.v2.uploader.upload(req.file.path);
    let fetchedUser;
    User.findById({_id: req.userData.userId})
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "undifined user"
                });
            }
            fetchedUser = user;

        }).then(() => {
        if (fetchedUser.profileImage !== 'https://res.cloudinary.com/pi-dev/image/upload/v1555884886/bjce0bnez3w7oqbykqre.png') {
            fetchedUser.oldPhoto.push(fetchedUser.profileImage);
        }
        fetchedUser.profileImage = result.secure_url;
        fetchedUser.save();
        res.send({
            message: fetchedUser
        })
    })
        .catch(err => {
            console.log(err);
        });
};


exports.manageActivityRequest = async (req, res, next) => {
    let idActiv='';
    let repUser;
    idActiv = req.body.idActiv;
    repUser = req.body.repUser;
    console.log('--'+idActiv+'--'+repUser);
    let fetchedUser;
    let fetchedActivity;
    User.findById({_id: req.userData.userId})
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "undifined user"
                });
            }
            fetchedUser = user;

        }).then(async () => {
            console.log('1');
        const index = await getIndexActivityForUser(fetchedUser.activityRequest, idActiv);
        console.log('index : '+index);
        if (repUser === true) {
            console.log('2');
            fetchedUser.activityRequest[index].stat = 'accepted';
            await addMemberToActivity(fetchedUser.id, idActiv);
        }else{
            fetchedUser.activityRequest[index].stat = 'refused';
        }



    }).then(() =>{
        fetchedUser.save().then(()=>{
            return res.status(200).json({
                message: "activity setted"
            });
        })
    })

        .catch(err => {
            console.log(err);
        });
};


async function getIndexActivityForUser(array, id) {
    return new Promise(resolve => {
        let index;
        for (let i = 0; i < array.length; i++) {
            console.log('//////');
            console.log(array[i].idActivity);
            if (array[i].idActivity === id) {
                index = i;
            }
        }
        return resolve(index);
    });
}


async function addMemberToActivity(idUser, idActiv) {
    let fetchedActivity;
    Activity.findById({_id: idActiv}).then(activity => {
        if (!activity) {
            return res.status(401).json({
                message: "undifined activity"
            });
        }
        fetchedActivity = activity

    }).then(() => {
        fetchedActivity.members.push(
            idUser
        );
        fetchedActivity.save();

    })
        .catch(err => {
            console.log(err);
        });
}
