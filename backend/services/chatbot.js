exports.createTextResponse = createTextResponse;
exports.getApprovedAnswer = getApprovedAnswer;
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