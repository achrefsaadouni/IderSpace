const mongoose = require("mongoose");


let Schema = mongoose.Schema;
const RequestSchema = mongoose.Schema({
    ToDo: {type: Schema.ObjectId, ref: 'ToDo'},
    activity: {type: Schema.ObjectId, ref: 'Activity'},
    module: {type: Schema.ObjectId, ref: 'Module'},
    validation: {type: Boolean},
    });
module.exports = mongoose.model("ValidatingRequests", RequestSchema);
