const activity = require("../Models/Activity")
const User = require("../models/user");
const Module = require("../models/Module");
const todo = require("../models/ToDo");
const groups = require("../models/Groups");
const Workspace = require("../models/Workspace");
const Skills = require("../Models/Skills");
const Exp = require("../Models/Experience");
const mongoose = require("mongoose");
const ValidatingRequests = require("../models/ValidatingRequests");
var schedule = require('node-schedule');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2')
var logger = require("./logger").Logger;
const ActivityRequest = require("../Models/ActivityRequest");

// async..await is not allowed in global scope, must use a wrapper
async function main(x) {

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let account = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: account.user, // generated ethereal user
            pass: account.pass // generated ethereal password
        }
    });

    // setup email data with unicode symbols


    // send mail with defined transport object
    let info = await transporter.sendMail(x)

    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
function timeLog(req) {
    // this is an example of how you would call our new logging system to log an info message
    logger.info(req);

}


exports.createActivity = (req, res, next) => {
    if (req.userData.role === "teacher") {
        const act = new activity({
            title: req.body.title,
            description: req.body.description,
            descriptionDocument: req.body.descriptionDocument,
            type: req.body.type,
            creator: req.userData.userId,
            techs:req.body.techs
        })
        act.save()
            .then(result => {
                console.log("success");
                timeLog("created activity")
                res.status(200).json({
                    message: "activity first step created!",
                    result: result
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            });
    }
    else {
        console.log("user is not a teacher")
    }

}
exports.addModulesToActivity = (req, res, next) => {

    let modulesId = []
    let allModules

    var promises = req.body.modules.map(e => {
        const module = new Module({
            title: e.title,
            description: e.description,
            end_date: e.end_date,
            progress: e.progress,
            start_date: e.start_date,
        })
        module.save().then(re => {
            modulesId.push(re.id)
        })
        return modulesId
    })
    Promise.all(promises).then(result => {
        activity.findById(req.body.actvityId).then((activ) => {
            //console.log(activ)
            activ.modules.push(result)
            activ.save()

        })
    })


        .then(result => {

            console.log("success");
            res.status(200).json({
                message: "modules added to activity",
                result: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });


}
exports.addToDosToModule = (req, res, next) => {

    let todosId = []

    var promises = req.body.todos.map(e => {
        const to = new todo({
            name: e.name,
            description: e.description,
            done: false,

        })
        to.save().then(re => {
            todosId.push(re.id)
            //console.log(re)
        })
        return todosId
    })
    Promise.all(promises).then(result => {
        Module.findById(req.body.moduleId).then((modu) => {
            //console.log(modu)
            modu.todos.push(result)
            modu.save()

        })
    })


        .then(result => {

            console.log("success");
            res.status(200).json({
                message: "todos added to module",
                result: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });


}

exports.addMembersManually = (req, res, next) => {

    let MembersId = []
    activity.findById(req.body.activityId).then((ac) => {
        var promises = req.body.members.map(e => {

            for (const t of ac.members) {
                if (t != e.memberId) {
                    MembersId.push(e.memberId)
                }
            }

        })
        return promises

    }).then(result => {
        Promise.all(result).then(result => {
            activity.findById(req.body.activityId).then((act) => {
                //console.log(MembersId)
                if (MembersId.length > 0) {
                    act.members.push(MembersId)
                    act.save()
                }
            })
        })
    })
        .then(result => {

            console.log("success");
            res.status(200).json({
                message: "members (manual mode)added successfully ",
                result: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });


}


exports.assignSupervisors = (req, res, next) => {

    let supervisorsId = []
    activity.findById(req.body.activityId).then(ac => {


        req.body.supervisors.map(e => {
            if (!ac.supervisor.includes(e.supervisorId)) {
                ac.supervisor.push(e.supervisorId)
                ac.save()
                return "done"
            }
        })


    }).then(result => {


        res.status(200).json({
            message: "supervisors added successfully ",
            result: result
        });

    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });


}

exports.assignModule = (req, res, next) => {
    Module.findById(req.body.moduleId).then((ac) => {
        if (ac != null) {
            if (req.body.responsible != null) {
                ac.responsible = req.body.responsible
                console.log(ac.responsible)
                ac.save()
            }
        }

    }).then(result => {

        console.log("success");
        res.status(200).json({
            message: "Module assigned successfully ",
            result: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });


}
exports.pushTodoToValidation = (req, res, next) => {
    if (req.userData.role == "student") {
        ValidatingRequests.find({"ToDo": req.body.todoId}).then(result => {
            console.log(result)
            if (result.length === 0) {
                const validating = new ValidatingRequests(
                    {
                        ToDo: req.body.todoId,
                        activity: req.body.activityId,
                        module: req.body.moduleId,
                        validation: false,
                        state:false
                    }
                )
                validating.save()

            }
            else {
                console.log("nulled")
                return null
            }
        })
            .then(result => {
                console.log("success");
                res.status(200).json({
                    message: "PUSHED to validation successfully ",
                    result: result
                });
            }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
    }
    else {
        res.status(403).json({
            message: "request to validate ToDo",
            result: "you will not be able to continue with this action"
        })
    }
}

exports.validateRequest = (req, res, next) => {

    ValidatingRequests.findById(req.body.requestId).then(result => {
        console.log(result)
        if (result != null) {

            result.validation = true
            result.save()

        }
    }).then(x => {
        todo.findById(x.ToDo).then(e => {
            e.done = true
            e.save()
        })
    })
        .then(result => {
            console.log("success");
            res.status(200).json({
                message: "validation operation  runned successfully ",
                result: result
            });
        }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
}

exports.incrementProgress = () => {
    let requests = []
    var j = schedule.scheduleJob('* * * * *', function () {
        //console.log('The answer to life, the universe, and everything!');
        ValidatingRequests.find().then(re => {
            //console.log(re)
            if (re.length !== 0) {
                re.map(e => {
                    if (e.validation === true && e.state === false) {
                        Module.findById(e.module).then(m => {
                            if (m.progress < 100) {
                                m.progress += 100 / re.length
                                if (m.progress != 100) {
                                    m.save().then(state => {
                                        e.state = true
                                        e.save()
                                        requests.push(e)
                                        console.log("ModuleProgressor : module progress was updated")
                                        return requests
                                    })
                                }


                            }

                        })

                    }
                })
            }
        })
    });

}


var j = schedule.scheduleJob('* * * * *', function () {
    activity.find().then(ac => {
        if (ac.length !== 0) {
            ac.map(e => {
                e.modules.map(i => {
                    Module.findById(i).then(mo => {
                        if (mo.progress === 100 && mo.state === false) {
                            if (e.generalProgress < 100) {
                                mo.state = true
                                mo.save().then(() => {
                                    e.generalProgress += 100 / e.modules.length
                                    e.save()
                                    console.log("Activity progress was updated")
                                })

                            }
                        }
                    })
                })
            })

        }
    })

})


exports.getAllCreatedActivities = (req, res, next) => {
    if (req.userData.role === "teacher") {
        activity.find().where("creator").equals(req.userData.userId).then(result => {
            return result
        }).then(x => {
            res.status(200).json({
                message: "All of your created activities!",
                resultat: x,
                creator:req.userData
            });
        })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            });


    }

}
exports.getActivityModules = (req, res, next) => {
    let mods = []
    activity.findById(req.body.activityId).then(ac => {


        var promises = Module.find({
            '_id': {$in: ac.modules}
        }, function (err, docs) {
            mods.push(docs)
        });
        return promises


    })
        .then(resultat => {
            Promise.all(resultat).then(reslt => {
                if (reslt != null) {
                    res.status(200).json(
                        {
                            message: "all modules for this activity",
                            result: reslt
                        }
                    )
                }
            })

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
}
exports.getTodoByModule = (req, res, next) => {
    let Todoos = []
    Module.findById(req.body.moduleId).then(ac => {


        var promises = todo.find({
            '_id': {$in: ac.todos}
        }, function (err, docs) {
            Todoos.push(docs)
        });
        return promises


    })
        .then(resultat => {
            Promise.all(resultat).then(reslt => {
                if (reslt != null) {
                    res.status(200).json(
                        {
                            message: "all Todos for this Module",
                            result: reslt
                        }
                    )
                }
            })

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
}
exports.getAllActivitiesSupervisor = (req, res, next) => {
    let activi = []
    if (req.userData.role == "teacher") {
        activity.find({
            'supervisor': {$eq: req.userData.userId}
        }, function (err, docs) {
            console.log(docs)
            activi.push(docs)
            return activi
        }).then(re => {
            if (re != null) {
                res.status(200).json({
                    message: "all of your supervised activities",
                    result: re
                })
            }
            else {
                res.status(204).json({
                    message: "all of your supervised activities",
                    result: "no content"
                })
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })


    }
    else {
        res.status(403).json({
            message: "all of your supervised activities",
            result: "you will not be able to see this content"
        })
    }


}
exports.getAllForStudent = (req, res, next) => {
    let activi = []
    if (req.userData.role == "student") {
        activity.find({
            'members': {$eq: req.userData.userId}
        }, function (err, docs) {
            console.log(docs)
            activi.push(docs)
            return activi
        }).then(re => {
            if (re != null) {
                res.status(200).json({
                    message: "all of activities that you are participating in ",
                    result: re
                })
            }
            else {
                res.status(204).json({
                    message: "all of your activities",
                    result: "no content"
                })
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })


    }
    else {
        res.status(403).json({
            message: "all of your  activities(Student)",
            result: "you will not be able to see this content"
        })
    }
}
var sch = schedule.scheduleJob('* * * * *', function () {

    User.find().then(x => {
        x.map(e => {
            if (e.type != "gold member") {

                activity.find({creator: {$eq: e.id}}).then(res => {
                    if (res.length > 5) {
                        e.type = "gold member"
                        e.save()
                        timeLog("gold member"+e.firs)
                        console.log("changing to gold member :" + e.firstname)
                        var mailOptions = {
                            from: 'ismail <amuari01@gmail.com>',
                            to: e.email,
                            subject: 'Gold member System',
                            text: 'Congrats your are a Gold member now Enjoy the Title'
                        }
                        main(mailOptions).catch(console.error)
                    }
                })
            }
        })

    })

})
exports.enrichCv = () => {
    var j = schedule.scheduleJob('* * * * *', function () {
        //console.log("here")
        const skills = mongoose.model("skills", Skills);
        activity.find({generalProgress: {$eq: 100}}).then(finished => {
            finished.map(e => {

                if (e.type == "Academic") {
                    User.find({
                        '_id': {$in: e.members}
                    }, function (err, docs) {
                        return docs
                    }).then(allusers => {

                        allusers.map(c => {
                            // console.log(c.Resume.Skills)
                            c.Resume.Skills.map(t => {
                                if (e.techs.includes(t.name)) {
                                    t.name += 1

                                }
                                else {
                                    e.techs.map(tc => {
                                        c.Resume.Skills.push(
                                            new skills({
                                                name: tc,
                                                level: 1,
                                                type: "developpement"
                                            })
                                        );

                                    })


                                }
                            })
                            c.save()
                            console.log("created skill")
                        })
                    })
                }


            })
        })
    });

}
exports.deleteToDo=(req,res,next)=>{
    todo.deleteOne({ id: req.body.todoId }, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
    }).then(result=>{
        Module.findById(req.body.moduleId).then(mo=>{
            const index = mo.todos.indexOf(req.body.todoId);
            mo.todos.splice(index,1)
        })
    }).then(resl=>{
        console.log("deleted");
        res.status(200).json({
            message: "todo deleted",
            result: resl
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
};
exports.getAllSupervisors=(req,res,next)=>{
    User.find({role: {$eq: "teacher"}}).then(re => {

            res.status(200).json({
                message: "allSupervisors ",
                result: re,
                count :0
            })

    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}

exports.getAllMembers=(req,res,next)=>{

       User.find({ _id : { $in : req.body.members } }).then(re => {

        res.status(200).json({
            message: "allMembers ",
            result: re,
            count :re.length
        })

    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}

async function sendInvitationToUsers(id , activity) {
    const activReq = mongoose.model("ActivityRequest", ActivityRequest);
    User.findById({_id:id}).then(user => {
        if (!user) {
            return res.status(401).json({
                message: "undifined user"
            });
        }
        fetchedUser = user;

    })        .then(() => {
            fetchedUser.activityRequest.push(
                new activReq({
                    idActivity: activity.id,
                    titleActivity: activity.title,
                    description: activity.description,
                    type: activity.type
                })
            );
            fetchedUser.save().then(result => {
                res.status(200).json({
                    msg: "activity has been added successfully"
                });
            });

    })
        .catch(err => {
            console.log(err);
        });
}

exports.create=(req,res,next)=>{

    const act = new activity({
        title: req.body.values.title,
        description: req.body.values.description,
        descriptionDocument: req.body.values.descriptionDocument,
        type: req.body.values.type,
        creator: req.userData.userId,
        supervisor: req.body.values.supervisor,
        techs:req.body.values.techs,
        createdAt:new Date(),
        members:[]
    });
    act.save()
        .then(async result => {
            const members = req.body.values.members;
            for (let i = 0; i < members.length; i++) {
                 await sendInvitationToUsers(members[i] , result)

            }
            console.log("success");
            timeLog("created activity")
            res.status(200).json({
                message: "activity first step created!",
                result: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
}


