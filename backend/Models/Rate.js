const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const RateSchema = mongoose.Schema({
    user: { type: Schema.ObjectId, ref: 'User' },
    note: { type: Number, required: true },
    todo: { type: Schema.ObjectId, ref: 'Todo' }
});
module.exports = mongoose.model("Rate", RateSchema);
