const express=require("express")

const {home,createuser,getuser,deleteuser,updateuser}=require("../controller/usercontroller.js")


const router=express.Router()
router.get("/",home)
router.post('/createuser',createuser)
router.get("/getuser",getuser)
// router.get("/deleteuser",deleteuser)
router.delete('/deleteuser/:id',deleteuser)
router.put('/updateuser/:id',updateuser)


module.exports=router