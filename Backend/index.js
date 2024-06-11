const express = require('express')
const app = express()
const user = require('./routes/user')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

app.use(cors())

mongoose.connect('mongodb://localhost:27017/Signup')

mongoose.connection.on('connected', () => {
    console.log("MongoDB connected")
})

app.use('/login', user)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
