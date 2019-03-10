const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const LikesSchema = mongoose.Schema({
    users: [{ type: Schema.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model("Likes", LikesSchema);
