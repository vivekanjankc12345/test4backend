const express=require("express");
require('dotenv').config()
var cors = require('cors')
const { connection } = require("./Config/db");
const { auth } = require("./Middleware/auth");
const { userrouter } = require("./Routes/loginsignup");
const { mobilerouter } = require("./Routes/mobiles");
const app=express();
app.use(cors({
  origin:"*"
}))
app.use(express.json());
app.use("/user",userrouter)
app.use(auth)
app.use("/post",mobilerouter)
app.listen(process.env.port,async(req,res)=>{
    try{
      await connection
      console.log("connected to bd")
    }
    catch(err)
    {
        console.log(err);
        console.log("database not connected with server")
    }
    console.log(`${process.env.port} port working for server`)
})