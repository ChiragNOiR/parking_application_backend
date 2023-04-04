const mongoose = require('mongoose');
const db = require('../config/db');
const { use } = require('../app');

const { Schema } = mongoose;

const kycSchema = new Schema({
    userId:{
        type: String,
    },
    fullName:{
        type:String,
    },
    address:{
        type:String,
        required: true
    },
    dateOfBirth:{
        type:String,
        required: true
    },
    licenseOffice:{
        type:String,
        required: true
    },
    licenseNumber:{
        type:String,
        required: true,
        unique:true
    },
    citizenshipNumber:{
        type:String,
        required: true
    },
    category:{
        type:String,
        enum: ['A', 'B', 'C', 'C1', 'D', 'E', 'F', 'G', 'H', 'H1', 'H2','I','I1','I2','I3','J1', 'J2', 'J3', 'J4', 'J5', 'K' ]
    },
    contact:{
        type: String
    },
    dateOfIssue:{
        type: String,
    },
    dateOfExpiry:{
        type: String,
    },
    status:{
        type: String,
        enum:['approved', 'rejected', 'pending']
    },
    profile:{
        type: String,
    }
});

const kycDetailModel = db.model('KYC_Details', kycSchema);
module.exports = kycDetailModel;