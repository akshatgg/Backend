const express=require("express")

const {home}=require("../controller/usercontroller.js")


const router=express.Router()
router.get("/",home)


module.exports=router