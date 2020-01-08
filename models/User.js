const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Установка схемы

const userScheme = new Schema({
    FIO: String,
    login: String,
    password: String,
    admin: String,
});

module.exports = mongoose.model("User",userScheme);
