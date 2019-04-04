const mongoose = require("mongoose");
//const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const chatRoomSchema = mongoose.Schema({

    title:{type: String}

});


module.exports = mongoose.model("chatRoom", chatRoomSchema);
