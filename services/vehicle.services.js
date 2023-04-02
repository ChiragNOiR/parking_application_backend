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
    static async getVehicleDetail(){
        try {
            const vehicleData = await vehicleDetailModel.findById(id);
            return vehicleData;
        } catch (error) {
            throw error;
        }
    }

    static async getVehicleByUserId(userId){
        const vehicles = await VehicleModel.find({ userId });
        return vehicles;
    }
}
module.exports = VehicleService;