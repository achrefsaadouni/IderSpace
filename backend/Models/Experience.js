const mongoose = require("mongoose");

const ExperienceSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    start_date: { type: String, required: true },
    end_date: { type: String, required: true },
    address: { type: String }
});

module.exports = ExperienceSchema;
