const express = require("express");
const supportRequestController = require("../controllers/supportRequestController.js");
const supportRequestRouter = express.Router();

supportRequestRouter.use("/modify",supportRequestController.modify,function(){
    console.log("[supportRequestRouter] /");
});

supportRequestRouter.post("/",supportRequestController.createSupportRequest,function(req,res){
    console.log("[supportRequestRouter] /");
});


module.exports = supportRequestRouter;