const { response } = require('../app');
const ParkingService = require('../services/parking.services');
const ParkingDetailModel = require('../model/parking.model');

exports.getParkingDetail = async(req,res) => {
    try{
        const {title,description,image,distance} = req.body;
        const successGetParkingDetail = await ParkingService.getParkingDetail(title,description,image,distance);
        console.log('ttt');
        res.status(200).json({status:true,success: "Got Details"});
    }catch(e){
        console.log(e);
        res.status(400).json({status:false,success: "Bad Request"});
    }
}