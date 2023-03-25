const { response } = require('../app');
const ReservationService = require('../services/reservation.services');
const ReservationModel = require('../model/reservation.model');
const jwt = require('jsonwebtoken');

exports.reservation = async(req,res)=>{
    try {
        const {userId,fullName,company,contact,location,startTime,endTime} = req.body;

        const successReserve = await ReservationService.reserveSpace(userId,fullName,company,contact,location,startTime,endTime);

        res.status(200).json({status:true,success: "Location Reserved Successfully"});
    } catch (error) {
        console.log(error);
        res.status(400).json({status:false,success: "Bad Request"});
    }
}
