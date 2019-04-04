const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const QuestionSchema = mongoose.Schema({
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Likes"
    }
  ],
  createdAt: { type: Date, required: true },
  subject: { type: String, required: true },
  content: { type: String, required: true },
  answer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Answer"
    }
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});
module.exports = mongoose.model("Question", QuestionSchema);
