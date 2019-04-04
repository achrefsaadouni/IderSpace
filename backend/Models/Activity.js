const mongoose = require("mongoose");
//const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const ActivitySchema = mongoose.Schema({
    title: {type: String, required: true},
    modules: [{type: Schema.ObjectId, ref: 'Module'}],
    description: {type: String, required: true},
    EstimatedTime: {type: String},
    descriptionDocument: {type: String, required: true},
    type: {type: String, required: true},
    generalProgress: {type: Number},
    creator: {type: Schema.ObjectId, ref: 'User'},
    supervisor: [{type: Schema.ObjectId, ref: 'User'}],
    members: [{type: Schema.ObjectId, ref: 'User'}]
});
module.exports = mongoose.model("Activity", ActivitySchema);
