const express = require('express')
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());
const mongoose = require('mongoose')
require('dotenv').config()


const mongoString = process.env.DATABASE_URL


mongoose.connect(mongoString)
const db = mongoose.connection
const Message = require('./models/messageModel')
db.on('error', (err)=>{
    console.log(err);
})

db.once('connected', ()=>{
    console.log('Database Connected');
})


const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID:`);
  });

  socket.on("send_message",  (data) => {


    let message =  new Message({
      message:data.message
    })

    message.save()

    console.log("hello");
    socket.to(data.room).emit("receive_message", data.message);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});