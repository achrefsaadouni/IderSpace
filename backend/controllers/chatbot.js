const chatbot = require('../services/chatbot')
exports.chat = (req, res, next) => {
 res.send(chatbot.createTextResponse("iderspace is a platform"));
};
