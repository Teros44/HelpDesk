exports.homePage = function(request,response){
    response.render("homePage.hbs");
};
exports.about = function (request, response) {
    response.send("О сайте");
};
exports.login = function(request,response){
    response.send(request.body);
};
/*
homeRouter.post('/login', jsonParser, function(req, res) {
    console.log(req.body);
    
    user.get(pool, req.body)
    .then(users => {
      if (users.length > 0) {
        // Usage: set session variable
        req.session.user = users[0];
        req.session.userId = users[0].id;
        req.session.userName = users[0].userName;
        res.json({
          success: true
        });
      } else {
        throw new Error('Неверный пользователь или пароль')
      }
    })
    .catch(err => {
      res.json({
        success: false,
        message: err.message
      });
    });
  });
*/