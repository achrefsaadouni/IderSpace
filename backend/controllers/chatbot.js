const chatbot = require('../services/chatbot');
var Activity  = require('../Models/Activity');
exports.chat = (req, res, next) => {
 Activity.findOne({ 'title': 'test5' }, 'description',function(err,question){
  if(err)
   res.send(err);
  if(!question)
   res.status(404).send();
  else
  {
   res.send(chatbot.createTextResponse(question.description));
  }
 });
};
