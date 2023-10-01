const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('../models/Users');

router = express.Router();

// Fetch inventory of single user
router.get("/" , async (req , res) => {
    const farmerList = await UserModel.find({role : "farmer"});

    if (farmerList.length == 0) {
        return res.json({ message: "No Farmer Register Yet" });
    }

    return res.json({ data: farmerList, message: "List Of All Farmers" });
})

module.exports = router;