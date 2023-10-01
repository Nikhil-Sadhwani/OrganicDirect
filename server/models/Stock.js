const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    name : {
        type: String,
        require : true
    },
    phoneNumber : {
        type: Number,
        require : true
    },
    cropName : {
        type: String,
        require : true
    },
    kg : {
        type: Number,
        require : true
    },
    amountPerKg : {
        type: Number,
        require : true
    },
    totalAmount : {
        type: Number,
        require : true
    },
});

const StockModel = mongoose.model("sellingcrops" , StockSchema);

module.exports = StockModel;