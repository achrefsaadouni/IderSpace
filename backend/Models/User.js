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
  facebook: {type:String},
  github: { type: String },
  class: { type: String },
  type: { type: String },
  adresse: {type: String},
  sexe: {type: String},
  birthday: {type: String},
  Resume: Resume,
  nbrBestAnswer: { type: Number, default: 0 },
  firstLogin: {type: Boolean , default: false},
  profileImage:{type:String , default:'https://res.cloudinary.com/pi-dev/image/upload/v1555884886/bjce0bnez3w7oqbykqre.png'},
  oldPhoto: [{type:String}],
  coverPhoto: {type:String}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
