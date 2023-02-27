const mongoose = require('mongoose');
const db = require('../config/db');
const { use } = require('../app');

const { Schema } = mongoose;

const parkingDetailSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    distance: { type: String, required: true }
});

const ParkingDetailModel = db.model('parkingDetail', parkingDetailSchema);

module.exports = ParkingDetailModel;