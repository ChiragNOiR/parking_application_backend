const ParkingDetailModel = require('../model/parking.model');
const jwt = require('jsonwebtoken');

class ParkingService {
    static async createParkingDetail(userId,title,description,distance,area,slots){
        try{
            const createParkingDetail = new ParkingDetailModel({userId,title,description,distance,area,slots});
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
    static async getTempleList(){
        try {
            const areas = await ParkingDetailModel.find({area: "temple"});
            return areas;
            // res.status(200).json(areas);
        } catch (error) {
            console.log(error);
        }
    }
    
}
module.exports = ParkingService;