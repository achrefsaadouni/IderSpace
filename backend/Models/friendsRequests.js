const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const FriendsRequestsSchema = mongoose.Schema({
    sender: {type: mongoose.Schema.ObjectId, ref: 'User'},
    receiver: {type: mongoose.Schema.ObjectId, ref: 'User'},
    etat: {type:String , default:'waiting'}
});

module.exports = mongoose.model("FriendsRequests", FriendsRequestsSchema);
