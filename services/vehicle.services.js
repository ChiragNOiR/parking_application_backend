const VehicleModel = require('../model/vehicle.model');
const jwt = require('jsonwebtoken');
const vehicleDetailModel = require('../model/vehicle.model');

class VehicleService{
    static async createVehicleDetail(userId,company,model,year,color,licenseNumber,stateOfRegistration){
        try {
            const createVehicleDetail = new vehicleDetailModel({userId,company,model,year,color,licenseNumber,stateOfRegistration});
            return await createVehicleDetail.save();
        } catch (error) {
            throw error;
        }
    }
    static async getVehicleDetail(userId){
        try {
            const vehicleData = await vehicleDetailModel.find({userId});
            return vehicleData;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = VehicleService;