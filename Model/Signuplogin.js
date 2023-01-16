const mongoose=require("mongoose");
const signupschema=mongoose.Schema({
    name:String,
email:String,
gender:String,
password:String
})
const signupmodel=mongoose.model("register",signupschema);
module.exports={
    signupmodel
}