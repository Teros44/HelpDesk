const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");
const workSpaceRouter = require("./routes/workSpaceRouter.js");
const supportRequestRouter = require("./routes/supportRequestRouter.js");
var User = mongoose.model('User');

//const Cookies = require('cookies');
//app.use("/", express.static(__dirname + '/public'));

mongoose.connect("mongodb://localhost:27017/usersdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(session({
    store: new MongoDBStore({
      // MongoDB connection string .
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

// Создаём новый запрос. Без авторизации
app.use("/createNewSupportRequest", supportRequestRouter, function(){
    console.log("[APP] createNewSupportRequest");
});

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

    User.findOne({login:req.body.login, password:req.body.password}, function(err, currentUser){
  
        if(err) {
            console.log(err);
            return response.sendStatus(400);
        }
        if(currentUser){
        //    console.log('Найден');
            req.session.userLogin = currentUser.login;
            res.render("users.hbs", {
                users: currentUser
            });
        }else{
        //    console.log('Не найдено');
            res.render("login.hbs");
        }
       
    });

   console.log(req.session);
   console.log(req.session.userLogin);
  //  res.redirect('/workSpace');
});
/*
app.use('/', function(req, res) {
    // Usage: get session variable
    if (req.session.userId > 0) {
      req.next();
    } else {
        res.redirect('/login');
    }
});
*/

app.use("/workspace",workSpaceRouter,function(){
    console.log("[APP] workSpaceRouter");
});
app.use("/users", userRouter, function(){
    console.log("[APP] userRouter");
});

app.use("/",homeRouter, function(request,response){
    //    console.log(request.headers['cookie']);
    console.log("[APP] homeRouter");
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