const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");

const app = express();

mongoose
  .connect(
    "mongodb+srv://ismail:<password>@iderspace-ifund.azure.mongodb.net/iderspace",
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
