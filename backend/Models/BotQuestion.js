const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const BotQuestionSchema = mongoose.Schema({
    createdAt: { type: Date, required: true },
    content: { type: String, required: true },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});
module.exports = mongoose.model("BotQuestion", BotQuestionSchema);
