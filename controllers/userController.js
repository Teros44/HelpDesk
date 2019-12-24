exports.addUser = function (request, response){
    response.send("Добавление нового пользователя");
};
exports.getUsers = function(request, response){
    response.send("Список пользователей");
};