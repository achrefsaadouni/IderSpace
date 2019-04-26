const axios = require('axios');
const token = '2f2b95677da5410ba663c5704cfc1dea';
const chatbot = require('../services/chatbot');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


exports.ask = (req, res, next) => {
    axios.post('https://api.dialogflow.com/v1/query?v=20150910', {
        contexts : [
            "About"
        ],
        lang: "en",
        query: req.body.question,
        sessionId: "12345",
        timezone: "America/New_York"
    })
        .then((r) => {
            if (r.data.result.fulfillment.messages.length === 0)
            {
                res.send("We have issues with the server please contact the administrator");
            }
            else
           res.send(r.data.result.fulfillment.messages[0].speech);
        })
        .catch((error) => {
            console.error(error)
        });
};





exports.delete = async (req, res, next) => {
    const v = await chatbot.deleteBotQuestion(req.body.question);
    res.send(v);
};

exports.getAll = async (req, res, next) => {
    const v = await chatbot.GetAllBotQuestion();
    res.json(v);
};







exports.addIntent = (req, res, next) => {
    var tab = [];
    for (var i in req.body.trainingPhrases){
        var i =         {
            "count": 0,
            "data": [
                {
                    "text": req.body.trainingPhrases[i]
                },
            ]
        }
        tab.push(i)
    }
    var data = {
        "fallbackIntent": false,
        "name": req.body.intentName,
        "priority": 500000,
        "responses": [
            {
                "messages": [
                    {
                        "speech": req.body.responses,
                        "type": 0
                    }
                ],
                "resetContexts": false
            }
        ],
        "userSays": tab,
        "webhookForSlotFilling": false,
        "webhookUsed": false
    };
    axios.post('https://api.dialogflow.com/v1/intents?v=20150910', data)
        .then((r) => {
            res.send('success')
        })
        .catch((error) => {
            console.error(error)
        });
};