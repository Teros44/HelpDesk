exports.homePage = function(request,response){
    //response.render("xhr-basic.hbs");
    response.render("homePage.hbs");
};
exports.about = function (request, response) {
    response.send("О сайте");
};
exports.login = function(request,response){
    response.send(request.body);
};
