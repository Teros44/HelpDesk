const express = require("express");
const workSpaceController = require("../controllers/workSpaceController.js");
const workSpaceRouter = express.Router();

workSpaceRouter.get("/getRequests",workSpaceController.getRequests,function(request,response){
    console.log("[workSpaceRouter] /getRequests");
});

workSpaceRouter.use("/",workSpaceController.main,function(request,response){
    console.log("[workSpaceRouter] /");
});

module.exports = workSpaceRouter;