const express=require('express')
const app=express()
const user=require('./routes/user')
const mongoose=require('mongoose')
const cors=require('cors')

app.use(cors())
mongoose.connect('mongodb://localhost:27017/Signup')

mongoose.connection.on('connected',()=>{
    console.log("MongoDB connencted")
})
app.use('/login',user)

app.listen(3001,()=>{
    console.log("Server is running 3001");
})