const ReservationModel = require('../model/reservation.model');
const jwt = require('jsonwebtoken')
class ReservationService{
    static async reserveSpace(fullName,company,contact,location,startTime,endTime,price,address){
        try{
            const createReservation = new ReservationModel({fullName,company,contact,location,startTime,endTime,price,address});
            return await createReservation.save();
        }catch(e){
            console.log(e);
            throw e;
        }
    }
}

module.exports = ReservationService;