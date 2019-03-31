const mongoose = require("mongoose");

const SkillsSchema = mongoose.Schema({
    name: { type: String, require:true },
    level: { type: Number, require: true },
    type: {type:String}
});

module.exports = SkillsSchema;
