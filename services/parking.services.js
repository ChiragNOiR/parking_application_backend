const ParkingDetailModel = require('../model/parking.model');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "dhqrq8v9p",
    api_key: "552414298378641",
    api_secret: "lZayo9qCKZuhuVWiPSk8-6x885s"
  });

class ParkingService {
    static async createParkingDetail(des,cover,title,description,distance,area,slots,image,price,lat,long){
        try{
            const createParkingDetail = new ParkingDetailModel({des,cover,title,description,distance,area,slots,image,price,lat,long});
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
            
        } catch (error) {
            console.log(error);
        }
    }

    static async getSchoolList(){
        try {
            const areas = await ParkingDetailModel.find({area: "school"});
            return areas;
            
        } catch (error) {
            console.log(error);
        }
    }
    static async getMallList(){
        try {
            const areas = await ParkingDetailModel.find({area: "mall"});
            return areas;
            
        } catch (error) {
            console.log(error);
        }
    }
    static async getTrekList(){
        try {
            const areas = await ParkingDetailModel.find({area: "trek"});
            return areas;
            
        } catch (error) {
            console.log(error);
        }
    }

    static async getRandom(){
        try {
            const areas = await ParkingDetailModel.find({area: "random"});
            return areas;
            
        } catch (error) {
            console.log(error);
        }
    }

}
module.exports = ParkingService;