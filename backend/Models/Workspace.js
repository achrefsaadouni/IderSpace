const mongoose = require("mongoose");
//const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const WorkspaceSchema = mongoose.Schema({

    group:{type: Schema.ObjectId, ref: 'Groups'},
    chatRoom: [{type: Schema.ObjectId, ref: 'chatRoom'}]
});


module.exports = mongoose.model("Workspace", WorkspaceSchema);
