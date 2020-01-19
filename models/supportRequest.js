const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Установка схемы

const supportRequestScheme = new Schema({
    //Create
    сreateDate:{type: Date},
    createLocation:{type: String},
    createUser:{ type: String, default: "Неизвестно"},
    //Problem
    problemDescription:{type:String},
    problemType:{type:String, default:"-"},
    problemPriority:{type:String, default:"Не определён"},
    //Modifed
    modifedDate:{ type:Date},
    modifedByUser:{ type:String},
    //Other
    Specialist:{type: String, default: "Не назначен"},
    Status:{type:String, default:"В обработке"}
});

module.exports = mongoose.model("supportRequest",supportRequestScheme);
