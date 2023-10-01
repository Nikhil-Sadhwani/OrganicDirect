const mongoose = require('mongoose');

const FarmerSchema = new mongoose.Schema({
    farmer_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    kishanno:{
        type: String,
        require: true,
    },
    soilhealthno:{
        type: String,
        require: true,
    },
    bhamashahno : {
        type: String,
        require:  true
    }
});

const FarmerModel = mongoose.model("farmerinfos" , FarmerSchema);

module.exports = FarmerModel;