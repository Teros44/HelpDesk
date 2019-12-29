const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");
const supportRequestRouter = require("./routes/supportRequestRouter.js");
//const Cookies = require('cookies');

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({extended:false}));

app.use("/createNewSupportRequest", supportRequestRouter, function(){
    console.log("/createNewSupportRequest");
});
app.use("/users", userRouter, function(){
    console.log("/users, userRouter");
});
app.use("/",homeRouter, function(request,response){
//    console.log(request.headers['cookie']);
    console.log("/,homeRouter");
});

app.use(function(request,response,next){
    response.status(404).send("Not found")
});

mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);

    app.listen(3000,function(){
        console.log("Сервер ожидает подключения...");
    });
});