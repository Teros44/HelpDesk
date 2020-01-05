const express = require("express");
const workSpaceController = require("../controllers/workSpaceController.js");
const workSpaceRouter = express.Router();

workSpaceRouter.use("/",workSpaceController.main,function(request,response){
    console.log("[workSpaceRouter] /");
});

module.exports = workSpaceRouter;