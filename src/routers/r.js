const express = require("express");
//const bycrypt = require("bycrypt");
const router = new express.Router();

const rdb = require("../models/r");

// lets go with post request now.....
router.post("/register",async(req,res)=>{
    try{
        const rdba = new rdb(req.body)
        console.log(req.body);
        const rinsert = await rdba.save();
        res.status(201).send(rinsert);
        
    }catch(e){
        res.status(400).send(e);
    }
});

// lets go with get method now.....
router.get("/register",async(req,res)=>{
    try{
        const rget = await rdb.find({});
        res.send(rget);
    }catch(e){
        res.status(400).send(e);
    }
});

// lets go with get method with id now.....
router.get("/register/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const rget = await rdb.findById({_id:_id});
        res.send(rget);
    }catch(e){
        res.status(400).send(e);
    }
});

// lets go with patch method now.....
router.patch("/register/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const rget = await rdb.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(rget);
    }catch(e){
        res.status(500).send(e);
    }
});

// lets go with delete method now.....
router.delete("/register/:id",async(req,res)=>{
    try{
        const rget = await rdb.findByIdAndDelete(req.params.id);
        res.send(rget);
    }catch(e){
        res.status(500).send(e);
    }
});


/*login api
const user_login = async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        const userData = await rdb.findOne({email:email});
        if(userData){
            const passwordMatch = await bycrypt.compare(password,userData.password);
            if(passwordMatch){
                const userResult = {
                    _id:userData.id,
                    name:userData.name,
                    email:userData.email,
                    phone:userData.phone,
                    city:userData.city,
                    password:userData.password,
                }
                const response ={
                    success:true,
                    msg:"User Details",
                    data:userResult
                }
                res.status(200).send(response);
            }
            else{
                res.status(200).send({success:false,msg:"Incorrect details"});
            }
        }
        else{
           res.status(200).send({success:false,msg:"Incorrect details"}); 
        }
    } catch(error){
        res.status(400).send(error.message);
    }
}

module.exports = {router,user_login};
*/
module.exports= router;