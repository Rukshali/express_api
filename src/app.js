const express = require("express");
const connectDB=require("../src/db/conn");
//const router = require("../src/routers/r");
const app=express();


const port = process.env.PORT || 3000;
const rdb = require("../src/models/r");
const router = require("./routers/r");

app.use(express.json());
app.use(router);

app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(port,()=>{
    console.log(`connected at port number : ${port} `);
})
const start=async()=>{
    try{
        await connectDB();
    } catch(error){
        console.log(error);
    }
};
start();