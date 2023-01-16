const mongoose=require("mongoose");
const mobileschema=mongoose.Schema({
    title:String,
    body:String,
    device:String
})
const mobilemodel=mongoose.model("mobile",mobileschema);
module.exports={
    mobilemodel
}