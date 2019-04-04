const chatbot = require('../services/chatbot');
var Question  = require('../models/Question');
exports.chat = (req, res, next) => {
 Question.findOne({ 'subject': req.body.queryResult.queryText  },'comments',function(err,answer){
  if(err)
   res.send(err);
  if(!answer)
   res.send(chatbot.createTextResponse("There are no Answer in our Forum that seems similar to your question"));
  else
  {
   res.send(chatbot.createTextResponse(chatbot.getApprovedAnswer(answer).content));
  }
 });
};
