const User = require("../models/user.js");

exports.addUser = function(request, response) {
  response.render("create.hbs");
};
exports.getUsers = function(request, response) {
  console.log(request.session);
  console.log(request.session.admin);
  if (request.session.admin == "Да") {
    User.find({}, function(err, allUsers) {
      if (err) {
        console.log(err);
        return response.sendStatus(400);
      }
      response.render("users.hbs", {
        users: allUsers
      });
    });
  } else {
    response.redirect("/logoff");
  }
};

exports.postUser = function(request, response) {
  if (request.session.admin == "Да") {
    if (!request.body) return response.sendStatus(400);
    const userFIO = request.body.FIO;
    const userLogin = request.body.login;
    const userPassword = request.body.password;
    const userAdmin = request.body.admin;

    const user = new User({
      FIO: userFIO,
      login: userLogin,
      password: userPassword,
      admin: userAdmin
    });

    user.save(function(err) {
      if (err) return console.log(err);
      response.redirect("/users");
    });
  } else {
    response.redirect("/logoff");
  }
};
