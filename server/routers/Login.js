const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router = express.Router();

router.post("/" , async (req , res) => {
    const user = req.body;
    const isExist = await UserModel.findOne({email : user.email});
    if(!isExist){
        return res.json({message:"Email is Not Exists Please Signup first"});
    }

    const isValidPass = await bcrypt.compare( user.password , isExist.password);
    if(!isValidPass){
        return res.json({message:"Incorrect Password"});
    }

    const token = jwt.sign({id : isExist._id} , "secret");
    return res.json({token , data: isExist , message:"User Login Successfully"});
})

module.exports = router;