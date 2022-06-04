const express = require("express");
const app = express();
const mongoose = require("mongoose");
const memberController = require("./routers/memberController");
const movieController = require("./routers/movieController");
const eventController = require("./routers/eventController");

const hostname = "127.0.0.1";
const port = 3000;
const DB_URI = "mongodb://127.0.0.1:27017/movie";

const server = async() => {
    try{
        await mongoose.connect(DB_URI);
        app.use(express.json());
        app.use(memberController);
        app.use(movieController);
        app.use(eventController);
        app.listen(port, hostname, function(){
            console.log("server is running");
        });
    } catch(err){
        console.log(err);
    }
};
server();
