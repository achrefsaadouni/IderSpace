const activity = require("../Models/Activity")
const User = require("../models/user");
const Module = require("../models/Module");
const todo = require("../models/ToDo");
const groups = require("../models/Groups");
const Workspace = require("../models/Workspace");
const ValidatingRequests = require("../models/ValidatingRequests");
var schedule = require('node-schedule');
exports.createActivity = (req, res, next) => {

    const act = new activity({
        title: req.body.title,
        description: req.body.description,
        descriptionDocument: req.body.descriptionDocument,
        type: req.body.type,
        creator: "5c9f9a081c42ee2db075f20a"
    })
    act.save()
        .then(result => {
            console.log("success");
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
            let state = false;
            for (const t of ac.members) {
                if (t === e.memberId) {
                    state = true;
                }
            }
            if (state) {
                MembersId.push(e.memberId)
                console.log("no duplication")
            } else {
                console.log('duplication')
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
    activity.findById(req.body.activityId).then((ac) => {
        var promises = req.body.supervisors.map(e => {
            let state = false;
            for (const t of ac.supervisor) {
                if (t === e.supervisorId) {
                    state = true;
                }
            }
            if (state) {
                supervisorsId.push(e.supervisorId)
                console.log("no duplication")
            } else {
                console.log('duplication')
            }
        })
        return promises

    }).then(result => {
        Promise.all(result).then(result => {
            activity.findById(req.body.activityId).then((act) => {
                //console.log(MembersId)
                if (supervisorsId.length > 0) {
                    act.supervisor.push(supervisorsId)
                    act.save()
                }
            })
        })
    })
        .then(result => {

            console.log("success");
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
    ValidatingRequests.find({"ToDo": req.body.todoId}).then(result => {
        console.log(result)
        if (result.length === 0) {
            const validating = new ValidatingRequests(
                {
                    ToDo: req.body.todoId,
                    activity: req.body.activityId,
                    module: req.body.moduleId,
                    validation: false,
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

exports.validateRequest = (req, res, next) => {
    ValidatingRequests.findById(req.body.requestId).then(result => {
        console.log(result)
        if (result != null) {

            result.validation = true
            result.save()

        }
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


exports.enrichCv = () => {
    var j = schedule.scheduleJob('*/1 * * * *', function () {
        console.log('updating cv ..');
    });

}


