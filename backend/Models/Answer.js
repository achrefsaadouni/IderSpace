const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const AnswerSchema = mongoose.Schema({
    author: { type: Schema.ObjectId, ref: 'User' },
    content: { type: String, required: true },
    likes: [{ type: Schema.ObjectId, ref: 'Like' }],
    approved: { type: Boolean, required: true },
});



module.exports = mongoose.model("Answer", AnswerSchema);
