//const User = require("../models/user.js");
const supportRequest = require("../models/supportRequest.js");
 
exports.main = function(request, response){

    supportRequest.find({}, function(err, allSupportRequests){
  
        if(err) {
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("workSpace.hbs", {
            supportRequests: allSupportRequests
        });
    });
};
