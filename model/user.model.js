const mongoose = require("mongoose");
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email:{
        type:String,
        unique:true
    },
    password: String,
    mobilenumber: {
        type:Number,
        unique:true
    },
  })
);
module.exports = User;