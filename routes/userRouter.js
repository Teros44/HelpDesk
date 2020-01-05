const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();

userRouter.use("/postuser",userController.postUser,function(){
    console.log("[userRouter] /postuser");
});
userRouter.use("/create", userController.addUser,function(){
    console.log("[userRouter] /create");
});
userRouter.use("/",userController.getUsers,function(){
    console.log("[userRouter] /");
});

module.exports = userRouter;