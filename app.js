const express=require('express')
const ejs =require('ejs')
const dotenv=require('dotenv')
const db=require('./db/db')

dotenv.config()

const app=express()

app.set('view engine','ejs')
app.set('views','./views')

db()

app.get('/',(req,res)=>{
    res.render('index')
})

const port=process.env.port || 8080
app.listen(port,()=>console.log(`server is running on port ${port}`))