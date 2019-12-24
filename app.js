﻿const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");

app.use("/users", userRouter);
app.use("/",homeRouter)

app.use(function(request,response,next){
    response.status(404).send("Not found")
});

app.listen(3000);