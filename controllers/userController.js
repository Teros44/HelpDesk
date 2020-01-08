const User = require("../models/user.js");
 
exports.addUser = function (request, response){
    response.render("create.hbs");
};
exports.getUsers = function(request, response){
     
    User.find({}, function(err, allUsers){
  
        if(err) {
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("users.hbs", {
            users: allUsers
        });
    });
};
exports.postUser= function(request, response){
    if(!request.body) return response.sendStatus(400);
    const userFIO = request.body.FIO;
    const userLogin = request.body.login;
    const userPassword = request.body.password;
    const userAdmin = request.body.admin;

    const user = new User({FIO: userFIO, login: userLogin, password: userPassword, admin: userAdmin});
     
    user.save(function(err){
        if(err) return console.log(err);
        response.redirect("/users");
    });
};