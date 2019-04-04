const chatbot = require('../services/chatbot')
exports.chat = (req, res, next) => {
 res.send(chatbot.createTextResponse("The goals of IderSpace are clear and simple, provide comfortable features to Our Members\n" +
     "within its quarters with a modern touch. The assistant will be a chat bot ready to respond to\n" +
     "user’s commands and an advanced Recommendation system."));
};
