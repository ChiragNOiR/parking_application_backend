const { response } = require('../app');
const VehicleService = require('../services/vehicle.services');
const jwt = require('jsonwebtoken');
const vehicleDetailModel = require('../model/vehicle.model');
const UserModel = require('../model/user.model');

exports.createVehicleDetail = async(req,res)=>{
    try{

        const {userId,company,model,year,color,licenseNumber,stateOfRegistration} = req.body;
        console.log(userId);
        let successCreateVehicleDetail = await VehicleService.createVehicleDetail(userId,company,model,year,color,licenseNumber,stateOfRegistration);
        console.log(successCreateVehicleDetail);
        res.status(200).json({status:true,success: successCreateVehicleDetail});
    }catch(e){
        console.log(e);
        res.status(400).json({status:false,success: "Bad Request"});
    }
}

exports.getVehicleData = async(req,res)=>{
    try{
        
        const userId = req.params.userId;
        console.log(`userId: ${userId}`);
        const user = await UserModel.findById(userId);
        console.log(`user: ${user}`);

        if(!user) {
            return res.status(404).json({status:false, success: "vehicle not found"});
        }

        const userVehicle = await VehicleService.getVehicleByUserId(userId);

        res.status(200).json({status:true,success: {userVehicle}});
    }catch(e){
        console.log(e);
        res.status(400).json({status:false,success: "Bad Request"});
    }
}
