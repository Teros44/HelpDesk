const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");
const supportRequestRouter = require("./routes/supportRequestRouter.js");
//const Cookies = require('cookies');

mongoose.connect("mongodb://localhost:27017/usersdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(session({
    store: new MongoDBStore({
      // MongoDB connection string
      uri: 'mongodb://localhost:27017/usersdb',
      collection: 'mySessions'
    }),
    resave: true,
    saveUninitialized: true,
    secret: 'DjrureEur8#7666hf9W',
    cookie: { maxAge: 36000000 }
  }));

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({extended:false}));

app.use('/logoff', function(req, res) {
    req.session.destroy();
    res.redirect('/login');
});

app.get('/login', function(req, res) {
    res.render('login');
});

app.post('/login', function(req, res) {
    console.log(req.body);
    // TODO: select from mongo where login = req.body.login && password = req.body.password
    req.session.userId = 1;
    console.log(req.session);
    res.end();
});

app.use('/', function(req, res) {
    // Usage: get session variable
    if (req.session.userId > 0) {
      req.next();
    } else {
        res.redirect('/login');
    }
});

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

app.listen(3000,function(){
    console.log("Сервер ожидает подключения...");
});

/*
mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);

    app.listen(3000,function(){
        console.log("Сервер ожидает подключения...");
    });
});
*/