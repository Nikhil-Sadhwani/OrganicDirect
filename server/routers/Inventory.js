const express = require('express');
const mongoose = require('mongoose');
const InventoryModel = require('../models/Inventory');

router = express.Router();

const pipeline =[
    // {$match : {
    //     totalKg: "500"
    // }}
    // ,
    {
        $group : {_id : "$cropName" , Total_Kg : {
            '$sum':"$totalKg",
        },
        Total_Amount : {
            '$sum':"$totalAmout",
        }
    }
    }
]

router.get("/" , async (req , res) => {
    const arr = await InventoryModel.aggregate(pipeline);
    res.json({data :arr});
})

router.get("/singlecrop/:crop" , async (req , res) => {
    const arr = await InventoryModel.aggregate([
    {$match : {
        cropName: req.params.crop
    }}
    ,
    {
        $group : {_id : "$cropName" , Total_Kg : {
            '$sum':"$totalKg",
        },
        Total_Amount : {
            '$sum':"$totalAmout",
        }
    }
    }
]);
    res.json({data :arr});
})

// Fetch inventory of single user
router.get("/:id" , async (req , res) => {
    const id = req.params.id;
    const farmerInventories = await InventoryModel.find({farmer_id : id});

    if (farmerInventories.length == 0) {
        return res.json({ message: "No Items" });
    }

    return res.json({ data: farmerInventories, message: "Inventories of you" });
})

// Enter inventory or send request to admin
router.post("/" , async (req , res) => {
    const inventory = req.body;
    const newInventory = new InventoryModel({farmer_id : inventory._id , cropName : inventory.cropName, totalKg : inventory.totalKg, amountPerKg : inventory.amountPerKg, totalAmout : inventory.totalAmout, status : inventory.status});
    await newInventory.save();
    return res.json({message:"Inventory request sended !!"});
})

router.put("/:id" , (req , res) => {
    const id = req.params.id ;
    const {status} = req.body;
    if(status === "Decline" || status === "Stocks are not recevie"){

        InventoryModel.findOneAndUpdate({_id: id}, {
           $set :{
            totalKg: 0,
            amountPerKg : 0,
                totalAmout : 0,
               status: status
           },
       }).then((result) => {
           res.json({message:`Transaction ${status}` });
       }).catch((err) => res.json(err));
    }
    else{

        InventoryModel.findOneAndUpdate({_id: id}, {
           $set :{
               status: status
           },
       }).then((result) => {
           res.json({message:`Transaction ${status}` });
       }).catch((err) => res.json(err));
    }
})

module.exports = router;