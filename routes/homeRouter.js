const express = require("express");
const homeController = require("../controllers/homeController.js");
const homeRouter = express.Router();

homeRouter.get("/about", homeController.about, function(req, res) {
  console.log("[homeRouter] /about");
});
homeRouter.get("/", homeController.homePage, function(req, res) {
  console.log("[homeRouter] /");
});

module.exports = homeRouter;
