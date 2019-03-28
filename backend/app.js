const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
var cors = require("cors");

const userRoutes = require("./routes/user");

const app = express();

app.use(cors());

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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/images", express.static(path.join("backend/images")));

app.use("/api/user", userRoutes);

module.exports = app;
