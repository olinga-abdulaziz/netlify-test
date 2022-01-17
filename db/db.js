const mongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config()

const dbConnection=async()=>{
   
    try {
        const conn=await mongoose.connect(process.env.mongo)
        console.log(`connected to mongodb`);
    } catch (err) {
        console.log(err);
    }

}

module.exports=dbConnection