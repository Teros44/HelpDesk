const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Установка схемы

const supportRequestScheme = new Schema({
    //Create
    сreateDate:{ type: Date, default: Date.now },
    createLocation:{type: String, default: "Undefined"},
    createUser:{ type: String, default: "Undefined"},
    //Problem
    problemDescription:{type:String, default:"Undefined"},
    problemType:{type:String, default:"Undefined"},
    problemPriority:{type:String, default:"Undefined"},
    //Modifed
    modifedDate:{ type:Date, default: Date.now },
    modifedByUser:{ type:String, default: "Undefined"},
    //Other
    Specialist:{type: String, default: "Undefined"},
    Status:{type:String, default:"Undefined"}
});

module.exports = mongoose.model("supportRequest",supportRequestScheme);