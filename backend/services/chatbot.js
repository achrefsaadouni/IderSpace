const Question = require("../models/Question");
const BotQuestion = require("../Models/BotQuestion");
const Activity = require("../Models/Activity");
const Module = require("../models/Module");
exports.createTextResponse = createTextResponse;
exports.getApprovedAnswer = getApprovedAnswer;
exports.addQuestion = addQuestion;
exports.addBotQuestion = addBotQuestion;
exports.GetAllBotQuestion = GetAllBotQuestion;
exports.addActivity = addActivity;
exports.AddModule = AddModule;
exports.deleteBotQuestion = deleteBotQuestion;
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

 function addActivity(title,description,type) {
    const activity = new Activity({
        title: title,
        description: description,
        type : type ,
        creator: '5c9cbff3d36f4828c0bac721',
        supervisor: '5c9cbff3d36f4828c0bac721'
    });
    return  activity
        .save()
        .catch(error => {
           return  null;
        })
        .then(e => {
            return  e;
        });


}




async function addBotQuestion(content) {
    const question = new BotQuestion({
        createdAt: new Date(),
        content: content,
    });
    let v = await question
        .save()
        .catch(error => {
            console.log(error)
            return  false;
        })
        .then(e => {
            return  true;
        });
    return v ;
}

async function deleteBotQuestion(question) {
    BotQuestion.deleteOne({ _id: question._id })
        .then(result => {
            return true;
        })
        .catch(error => {
        return false;
        });
}





function GetAllBotQuestion() {
    return new Promise (resolve =>{
        BotQuestion.find()
            .then(results => {
                return resolve(results) ;
            })
            .catch(error => {
                return [];} )
    });
}

async function AddModule(activityId,title,description,start_date,end_date,) {
    const module = new Module({
        title: title,
        description: description,
        start_date : start_date,
        end_date : end_date,
        state : false,
        progress : 0,
    });
    Activity.update(
        { _id: activityId },
        { $push: { modules: module } }
    );
}