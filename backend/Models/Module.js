const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const ModuleSchema = mongoose.Schema({
    progress: { type: Number, required: true },
    title: { type: String, required: true },
    state: { type: Boolean },
    description: { type: String, required: true },
    todos: [{ type: Schema.ObjectId, ref: 'ToDo' }],
    end_date: { type: Date },
    start_date: { type: Date },
    responsible: { type: Schema.ObjectId, ref: 'User' },
    createdAt:{type:Date}
});

module.exports = mongoose.model("Module", ModuleSchema);
