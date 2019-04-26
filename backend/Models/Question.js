const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const QuestionSchema = mongoose.Schema({
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    }
  ],
  tags: { type: [String] },
  createdAt: { type: Date, required: true },
  subject: { type: String, required: true },
  content: { type: String, required: true },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      content: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      },
      approved: {
        type: Boolean,
        default: false
      }
    }
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Forum",
    required: true
  }
});
module.exports = mongoose.model("Question", QuestionSchema);
