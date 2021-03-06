/**
 * google drive : https://drive.google.com/file/d/1y-87CHDfmqVQT076sPWRuvTnpPGzQ81L/view
 */

const express = require("express");
const app = express();

//set the template engine ejs
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));

//routes
app.get("/", (req, res) => {
  res.render("index");
});

//Listen on port 3001
const hostname = "127.0.0.1";
const port = 3001;

server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// setup socket.io here

const io = require("socket.io")(server)

//listen on every connection
io.on('connection', (socket) => {
  console.log("New user connected");

  socket.username = "Anonymous";

  socket.on('change_username', (data) => {
    console.log("inside change username")
    socket.username = data.username;
  });

  socket.on('new_message', (data) => {
    io.sockets.emit('new_message', {message: data.message, username: socket.username});
  });

  socket.on('typing', (data) => {
    socket.broadcast.emit("typing", {username: socket.username});
  });
});

