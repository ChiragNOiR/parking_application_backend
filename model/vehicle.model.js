const mongoose = require('mongoose');
const db = require('../config/db');
const UserModel = require('../model/user.model');
const { use } = require('../app');

const { Schema } = mongoose;

const vehicleSchema = new Schema({
    userId:{
        type: String,
    },
    company:{
        type:String,
    },
    model:{
        type:String,
        required: true
    },
    year:{
        type:String,
        required: true
    },
    color:{
        type:String,
        required: true
    },
    licenseNumber:{
        type:String,
        required: true,
        unique:true
    },
    stateOfRegistration:{
        type:String,
        required: true
    }
});

const vehicleDetailModel = db.model('vehicleDetail', vehicleSchema);
module.exports = vehicleDetailModel;