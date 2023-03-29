const mongoose = require('mongoose');
const db = require('../config/db');
const { use } = require('../app');
const UserModel = require('../model/user.model');
const VehicleDetailModel = require('../model/vehicle.model');

const { Schema } = mongoose;

const reservationSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref:UserModel.modelName
    },
    fullName:{
        type: String,
        ref:UserModel.modelName
    },
    company:{
        type: String,
        ref:VehicleDetailModel.modelName
    },
    contact:{
        type:String,
        ref: UserModel.modelName
    },
    location:{
        type:String,
        required: true,
    },
    startTime:{
        type:Date,
        required: true
    },
    endTime:{
        type:Date,
        required: true
    },
    
});

const ReservationModel = db.model('reservation', reservationSchema);

module.exports = ReservationModel;