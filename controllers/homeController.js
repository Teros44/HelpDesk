var Cookies = require('cookies');

exports.homePage = function(request,response){
    response.render("homePage.hbs");
};
exports.about = function (request, response) {
    response.send("О сайте");
};
exports.login = function(request,response){
  var cookies = new Cookies(request,response);
    cookies.set('admin','true');
    console.log(cookies.get('admin'));
    response.send(request.body);
};
