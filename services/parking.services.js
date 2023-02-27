const ParkingDetailModel = require('../model/parking.model');
const jwt = require('jsonwebtoken');

class ParkingService {
    static async getParkingDetail(title,description,image,distance){
        try{
            const createParkingDetail = new ParkingDetailModel({title,image,description,distance});
            return await createParkingDetail.save();
        }catch(e){
            
            console.log(e);
        }
    }
}
module.exports = ParkingService;