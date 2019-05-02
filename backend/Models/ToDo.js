const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const ToDoSchema = mongoose.Schema({
    name: { type: String},
    done: { type: Boolean},
    state: { type: Boolean},
    description: { type: String },
    createdAt: { type: Date },
    tag: [],
    endDate: { type: Date },

    rate: [{ type: Schema.ObjectId, ref: 'Rate' }]
});

module.exports = mongoose.model("ToDo", ToDoSchema);
