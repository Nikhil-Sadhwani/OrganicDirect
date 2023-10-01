const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password : {
        type: String,
        require:  true
    },
    phonenumber : {
        type: Number,
        require:  true
    },
    altPhonenumber : {
        type: Number,
        require:  true
    },
    address : {
        type: String,
    },
    bankno : {
        type: Number,
    },
    role:{
        type:String,
        require: true
    }
});

const UserModel = mongoose.model("users" , UserSchema);

module.exports = UserModel;