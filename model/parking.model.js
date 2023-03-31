const mongoose = require('mongoose');
const db = require('../config/db');
const UserModel = require('../model/user.model');
const { use } = require('../app');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "dhqrq8v9p",
    api_key: "552414298378641",
    api_secret: "lZayo9qCKZuhuVWiPSk8-6x885s"
  });
const { Schema } = mongoose;

const parkingDetailSchema = new Schema({
    
    title: { type: String, required: true },
    description: { type: String, required: true },
    distance: { type: String },
    slots:{type: String, required: true},
    area: {type: String, required: true, enum: ['temple', 'school', 'mall', 'trek']},
    image:{type: String, required: true},
    price:{type: String, required: true}
});

const ParkingDetailModel = db.model('parkingDetail', parkingDetailSchema);

module.exports = ParkingDetailModel;