const express = require('express');
const mongoose = require('mongoose');
const StockModel = require('../models/Stock');

router = express.Router();

// const pipeline =[
//     {$match : {
//         totalKg: "500"
//     }}
//     ,
//     {
//         $group : {_id : "$cropName" , Total_Kg : {
//             '$sum':"$totalKg",
//         },
//         Total_Amount : {
//             '$sum':"$totalAmout",
//         }
//     }
//     }
// ]

router.get("/unique" , async (req , res) => {
    const arr = await StockModel.aggregate([
    // {$match : {
    //     cropName: req.params.cropname
    // }}
    // ,
    {
        $group : {_id : "$cropName" , Total_Kg : {
            '$sum':"$kg",
        },
        Total_Amount : {
            '$sum':"$totalAmount",
        }
    }
    }
]);
    res.json({data :arr});
})

router.get("/unique/:crop" , async (req , res) => {
    const arr = await StockModel.aggregate([
    {$match : {
        cropName: req.params.crop
    }}
    ,
    {
        $group : {_id : "$cropName" , Total_Kg : {
            '$sum':"$kg",
        },
        Total_Amount : {
            '$sum':"$totalAmount",
        }
    }
    }
]);
    res.json({data :arr});
})

router.get("/:cropname" , async (req , res) => {
    const crop = await StockModel.find({cropName : req.params.cropname}); 
    res.json({data : crop});
})


// Enter inventory or send request to admin
router.post("/" , async (req , res) => {
    const stock = req.body;
    
    const newStock = new StockModel({name : stock.name, phoneNumber : stock.phoneNumber, cropName : stock.cropName, kg : stock.kg, amountPerKg : stock.amountPerKg, totalAmount : stock.totalAmount});
    await newStock.save();
    return res.json({message:"Crop Sold successfully"});
})


module.exports = router;