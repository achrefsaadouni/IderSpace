const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const ActivitySchema = mongoose.Schema({
    modules: [{ type: Schema.ObjectId, ref: 'Module' }],
    description: { type: String, required: true },
    type: { type: String, required: true },
    generalProgress: { type: Number, required: true },
    creator: { type: Schema.ObjectId, ref: 'User' },
    supervisor: [{ type: Schema.ObjectId, ref: 'User' }],
    members: {type: Schema.ObjectId, ref:'User'}
});



module.exports = mongoose.model("Activity", ActivitySchema);
