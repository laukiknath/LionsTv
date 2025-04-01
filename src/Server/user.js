const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    userName: String,
    name: String,
    email: String,
    mob:Number,
    pass:String
})


const userModel = mongoose.model("users",userSchema);
module.exports = userModel;