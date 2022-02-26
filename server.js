const express=require('express')
const app=express()
const connectDb=require('./config/connectDb')
require('dotenv').config()
// config will read your .env file, parse the contents, assign it to process.env,and return an Object with a parsed key
//containing the loaded content or an error key if it failed.
const port =process.env.port
connectDb()
app.use('/api/route',require('./routes/contactRouters'))
app.listen(port,()=>{
    console.log(`server connected ${port}`)
})