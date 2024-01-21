
require('dotenv').config();
const express= require ('express')
const cors=require("cors")


const connectToDB=require('./config/db.js')


const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())



const router=require("./routes/userroutes.js")

connectToDB()
app.get('/',router)



module.exports = app;