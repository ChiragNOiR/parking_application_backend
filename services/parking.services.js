const ParkingDetailModel = require('../model/parking.model');
const jwt = require('jsonwebtoken');

class ParkingService {
    static async createParkingDetail(userId,title,description,image,distance){
        try{
            const createParkingDetail = new ParkingDetailModel({userId,title,image,description,distance});
            return await createParkingDetail.save();
        }catch(e){
            
            console.log(e);
        }
    }
    static async getParkingData(userId){
        try{
            const parkingData =  await ParkingDetailModel.find({userId});
            return parkingData;
        }catch(e){
            throw e;
        }
    }
    
}
module.exports = ParkingService;