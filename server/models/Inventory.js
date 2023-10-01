const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    farmer_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    cropName : {
        type: String,
        require : true
    },
    totalKg : {
        type: Number,
        require : true
    },
    amountPerKg : {
        type: Number,
        require : true
    },
    totalAmout : {
        type: Number,
        require : true
    },
    status : {
        type: String,
        require : true
    },
});

const InventoryModel = mongoose.model("inventories" , InventorySchema);

module.exports = InventoryModel;