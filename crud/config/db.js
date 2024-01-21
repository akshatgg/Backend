const mongo=require("mongoose")


const connectToDd=async()=>{
    mongo.connect(process.env.MONGO_URL)
    .then((conc)=>{
        console.log(`connected to the DB : ${conc}`);
    })
    .catch((err)=>{
        console.log(err.message);
        process.exit(1)
    })
}


module.exports=connectToDd