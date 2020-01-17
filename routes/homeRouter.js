const express = require("express");
//const supportRequestRouter = require("../routes/supportRequestRouter.js");
const homeController = require("../controllers/homeController.js");
const homeRouter = express.Router();

/*
homeRouter.use("/createNewSupportRequest", supportRequestRouter, function(req,res){
    console.log("[APP] createNewSupportRequest");
});
*/
homeRouter.post('/login', homeController.login,function(req,res){
    console.log("[homeRouter] /login");
});
homeRouter.get("/about",homeController.about,function(req,res){
    console.log("[homeRouter] /about");
});
homeRouter.get("/", homeController.homePage,function(req,res){
    console.log("[homeRouter] /");
});

module.exports = homeRouter;