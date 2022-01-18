const mongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config()

const dbConnection=async()=>{
   
    try {
        const conn=await mongoose.connect('mongodb+srv://abdulaziz:azizsk123@cluster0.yvmzf.mongodb.net/duladb?retryWrites=true&w=majority')
        console.log(`connected to mongodb`);
    } catch (err) {
        console.log(err);
    }

}

module.exports=dbConnection