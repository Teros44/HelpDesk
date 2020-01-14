//const User = require("../models/user.js");
const supportRequest = require("../models/supportRequest.js");
 
exports.getRequests = function(request, response){

    supportRequest.find({}, function(err, allSupportRequests){
  
        if(err) {
            console.log(err);
            return response.sendStatus(400);
        }
        console.log('getRequests');
        //console.log(allSupportRequests);
        response.send(allSupportRequests);
    });
};

exports.main = function(request, response){

    supportRequest.find({}, function(err, allSupportRequests){
  
        if(err) {
            console.log(err);
            return response.sendStatus(400);
        }
        console.log('main');
       // console.log(allSupportRequests);
        response.render("workSpace.hbs", {
            supportRequests: allSupportRequests
        });
    });
};

