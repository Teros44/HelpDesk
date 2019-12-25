const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({extended:false}));

app.use("/users", userRouter);
app.use("/",homeRouter)

app.use(function(request,response,next){
    response.status(404).send("Not found")
});

mongoose.connect("mongodb:/localhost:27017/Node3/HelpDesk/database",{useNewUrlParser: true},function(err){
    if(err) return console.log(err);
    app.listen(3000,function(){
        console.log("Сервер ожидает подключения...");
    });
});