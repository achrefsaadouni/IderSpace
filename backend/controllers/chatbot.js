const chatbot = require('../services/chatbot');
var Question = require('../models/Question');
var scraper = require('../handler/scrap-google');
var last_asked_question = "";
exports.chat = async (req, res, next) => {


    //Add A  Request
    if (req.body.queryResult.intent.displayName === "Add_Question_Forum") {
        var subject = req.body.queryResult.parameters.subject;
        var description = req.body.queryResult.parameters.description;
        if (!chatbot.addQuestion(subject, description)) {
            res.send(chatbot.createTextResponse("There were a problem adding your question please can your retype the command Create Question"));
        } else {
            res.send(chatbot.createTextResponse("Your Question were added successfully , do you need any other assistance ?"));
        }
    }


    else if (req.body.queryResult.intent.displayName === "cancel")
    {

        chatbot.addBotQuestion(last_asked_question);
        res.send(chatbot.createTextResponse("There are no Answer in our Forum that seems similar to your question . But no worries your question will be a reference for next time"));
    }
     else {
        var mot = '.*' + req.body.queryResult.queryText + '.*';
        Question.findOne({'subject': {$regex: mot, $options: 'i'}}, 'comments', function (err, answer) {
            if (err)
                res.send(err);
            if (!answer || chatbot.getApprovedAnswer(answer) === undefined) {
                var options = {
                    query: req.body.queryResult.queryText,
                    limit: 2,
                    host: 'www.google.com',
                    lang: 'en',
                };
                var test = true;
                    scraper.search(options, function(err, url, meta) {
                        if(err)
                        {   console.log("error")
                            console.log(err);
                            chatbot.addBotQuestion(req.body.queryResult.queryText);
                            res.send(chatbot.createTextResponse("There are no Answer in our Forum that seems similar to your question . But no worries your question will be a reference for next time"));
                        }
                        if (test)
                        {
                            if (!(url===undefined || meta.desc===undefined))
                            {
                                var resl = meta.desc+url+"\
                                    Is it what you are looking for ?";
                                test =false;
                                resl = resl.replace('...',' ');
                                resl = resl.replace(' ...',' ');
                                last_asked_question = req.body.queryResult.queryText;
                                res.send(chatbot.createTextResponse(resl));
                            }

                        }
                    });

            } else {
                res.send(chatbot.createTextResponse(chatbot.getApprovedAnswer(answer).content));
            }
        });
    }
};


