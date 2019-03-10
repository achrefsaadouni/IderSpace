const mongoose = require("mongoose");

const ExperienceSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    address: { type: String, required: true }
});

module.exports = mongoose.model("Experience", ExperienceSchema);
