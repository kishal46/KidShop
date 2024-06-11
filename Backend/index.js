const express = require('express');
const app = express();
const user = require('./routes/user');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

app.use(cors());

const mongoURI = 'mongodb+srv://kishal:kishal4657@cluster0.0kqtcda.mongodb.net/Kidshop?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI);

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

app.use('/login', user);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
