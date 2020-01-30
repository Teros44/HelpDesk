const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
var MongoDBStore = require("connect-mongodb-session")(session);
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");
const workSpaceRouter = require("./routes/workSpaceRouter.js");
const supportRequestRouter = require("./routes/supportRequestRouter.js");
var User = mongoose.model("User");

mongoose.connect("mongodb://localhost:27017/usersdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(
  session({
    store: new MongoDBStore({
      // MongoDB connection string .
      uri: "mongodb://localhost:27017/usersdb",
      collection: "mySessions"
    }),
    resave: true,
    saveUninitialized: true,
    secret: "DjrureEur8#7666hf9W",
    cookie: { maxAge: 36000000 }
  })
);

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Для парсинга json


app.use("/createNewSupportRequest", supportRequestRouter, function(req, res) {
  console.log(req.session);
  console.log("[APP] createNewSupportRequest");
});

app.use("/logoff", function(req, res) {
  console.log("[APP] Logoff");
  req.session.destroy();
  res.redirect("/login");
});

app.get("/login", function(req, res) {
  console.log("[APP] Get /login");
  res.render("login");
});

app.post("/login", function(req, res) {
  console.log(req.body);

  User.findOne({ login: req.body.login, password: req.body.password }, function(
    err,
    currentUser
  ) {
    if (err) {
      console.log(err);
      return response.sendStatus(400);
    }
    if (currentUser) {
      req.session.userLogin = currentUser.login;
      req.session.admin = currentUser.admin;
      res.render("workspace.hbs", {
        user: currentUser
      });
    } else {
      res.render("login.hbs");
    }
  });

  console.log(req.session);
  console.log(req.session.userLogin);
});

app.use("/workspace", workSpaceRouter, function(req, res) {
  console.log("[APP] workSpaceRouter");
});
app.use("/users", userRouter, function(req, res) {
  console.log("[APP] userRouter");
});

app.use("/homepage", homeRouter, function(req, res) {
  console.log(req.session);
  console.log("[APP] homeRouter");
});

app.use(function(req, res, next) {
  console.log("Redirected to homepage | URL: " + req.url);
  res.redirect("/homepage");
});

app.listen(3000, function() {
  console.log("Сервер ожидает подключения...");
});
