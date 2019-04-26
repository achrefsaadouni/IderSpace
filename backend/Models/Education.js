const mongoose = require("mongoose");

const EducationSchema = mongoose.Schema({
    ecole: { type: String, require:true },
    degree: { type: String, require: true },
    date1: {type:String},
    date2: {type:String}
});

module.exports = EducationSchema;
