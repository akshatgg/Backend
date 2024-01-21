const mongoose=require("mongoose")


const userschema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,'Name is required'],
        trim:true,
        maxLength:[20,'Name is less than 20 char']
    },
    email:{
         type:String,
         require:[true,'Email is required'],
         unique:true

    }
})



module.exports=mongoose.model("user",userschema)