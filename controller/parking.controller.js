const { response } = require('../app');
const ParkingService = require('../services/parking.services');
const ParkingDetailModel = require('../model/parking.model');

exports.createParkingDetail = async(req,res) => {
    try{
        const {userId,title,description,image,distance} = req.body;
        let successCreateParkingDetail = await ParkingService.createParkingDetail(userId,title,description,image,distance);
        
        res.status(200).json({status:true,success: successCreateParkingDetail});
    }catch(e){
        console.log(e);
        res.status(400).json({status:false,success: "Bad Request"});
    }
}

exports.getParkingDetail = async(req,res) => {
    try{
        const {userId} = req.body;
        let successGetParkingDetail = await ParkingService.getParkingData(userId);
        
        res.status(200).json({status:true,success: successGetParkingDetail});
    }catch(e){
        console.log(e);
        res.status(400).json({status:false,success: "Bad Request"});
    }
}