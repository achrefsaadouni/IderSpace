const axios = require('axios');
const token = '02f42825415648df996435e85d80757d';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
exports.ask = (req, res, next) => {
    axios.post('https://api.dialogflow.com/v1/query?v=20150910', {
        contexts : [
            "IderSpace"
        ],
        lang: "en",
        query: req.body.question,
        sessionId: "12345",
        timezone: "America/New_York"
    })
        .then((r) => {
           res.send(r.data.result.fulfillment.speech);
        })
        .catch((error) => {
            console.error(error)
        });

};