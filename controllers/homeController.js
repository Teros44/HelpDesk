//var Cookies = require('cookies');

exports.homePage = function(request,response){
    response.render("homePage.hbs");
};
exports.about = function (request, response) {
    response.send("О сайте");
};
exports.login = function(request,response){
 // var cookies = new Cookies(request,response,{"keys":['44secrets']});
  /*var cookieOptions = {
    maxAge: 3600,
    secure: false,
    signed: true
  };
  */
  //cookies.set('admin',[true],[maxAge=60]);
  //  console.log(cookies.get('admin'));
    response.send(request.body);
};
