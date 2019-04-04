const mongoose = require("mongoose");
//const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const GroupsSchema = mongoose.Schema({
    name: {type: String},
    Leader:{type: Schema.ObjectId, ref: 'User'},
    Workspace:{type: Schema.ObjectId, ref: 'Workspace'},
    members: [{type: Schema.ObjectId, ref: 'User'}]
});


module.exports = mongoose.model("Groups", GroupsSchema);
