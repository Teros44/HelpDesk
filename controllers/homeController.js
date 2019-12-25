exports.homePage = function(request,response){
    response.render("homePage.hbs");
};
exports.about = function (request, response) {
    response.send("О сайте");
};