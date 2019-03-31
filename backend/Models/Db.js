const mongoose = require("mongoose");
mongoose
    .connect(
        "mongodb+srv://ismail:1234aze@iderspace-ifund.azure.mongodb.net/test?retryWrites=true",
        { useNewUrlParser: true }
    )
    .then(() => {
        console.log("Connected to database successfully");
    })
    .catch(() => {
        console.log("Unable to connected to database");
    });
