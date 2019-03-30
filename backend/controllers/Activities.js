const activity = require("../Models/Activity")
const User = require("../models/user");
exports.createActivity = (req, res, next) => {

    const act = new activity({
        title: req.body.title,
        description: req.body.description,
        descriptionDocument: req.body.descriptionDocument,
        type: req.body.type,
        creator:"5c9f9a081c42ee2db075f20a"
    })
        act.save()
    .then(result => {
            console.log("ok");
            res.status(200).json({
                message: "activity first step created!",
                result:result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });

}