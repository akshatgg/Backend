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
 
const userexists =await User.findOne({})

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




exports.getuser=async(req,res)=>{

    try{
        const {name,email}=req.body

       const user= await User.findOne({email})
       if(!user){
        throw new Error("user not be entered")
       }
       res.status(201).json({
        success:true,
        message:"User find",
        user
       })

    }
    catch(error){
        console.log(error);
        res.status(400).json({
        success: false,
        message: error.message,
            
        }) 
    }
}







exports.deleteuser=async(req,res)=>{
    
    try{
//         const {name,email}=req.body
// const user=await User.deleteOne({})




const userid=req.params.id;
const user=await User.findByIdAndDelete(userid)


if(!user){
throw new Error("user not found")
}


res.status(201).json({
    success:true,
    message:"User delete",
    user
})

    }
   catch(error){
    console.log(error)
    res.status(400).json({
    success: false,
    message: error.message,
})
    }
}






exports.updateuser=async(req,res)=>{
    try{
const user=await User.findByIdAndUpdate(req.params.id, req.body)
res.status(201).json({
    success:true,
    message:"User updated",
    user
})
    }
    catch(error){
        console.log(error)
        res.status(400).json({
        success: false,
        message: error.message,
    })
        }
}