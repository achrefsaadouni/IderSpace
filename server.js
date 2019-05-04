const http = require("http");
const debug = require("debug")("node:server");
const app = require("./backend/app");

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

const port = normalizePort(process.env.PORT || "2500");
app.set("port", port);

const server = http.createServer(app);
const io = require('socket.io')(server);
app.set('io', io);


io.on('connection', function (socket) {
    socket.on('activity', function (data) {
        // check this msgBy in chatroom of database
        io.sockets.emit('userRecieve', data);
    });

    socket.on('msg', function (data) {
        //Send message to everyone



    });
});

server.on("error", onError);
server.on("listening", onListening);

var serverpost = server.listen(port);
