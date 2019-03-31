const activity = require("../Models/Activity")
const User = require("../models/user");
const Module = require("../models/Module");
const todo = require("../models/ToDo");
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

    let todosId=[]

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

    let MembersId=[]

    var promises = req.body.members.map(e => {


            MembersId.push(e.memberId)
            console.log(e.memberId)

        return MembersId
    })
    Promise.all(promises).then(result => {
        Module.findById(req.body.activityId).then((act) => {
            //console.log(modu)
            act.members.push(result)
            act.save()

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


