const User=require("../models/userModel.js")


exports.home=(req,res)=>{
    res.send('Hello world')
}

exports.createuser=async(req,res)=>{
//extract info

try{
    const {name,email}=req.body
    
if(!name || !email){
    throw new Error("Name and email are required")
}
 
const userexists =await User.findOne({email})

if(userexists){
    throw new Error("User already exists")
}

   const user= await User.create({
        name,
        email,
    })
    res.status(201).json({
        success: true,
        message: "User created sucessfully",
        user
    })
}  
catch (error){
console.log(error);
res.status(400).json({
    success: false,
    message: error.message,
    
})
}


}