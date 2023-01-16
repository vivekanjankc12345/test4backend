const express=require("express");
const { mobilemodel } = require("../Model/mobile");
const mobilerouter=express.Router();
mobilerouter.get("/",async(req,res)=>{
    try{
        let que=req.query;
        const getmobile=await mobilemodel.find(que);
        res.send(getmobile)
    }
    catch(err)
    {
console.log(err)
    }
})
mobilerouter.post("/",async(req,res)=>{
    const payload=req.body;
    try{
       const postmobile=new mobilemodel(payload);
       await postmobile.save();
        res.send("data added sucessfully")
    }
    catch(err)
    {
console.log(err)
    }
})
mobilerouter.patch("/update/:id",async(req,res)=>{
    let id=req.params.id;
    let payload=req.body;
    try{
        await mobilemodel.findByIdAndUpdate({_id:id},payload);
        res.send(`data upadte sucessfully id:${id}`)
    }
    catch(err)
    {
console.log(err)
    }
})
mobilerouter.delete("/delete/:id",async(req,res)=>{
    let id=req.params.id;
    try{
        await mobilemodel.findByIdAndDelete(id);
        res.send(`data upadte sucessfully id:${id}`)
    }
    catch(err)
    {
console.log(err)
    }
})
module.exports={
    mobilerouter
}