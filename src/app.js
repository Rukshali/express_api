const express = require("express");
const connectDB=require("../src/db/conn");
//const router = require("../src/routers/r");
const app=express();


const port = process.env.PORT || 3000;
const rdb = require("../src/models/r");
const router = require("./routers/r");

app.use(express.json());
app.use(router);

/* login api
app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/login",async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await rdb.findOne({email:email});
        if(useremail.password === password){
            res.status(201).render("index");
        }else{
            res.send("Password not matched");
        }
    } catch(error){
        res.status(400).send("Invalid Email");
    }
});
*/

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