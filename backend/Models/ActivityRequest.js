const mongoose = require("mongoose");

const ActivityRequestSchema = mongoose.Schema({
    idActivity: { type: String, require:true },
    titleActivity: { type: String, require: true },
    description: {type:String , require: true},
    type:{type:String , require: true},
    stat:{type:String , default:'waiting'}
});

module.exports = ActivityRequestSchema;
