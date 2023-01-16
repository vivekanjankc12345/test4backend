var jwt = require('jsonwebtoken');
require('dotenv').config()
const auth=(req,res,next)=>
{
   const token=req.headers.authorization;
   console.log(token);
   if(token)
   {
   const decoded = jwt.verify(token, 'process.env.key');
   {
    if(decoded)
    {
        next();
    }
    else
    {
        console.log("please login first")
    }
   }
   }
   else{
    console.log("please login first")
   }

}
module.exports={
    auth
}