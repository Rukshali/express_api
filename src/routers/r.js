const express = require("express");
const router = new express.Router();

const rdb = require("../models/r");

// lets go with post request now.....
router.post("/r",async(req,res)=>{
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
router.get("/r",async(req,res)=>{
    try{
        const rget = await rdb.find({});
        res.send(rget);
    }catch(e){
        res.status(400).send(e);
    }
});

// lets go with get method with id now.....
router.get("/r/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const rget = await rdb.findById({_id:_id});
        res.send(rget);
    }catch(e){
        res.status(400).send(e);
    }
});

// lets go with patch method now.....
router.patch("/r/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const rget = await rdb.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(rget);
    }catch(e){
        res.status(500).send(e);
    }
});

// lets go with delete method now.....
router.delete("/r/:id",async(req,res)=>{
    try{
        const rget = await rdb.findByIdAndDelete(req.params.id);
        res.send(rget);
    }catch(e){
        res.status(500).send(e);
    }
});


module.exports = router;