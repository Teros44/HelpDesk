const supportRequest = require("../models/supportRequest.js");
 
exports.createSupportRequest = function(request, response){
    if(!request.body) return response.sendStatus(400);
    const location = request.body.location;
    const description = request.body.supportRequestDescription;
    //const userAge = request.body.age;
    //const user = new User({name: userName, age: userAge});
     response.send(console.log(request.body));
    //user.save(function(err){
    //    if(err) return console.log(err);
   //   response.redirect("/users");
   // });
};


/*
const supportRequest = require("../models/supportRequest.js");

exports.createSupportRequest = function(request,response){
   if(!request.body) return response.sendStatus(400);

   const location = request.body.location;
   const description = request.body.supportRequestDescription;
   const supportRequest = new supportRequest ({createLocation = location, problemDescription = description });

   supportRequest.save(function(err){
       if(err) return console.log(err);
       response.redirect("/users");
   });
   console.log("createSupportRequest");
   response.send("createSupportRequest");
};
*/