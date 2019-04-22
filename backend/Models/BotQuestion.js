const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const BotQuestionSchema = mongoose.Schema({
    createdAt: { type: Date, required: true },
    content: { type: String, required: true ,unique : true}

});
module.exports = mongoose.model("BotQuestion", BotQuestionSchema);
