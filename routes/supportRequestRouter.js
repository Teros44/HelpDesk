const express = require("express");
const supportRequestController = require("../controllers/supportRequestController.js");
const supportRequestRouter = express.Router();

console.log("supportRequestRouter");
supportRequestRouter.use("/",supportRequestController.createSupportRequest);

module.exports = supportRequestRouter;