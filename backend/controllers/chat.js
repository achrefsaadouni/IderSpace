const axios = require('axios');
const token = '2f6820c0d45f434d9546ff275b515da8';
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
           res.send(r.data.result.fulfillment.messages[0].speech);
        })
        .catch((error) => {
            console.error(error)
        });
};


exports.getAll = async (req, res, next) => {
    const v = await chatbot.GetAllBotQuestion();
    res.json(v);
};
