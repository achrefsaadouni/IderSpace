const Question = require("../models/Question");
const BotQuestion = require("../Models/BotQuestion");
const Activity = require("../Models/Activity");
exports.createTextResponse = createTextResponse;
exports.getApprovedAnswer = getApprovedAnswer;
exports.addQuestion = addQuestion;
exports.addBotQuestion = addBotQuestion;
exports.AnswerBotQuestion = AnswerBotQuestion;
exports.GetAllBotQuestion = GetAllBotQuestion;
exports.addActivity = addActivity;
function createTextResponse(textResponse){
    let response = {
        "fulfillmentText": "This is a text response",
        "fulfillmentMessages": [
            {
                "text": {
                    "text": [
                        textResponse
                    ]
                }
            }
        ],
        "source": "example.com",
        "payload": {
            "google": {
                "expectUserResponse": true,
                "richResponse": {
                    "items": [
                        {
                            "simpleResponse": {
                                "textToSpeech": "this is a simple response"
                            }
                        }
                    ]
                }
            },
            "facebook": {
                "text": "Hello, Facebook!"
            },
            "slack": {
                "text": "This is a text response for Slack."
            }
        }
    }
    return response;
}

function getApprovedAnswer(comments) {
    for (var i = 0; i < comments.comments.length; i++) {
        if (comments.comments[i].approved == true)
        {
            return comments.comments[i];
        }
    }
}

async function addQuestion(subject,description) {
    const question = new Question({
        createdAt: new Date(),
        subject: subject,
        content: description,
        author: '5c9cbff3d36f4828c0bac721'
    });
    let v = await question
        .save()
        .catch(error => {
          return  false;
        })
        .then(e => {
            return  true;
        });
    return v ;

}

async function addActivity(title,description,type) {
    const activity = new Activity({
        title: title,
        description: description,
        type : type ,
        creator: '5c9cbff3d36f4828c0bac721',
        supervisor: '5c9cbff3d36f4828c0bac721'
    });
    let v = await activity
        .save()
        .catch(error => {
            return  false;
        })
        .then(e => {
            return  true;
        });
    return v ;

}




async function addBotQuestion(content) {
    const question = new BotQuestion({
        createdAt: new Date(),
        content: content,
        author: '5c9cbff3d36f4828c0bac721'
    });
    let v = await question
        .save()
        .catch(error => {
            return  false;
        })
        .then(e => {
            return  true;
        });
    return v ;
}


async function AnswerBotQuestion(subject,description) {
 //to do
}


function GetAllBotQuestion() {
    return new Promise (resolve =>{
        BotQuestion.find()
            .then(results => {
                return resolve(results) ;
            })
            .catch(error => {
                return [];} )

    });}