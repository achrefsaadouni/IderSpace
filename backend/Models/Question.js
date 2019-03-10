const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const QuestionSchema = mongoose.Schema({
    progress: { type: Number, required: true },
    todos: [{ type: Schema.ObjectId, ref: 'Todo' }],
    duration: { type: Number, required: true },
    start_date: { type: Date, required: true },
    responsible: { type: Schema.ObjectId, ref: 'User' }
});
module.exports = mongoose.model("Question", QuestionSchema);
