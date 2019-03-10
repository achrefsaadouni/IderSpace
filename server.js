const http = require("http");
const debug = require("debug")("node:server");
const app = require("./backend/app");

var socket = require("socket.io");
var ServiceChatbot = require("./backend/services/ServiceChatbot");

const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }
  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);

server.on("error", onError);
server.on("listening", onListening);

//chatbot API

var serverpost = server.listen(port);

io = socket(serverpost);
io.on("connection", socket => {
  //______socket.on event SEND_MESSAGE
  socket.on("SEND_MESSAGE", function(data) {
    //console.log('data sent form user' + JSON.stringify(data));

    //________call the function to return the response from the bot ___//
    ServiceChatbot.askQuestion(data.msg)
      .then(response => {
        //console.log('the respons is' + JSON.stringify(response))
        //_____switch intent Name we will execute the correct function __________//
        console.log(response.result.fulfillment.speech);

        io.emit("RECEIVE_MESSAGE", {
          msg: response.result.fulfillment.speech
        });
      })
      .catch(error => {
        console.log(error);
        var message = "Error from the server !" + error;
        io.emit("RECEIVE_MESSAGE", message);
      });
  });
});
