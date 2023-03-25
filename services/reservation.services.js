const ReservationModel = require('../model/reservation.model');
const jwt = require('jsonwebtoken')
class ReservationService{
    static async reserveSpace(userId,fullName,company,contact,location,startTime,endTime){
        try{
            const createReservation = new ReservationModel({userId,fullName,company,contact,location,startTime,endTime});
            return await createReservation.save();
        }catch(e){
            console.log(e);
            throw e;
        }
    }
}

module.exports = ReservationService;