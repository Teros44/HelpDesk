const supportRequest = require("../models/supportRequest.js");

exports.createSupportRequest = function(request, response) {
  if (!request.body) return response.sendStatus(400);
  let now = new Date();
  const location = request.body.location;
  const description = request.body.supportRequestDescription;
  const pType = request.body.problemType;

  const sRequest = new supportRequest({
    createLocation: location,
    problemDescription: description,
    сreateDate: now,
    problemType: pType
  });

  sRequest.save(function(err) {
    if (err) return console.log(err);
  });
  console.log("[Controller] createSupportRequest");
  response.render("RequestInfo.hbs", { sRequest });
};

exports.modify = function(request, response) {
  console.log("[Contoller] Modify");
  console.log(request.body);
  let now = new Date();

  supportRequest.updateOne(
    { _id: request.body._id },
    {
      $set: {
        problemType: request.body.problemType,
        problemPriority: request.body.problemPriority,
        modifedDate: now,
        modifedByUser: request.session.userLogin,
        Specialist: request.body.Specialist,
        Status: request.body.Status
      }
    },
    function(err, uRequest) {
      if (err) {
        console.log(err);
        return response.sendStatus(400);
      }
      console.log(uRequest);
    }
  );
};

exports.postUser = function(request, response) {
  if (!request.body) return response.sendStatus(400);
  const userName = request.body.name;
  const userAge = request.body.age;
  const user = new User({ name: userName, age: userAge });

  user.save(function(err) {
    if (err) return console.log(err);
    response.redirect("/users");
  });
};
