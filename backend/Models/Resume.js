const mongoose = require("mongoose");
const Skills = require("./Skills");
const Experience = require("./Experience");
const Education = require("./Education");

let Schema = mongoose.Schema;
const ResumeSchema = mongoose.Schema({
    Skills: [Skills],
    experiences: [Experience],
    about: { type: String, required: true },
    languages: { type: [String], required: true },
    hobbies: { type: [String], required: true },
    educations: [Education]
});

module.exports = ResumeSchema;
