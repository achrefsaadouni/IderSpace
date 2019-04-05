const chatbot = require('../services/chatbot');
var Question  = require('../models/Question');
const fs = require('fs');
var currentActivity = null;
exports.chat = async (req, res, next) => {
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
   res.send(chatbot.createTextResponse("Your Question were added successfully , do you need any other assistance ?"));
  }

}


if(req.body.queryResult.intent.displayName=="Add_Activity")
{
 var title = req.body.queryResult.parameters.title;
 var description = req.body.queryResult.parameters.description;
 var type = req.body.queryResult.parameters.type;
 currentActivity = await chatbot.addActivity(title,description,type);
 if (currentActivity == null)
 {
  res.send(chatbot.createTextResponse("There were a problem adding your activity please can your retype the command Create Activity"));
 }
 else
 {
  res.send(chatbot.createTextResponse("Your Activity were added successfully Do you want to add modules to it"));
 }
}
 if(req.body.queryResult.intent.displayName=="Add_Module")
 {

  if(currentActivity == null)
  {
   res.send(chatbot.createTextResponse("Sorry i can't do this now"));
  }
  else {
   var title = req.body.queryResult.parameters.title;
   var description = req.body.queryResult.parameters.description;
   var start_date = req.body.queryResult.parameters.start_date;
   var end_date = req.body.queryResult.parameters.end_date;
   chatbot.AddModule(currentActivity._id,title,description,start_date,end_date);
   res.send(chatbot.createTextResponse("Module added to your current activity do you want to add another Module"));
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


