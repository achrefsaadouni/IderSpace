const mongoose = require("mongoose");

const PublicationsSchema = mongoose.Schema({
    content: { type: String, require:true },
    date: {type: Date, default: Date.now}
});

module.exports = PublicationsSchema;
