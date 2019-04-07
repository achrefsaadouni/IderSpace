const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Resume = require("./Resume");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  linkedin: { type: String },
  github: { type: String },
  class: { type: String },
  type: { type: String },
  Resume: Resume,
  nbrBestAnswer: { type: Number, default: 0 }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
