const express = require("express");
const homeController = require("../controllers/homeController.js");
const homeRouter = express.Router();

homeRouter.post('/login', homeController.login,function(){
    console.log("[homeRouter] /login");
});
homeRouter.get("/about",homeController.about,function(){
    console.log("[homeRouter] /about");
});
homeRouter.get("/", homeController.homePage,function(){
    console.log("[homeRouter] /");
});

module.exports = homeRouter;