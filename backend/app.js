const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
var db = require("./Models/Db");
var cors = require("cors");

const userRoutes = require("./routes/user");
const chatbotRoutes = require("./routes/chatbot");
const chatRoutes = require("./routes/chat");
const ActivitiesRoutes = require("./routes/activity");
const QuestRoutes = require("./routes/question");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/images", express.static(path.join("backend/images")));

app.use("/api/user", userRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/question", QuestRoutes);
app.use("/api/activity", ActivitiesRoutes);

module.exports = app;
