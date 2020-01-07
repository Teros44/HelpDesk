const express = require("express");
const supportRequestController = require("../controllers/supportRequestController.js");
const supportRequestRouter = express.Router();


supportRequestRouter.use("/",supportRequestController.createSupportRequest,function(){
    console.log("[supportRequestRouter] /");
});

supportRequestRouter.use("/modify",supportRequestController.createSupportRequest,function(){
    console.log("[supportRequestRouter] /");
});
module.exports = supportRequestRouter;