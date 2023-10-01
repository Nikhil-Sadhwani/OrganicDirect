const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Router Import
const Signup = require('./routers/Signup');
const Login = require('./routers/Login');
const Inventory = require('./routers/Inventory');
const FarmerList = require('./routers/FarmerList');
const Stock = require('./routers/Stock');

require('dotenv').config();

const app = express();

//Allowing different ports
app.use(cors());

//For the input 
app.use(express.json());

// Use Routers
app.use("/signup" , Signup);
app.use("/login" , Login);
app.use("/inventory" , Inventory);
app.use("/farmerlist" , FarmerList);
app.use("/stocks" , Stock);

// Connect to databse
mongoose.connect(process.env.MONGODB_URL).then((response)=> console.log("Connected")).catch((err)=>console.log("Database is not connected"));

app.listen(8080 , ()=>{
    console.log("Server is running on port number 8080");
})