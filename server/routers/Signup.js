const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('../models/Users');
const FarmerModel = require('../models/Farmer');
const InventoryModel = require('../models/Inventory');
const bcrypt = require('bcrypt');

router = express.Router();

// Normal User registeration
router.post("/" , async (req , res) => {
    const user = req.body;
    const isExist = await UserModel.findOne({email : user.email});
    if(isExist){
        return res.json({message:"Email is Already Exists"});
    }

    const hashedPassword = await bcrypt.hash(user.password , 10);

    const newUser = new UserModel({email: user.email , password: hashedPassword , role: user.role});
    await newUser.save();

    return res.json({data:user , message:"User Register Successfully"});
})

// Farmer registeration
router.put("/" , async (req , res) => {
    const user = req.body;
    const farmerInfo = new FarmerModel({farmer_id: user._id , kishanno : user.kishanno, soilhealthno : user.soilhealthno, bhamashahno : user.bhamashahno});
    await farmerInfo.save();
    UserModel.findOneAndUpdate({email: user.email}, {
        $set :{
            name: user.name,
            phonenumber : user.phonenumber,
            altPhonenumber : user.altPhonenumber,
            address : user.address,
            bankno : user.bankno,
            role : user.role
        },
    }).then((result) => {
        res.json({message:"Farmer Register Successfully"});
    }).catch((err) => res.json(err));
})

router.delete("/:id" , async (req , res) => {
    await UserModel.findByIdAndDelete(req.params.id).exec();
    await FarmerModel.findByIdAndDelete(req.params.id).exec();
    await InventoryModel.findByIdAndDelete(req.params.id).exec();
    res.json({message: "Farmer removed successfully"});
})

module.exports = router;