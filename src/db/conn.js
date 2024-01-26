const mongoose = require("mongoose");

uri=
    "mongodb+srv://rukshalirukshali001:3OJUYniKQzbpJ37B@ptrial.m63dvga.mongodb.net/Ptrial?retryWrites=true&w=majority";

const connectDB = ()=>{
    console.log("connected with database");
    return mongoose.connect(uri, {
        //useNewUrlParser:true,     my code was not supporting this line...
        //useUnifiedToplogy:true,   my code was not supporting this line...
    });
};                     

module.exports=connectDB;