const supportRequest = require("../models/supportRequest.js");
 
exports.createSupportRequest = function(request, response){
    if(!request.body) return response.sendStatus(400);
    let now = new Date();
    const location = request.body.location;
    const description = request.body.supportRequestDescription;
   // console.log(now);
    const sr = new supportRequest({createLocation: location, problemDescription: description,сreateDate:now});
    console.log(sr.createLocation, sr.problemDescription,sr.createUser,sr.сreateDate);
   // Проверка авторизации
    console.log(request.session);
    if (request.session.userId > 0) {
        response.send('Авторизирован. Запрос отправлен')
      } else {
        console.log(sr);
        response.render("RequestInfo.hbs", {sr});
        //response.send('Заявка успешно отправлена!');
      }

   

};


     //user.save(function(err){
    //    if(err) return console.log(err);
   //   response.redirect("/users");
   // });