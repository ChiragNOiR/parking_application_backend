const { response } = require('../app');
const ReservationService = require('../services/reservation.services');
const ReservationModel = require('../model/reservation.model');
const jwt = require('jsonwebtoken');
const UserModel = require('../model/user.model');

exports.reservation = async(req,res)=>{
    try {
        const {userId,fullName,contact,location,startTime,endTime,price,date,status} = req.body;

        const successReserve = await ReservationService.reserveSpace(userId,fullName,contact,location,startTime,endTime,price,date,status);

        console.log(req.body);

        res.status(200).json({status:true,success: successReserve});
    } catch (error) {
        console.log(error);
        res.status(400).json({status:false,success: "Bad Request"});
    }
}

exports.getReservation = async(req, res) => {
    try {
        const userId = req.params.userId;
        console.log(`userId: ${userId}`);
        const user = await UserModel.findById(userId);
        console.log(`user: ${user}`);

        if(!user) {
            return res.status(404).json({status:false, success: "Reservation not found"});
        }

        const userRes = await ReservationService.getReservation(userId);
        console.log(userRes);
        res.status(200).json({status:true,success: userRes});

    } catch (error) {
        console.log(error);
        res.status(400).json({status:false,success: "Bad Request"});
    }
}

exports.cancelRes = async(req,res) => {
    try {
        const {location, status} = req.body;

        const cancelRes = await ReservationModel.findOneAndUpdate({location},{status}, {new: false, runValidators: true});
    res.status(200).json({ status: true, success: cancelRes });

    } catch (error) {
    res.status(500).json({ error: e.message });
        
    }
}
