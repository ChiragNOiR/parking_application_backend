const mongoose = require('mongoose');
const db = require('../config/db');
const { use } = require('../app');
const UserModel = require('../model/user.model');
const VehicleDetailModel = require('../model/vehicle.model');

const { Schema } = mongoose;

const reservationSchema = new Schema({
    userId:{
        type: String,
    },
    fullName:{
        type: String,
    },
    date:{
        type: String,
    },
    contact:{
        type:String,
    },
    location:{
        type:String,
        
    },
    price:{
        type: String
    },
    startTime:{
        type:String,
        
    },
    endTime:{
        type:String,
        
    },
    
});

const ReservationModel = db.model('reservation', reservationSchema);

module.exports = ReservationModel;