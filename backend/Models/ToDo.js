const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const ToDoSchema = mongoose.Schema({
    name: { type: String, require:true },
    done: { type: Boolean, required: true },
    rate: [{ type: Schema.ObjectId, ref: 'Rate' }]
});

module.exports = mongoose.model("ToDo", ToDoSchema);
