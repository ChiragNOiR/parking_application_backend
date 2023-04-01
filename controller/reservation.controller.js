const { response } = require('../app');
const ReservationService = require('../services/reservation.services');
const ReservationModel = require('../model/reservation.model');
const jwt = require('jsonwebtoken');

exports.reservation = async(req,res)=>{
    try {
        const {fullName,contact,location,startTime,endTime,price,address} = req.body;

        const successReserve = await ReservationService.reserveSpace(fullName,contact,location,startTime,endTime,price,address);

        console.log(req.body);

        res.status(200).json({status:true,success: "Location Reserved Successfully"});
    } catch (error) {
        console.log(error);
        res.status(400).json({status:false,success: "Bad Request"});
    }
}
