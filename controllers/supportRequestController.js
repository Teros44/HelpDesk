const supportRequest = require("../models/supportRequest.js");
 
exports.createSupportRequest = function(request, response){
    if(!request.body) return response.sendStatus(400);
    let now = new Date();
    const location = request.body.location;
    const description = request.body.supportRequestDescription;
    //const user = new supportRequest({name: location, name});
    console.log(now);
    const sr = new supportRequest({createLocation: location, problemDescription: description,createDate: now.getDate});
    console.log(sr.createLocation, sr.problemDescription,sr.createUser,sr.createDate);
    response.send("support request");

     //user.save(function(err){
    //    if(err) return console.log(err);
   //   response.redirect("/users");
   // });
};
