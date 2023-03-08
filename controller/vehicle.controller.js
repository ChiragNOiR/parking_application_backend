const { response } = require('../app');
const VehicleService = require('../services/vehicle.services');
const VehicleDetailModel = require('../model/vehicle.model');

exports.createVehicleDetail = async(req,res)=>{
    try{
        const {userId,company,model,year,color,licenseNumber,stateOfRegistration} = req.body;
        let successCreateVehicleDetail = await VehicleService.createVehicleDetail(userId,company,model,year,color,licenseNumber,stateOfRegistration);
        
        res.status(200).json({status:true,success: successCreateVehicleDetail});
    }catch(e){
        console.log(e);
        res.status(400).json({status:false,success: "Bad Request"});
    }
}

exports.getVehicleDetail = async(req,res) => {
    try{
        const {userId} = req.body;
        let successGetVehicleDetail = await VehicleService.getVehicleDetail(userId);
        
        res.status(200).json({status:true,success: successGetVehicleDetail});
    }catch(e){
        console.log(e);
        res.status(400).json({status:false,success: "Bad Request"});
    }
}