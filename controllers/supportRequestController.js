const supportRequest = require("../models/supportRequest.js");
 
exports.createSupportRequest = function(request, response){
    if(!request.body) return response.sendStatus(400);
    let now = new Date();
    const location = request.body.location;
    const description = request.body.supportRequestDescription;
   // console.log(now);
    const sRequest = new supportRequest({createLocation: location, problemDescription: description,сreateDate:now});
   // console.log(sRequest.createLocation, sRequest.problemDescription,sRequest.createUser,sRequest.сreateDate);
   // Проверка авторизации
   // console.log(request.session);
    sRequest.save(function(err){if(err) return console.log(err);});   
    
    if (request.session.userId > 0) {
        response.send('Авторизирован. Запрос отправлен')
      } else {
   //     console.log(sRequest);
        response.render("RequestInfo.hbs", {sRequest});
        //response.send('Заявка успешно отправлена!');
      }
};

exports.modify = function(request, response){

    if (request.session.userId > 0) {
        response.send('Авторизирован. Запрос обновлён')
      } else {
   //     console.log(sRequest);
        response.render("Авторизирован. Запрос не обновлён");
        //response.send('Заявка успешно отправлена!');
      }
};


     //user.save(function(err){
    //    if(err) return console.log(err);
   //   response.redirect("/users");
   // });

   exports.postUser= function(request, response){
    if(!request.body) return response.sendStatus(400);
    const userName = request.body.name;
    const userAge = request.body.age;
    const user = new User({name: userName, age: userAge});
     
    user.save(function(err){
        if(err) return console.log(err);
        response.redirect("/users");
    });
};