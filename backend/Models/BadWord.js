const mongoose = require("mongoose");

const BadWordSchema = mongoose.Schema({
  word: { type: String }
});
module.exports = mongoose.model("BadWord", BadWordSchema);
