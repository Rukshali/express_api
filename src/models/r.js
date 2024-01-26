const  mongoose  = require("mongoose");
const rSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true   
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
});
const rdb = new mongoose.model("r",rSchema)
module.exports = rdb;