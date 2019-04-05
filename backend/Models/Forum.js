const mongoose = require("mongoose");

const ForumSchema = mongoose.Schema({
  category: { type: String }
});
module.exports = mongoose.model("Forum", ForumSchema);
