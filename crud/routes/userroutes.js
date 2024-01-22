const express=require("express")

const {home,createuser}=require("../controller/usercontroller.js")


const router=express.Router()
router.get("/",home)
router.post('/createuser',createuser)


module.exports=router