const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const ResumeSchema = mongoose.Schema({
    Skills: [{ type: Schema.ObjectId, ref: 'Skills' }],
    experiences: [{ type: Schema.ObjectId, ref: 'Experience' }],
    about: { type: String, required: true },
    languages: { type: [String], required: true },
    hobbies: { type: [String], required: true }
});

module.exports = mongoose.model("Resume", ResumeSchema);
