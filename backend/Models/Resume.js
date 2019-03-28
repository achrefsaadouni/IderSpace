const mongoose = require("mongoose");
const Skills = require("./Skills");
const Experience = require("./Experience");

let Schema = mongoose.Schema;
const ResumeSchema = mongoose.Schema({
    Skills: [Skills],
    experiences: [Experience],
    about: { type: String, required: true },
    languages: { type: [String], required: true },
    hobbies: { type: [String], required: true }
});

module.exports = ResumeSchema;
