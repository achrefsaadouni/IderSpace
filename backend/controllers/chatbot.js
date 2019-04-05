const chatbot = require('../services/chatbot');
var Question  = require('../models/Question');
const fs = require('fs');
exports.chat = (req, res, next) => {
 //Add A  Request
if (req.body.queryResult.intent.displayName=="Add_Question_Forum")
{
 var subject = req.body.queryResult.parameters.subject;
 var description = req.body.queryResult.parameters.description;
  if (!chatbot.addQuestion(subject,description))
  {
   res.send(chatbot.createTextResponse("There were a problem adding your question please can your retype the command Create Question"));
  }
  else
  {
   res.send(chatbot.createTextResponse("Your Question were added successfully"));
  }

}
if(req.body.queryResult.intent.displayName=="Add_Activity")
{
 var title = req.body.queryResult.parameters.title;
 var description = req.body.queryResult.parameters.description;
 var type = req.body.queryResult.parameters.type;
 if (!chatbot.addActivity(title,description,type))
 {
  res.send(chatbot.createTextResponse("There were a problem adding your activity please can your retype the command Create Activity"));
 }
 else
 {
  res.send(chatbot.createTextResponse("Your Activity were added successfully"));
 }
}
else {
 var mot  = '.*'+req.body.queryResult.queryText+'.*';
 Question.findOne({ 'subject': {$regex : mot,$options : 'i'}  },'comments',function(err,answer){
  if(err)
   res.send(err);
  if(!answer)
  {
   chatbot.addBotQuestion(req.body.queryResult.queryText);
   res.send(chatbot.createTextResponse("There are no Answer in our Forum that seems similar to your question . But no worries your question will be a reference for next time"));
  }
  else
  {
   res.send(chatbot.createTextResponse(chatbot.getApprovedAnswer(answer).content));
  }
 });
}
};



