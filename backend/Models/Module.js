const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const ModuleSchema = mongoose.Schema({

    progress: { type: Number, required: true },
    title: { type: String, required: true },
    state: { type: Boolean, required: true },
    description: { type: String, required: true },
    todos: [{ type: Schema.ObjectId, ref: 'ToDo' }],
    end_date: { type: Date, required: true },
    start_date: { type: Date, required: true },
    responsible: { type: Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model("Module", ModuleSchema);
