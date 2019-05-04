const activity = require("../Models/Activity")
const User = require("../Models/User");
const Module = require("../Models/Module");
const todo = require("../Models/ToDo");
const Skills = require("../Models/Skills");
const mongoose = require("mongoose");
const ValidatingRequests = require("../Models/ValidatingRequests");
var schedule = require('node-schedule');
const nodemailer = require('nodemailer');
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
            techs: req.body.techs
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
                        state: false
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
/*var j = schedule.scheduleJob('* * * * *', function () {
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

})*/
exports.getAllCreatedActivities = (req, res, next) => {
    if (req.userData.role === "teacher") {
        activity.find().where("creator").equals(req.userData.userId).then(result => {
            return result
        }).then(x => {
            res.status(200).json({
                message: "All of your created activities!",
                resultat: x,
                creator: req.userData
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
    let x = []
   let element = {
        id:"1",
        title:"todo",
        description:"descr",
        label: "date",
        cardColor: '#E08521',
        cardStyle: {borderRadius: 6, boxShadow: '0 0 6px 1px #E08521', marginBottom: 15},
        metadata: {id: "1"},
        tags: "tag"
    }
    let data = {lanes: [
            {
                id: 'lane1',
                title: 'Planned Tasks',
                label: '',
                cards: []
            },
            {
                id: 'lane2',
                title: 'In Test',
                label: '',
                cards: [],


            }, {
                id: 'lane3',
                title: 'Completed',
                label: '',
                cards: [],


            }
        ]}

    Module.findById(req.body.moduleId).then(ac => {

        console.log(ac)
        var promises = todo.find({
            '_id': {$in: ac.todos}
        }, function (err, docs) {
            if(!docs.length==0)
            Todoos.push(docs)
        });
        return promises


    })
        .then(resultat => {
            Promise.all(resultat).then(reslt => {
                            if (reslt.length!=0){
                                ValidatingRequests.find({
                                    'ToDo': {$in: reslt}
                                }, function (err, docs) {
                                    if(!docs.length==0)
                                        x.push(docs)
                                    return x
                                })
                                   .then(resl=>{
                                  var promises=  Todoos.map(e => {


                                        if (e.done) {

                                            element.id=e._id
                                            element.description=e.description
                                            element.label=e.endDate
                                            element.title=e.name
                                            element.tags=e.tag
                                           data.lanes[2].cards.push(element)

                                        }
                                        else if (resl.includes(e._id)) {
                                            element.id=e._id
                                            element.description=e.description
                                            element.label=e.endDate
                                            element.title=e.name
                                            element.tags=e.tag
                                            data.lanes[1].cards.push(element)
                                        }
                                        else {
                                            element.id=e._id
                                            element.description=e.description
                                            element.label=e.endDate
                                            element.title=e.name
                                            element.tags=e.tag
                                            data.lanes[0].cards.push(element)
                                        }
                                    })
                                    return promises

                                })

                                    .then(rr=>{
                                    res.status(200).json(
                                        {
                                            message: "ok",
                                            result: rr,
                                            allTodo:Todoos
                                        }
                                    )

                                })
                            }
                            else
                            {

                   res.status(200).json(
                       {
                           message: "no",
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
    if (req.userData.role === "teacher") {
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
    if (req.userData.role == "Student") {
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
                        timeLog("gold member" + e.firs)
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
exports.deleteToDo = (req, res, next) => {
    todo.deleteOne({id: req.body.todoId}, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
    }).then(result => {
        Module.findById(req.body.moduleId).then(mo => {
            const index = mo.todos.indexOf(req.body.todoId);
            mo.todos.splice(index, 1)
        })
    }).then(resl => {
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
exports.addTodo = (req, res, next) => {
   let created
    const t = new todo({
        name: req.body.title,
        description: req.body.description,
        state: false,
        createdAt: new Date(),
        tag: req.body.tags,
        endDate: req.body.label,
        done:false
    })
    t.save().then(result=>{
        console.log("aaaaaaaaaaaaaaaaaaaaaaazezeae",result)
        created=result
        console.log(req.body.moduleId)
        Module.findById(req.body.moduleId).then(result=>{

                result.todos.push(created._id)
                return result

        }).then(x=>{
            x.save() .then(result => {
                console.log("success");
                timeLog("created Todo")
                res.status(200).json({
                    message: "todo was created",
                    result: result
                });
            })
        })
       })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
};
exports.getAllSupervisors = (req, res, next) => {
    User.find({role: {$eq: "teacher"}}).then(re => {

        res.status(200).json({
            message: "allSupervisors ",
            result: re,
            count: 0
        })

    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}
exports.getAllMembers = (req, res, next) => {

    User.find({_id: {$in: req.body.members}}).then(re => {

        res.status(200).json({
            message: "allMembers ",
            result: re,
            count: re.length
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
exports.getActivityById = (req, res, next) => {
    let fetched
    let member
    let module

    activity.findById(req.body.activityId).then(ac => {
        fetched = ac
        return fetched
    }).then(ress => {
        User.findById(ress.supervisor).then(u => {
            fetched.supervisor = u
            return fetched
        })
            .then(r => {

                User.find({
                    '_id': {$in: r.members}
                }, function (err, docs) {
                    if (docs.length!=0) {
                        fetched.members = docs

                    }
                    return fetched
                }).then(r => {
                   // console.log("is mail",r)
                    Module.find({
                        '_id': {$in: fetched.modules}
                    }, function (err, docs) {
                        if (docs.length!=0) {

                            fetched.modules = docs

                        }
                       // console.log(fetched)
                         return fetched
                    }).then(e=>{
                        fetched.modules=e
                        return fetched
                    })
                        .then(r => {
                           // console.log(r)
                            res.status(200).json(
                                {
                                    message: "this activity",
                                    result: r


                                })
                        })

                })

            })


    })


        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });

}
exports.getActMembers = (req, res, next) => {
    User.find({_id: {$in: req.body.activityId}}).then(re => {

        res.status(200).json({
            message: "allMembers ",
            result: re,

        })

    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })

}
exports.createModule = (req, res) => {
    let fetched
    activity.findById(req.body.activityId).then(m => {

        if (m.modules.length!=0) {
            Module.find({$and: [{_id: {$in: m.modules}}, {title: {$eq: req.body.title}}]}).then(e => {
                console.log(e)
                if (e.length !== 0) {
                    res.status(200).json({
                        result: "already exists in your modules",

                    })
                }
                else {

                    const module=Module({
                        title:req.body.title,
                        description:req.body.description,
                        responsible:req.body.responsible,
                        progress:0,state:false,createdAt:new Date(),todos: []
                    })
                    module.save().then(result=>{
                        fetched=result
                        activity.findById(req.body.activityId).then(reslt=>{
                            reslt.modules.push(result._id)
                            reslt.save()
                        }).then(result=>{
                            res.status(200).json({
                                result: fetched,

                            })
                        })


                    })
                }

            })
        }
        else{
            const module=Module({
                title:req.body.title,
                description:req.body.description,
                responsible:req.body.responsible,
                progress:0,state:false,
                createdAt:new Date()
            })
            module.save().then(result=>{
                fetched=result
                activity.findById(req.body.activityId).then(reslt=>{
                    reslt.modules.push(result._id)
                    reslt.save()
                }).then(result=>{
                    res.status(200).json({
                        result:fetched,

                    })
                })


            })

        }
        }).catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    })
                })

        }
