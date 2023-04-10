const ReservationModel = require('../model/reservation.model');
const jwt = require('jsonwebtoken')
class ReservationService{
    static async reserveSpace(userId,fullName,contact,location,startTime,endTime,price,date,status){
        try{
            const createReservation = new ReservationModel({userId,fullName,contact,location,startTime,endTime,price,date,status});
            return await createReservation.save();
        }catch(e){
            console.log(e);
            throw e;
        }
    }

    static async getReservation(userId){
        const getR = await ReservationModel.find({userId});
        return getR;
    }
}

module.exports = ReservationService;