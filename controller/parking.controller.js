const { response } = require('../app');
const ParkingService = require('../services/parking.services');
const ParkingDetailModel = require('../model/parking.model');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "dhqrq8v9p",
    api_key: "552414298378641",
    api_secret: "lZayo9qCKZuhuVWiPSk8-6x885s"
  });

exports.createParkingDetail = async(req,res) => {
    try{
        const {des,cover,title,description,distance,area,slots,image,price} = req.body;
        let successCreateParkingDetail = await ParkingService.createParkingDetail(des,cover,title,description,distance,area,slots,image,price);
        
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

exports.getTempleList = async(req, res) => {
    try {
        const areas = await ParkingService.getTempleList();
        res.status(200).json(areas);
    } catch (error) {
        console.log(error);
        res.status(400).json({status:false,success: "Bad Request"});
    }
}

exports.getSchoolList = async(req, res) => {
    try {
        const areas = await ParkingService.getSchoolList();
        res.status(200).json(areas);
    } catch (error) {
        console.log(error);
        res.status(400).json({status:false,success: "Bad Request"});
    }
}
exports.getMallList = async(req, res) => {
    try {
        const areas = await ParkingService.getMallList();
        res.status(200).json(areas);
    } catch (error) {
        console.log(error);
        res.status(400).json({status:false,success: "Bad Request"});
    }
}
exports.getTrekList = async(req, res) => {
    try {
        const areas = await ParkingService.getTrekList();
        res.status(200).json(areas);
    } catch (error) {
        console.log(error);
        res.status(400).json({status:false,success: "Bad Request"});
    }
}

exports.postImage = async(req,res)=>{
    try {
        console.log(req.body);
        const file = req.files.photo;
        cloudinary.uploader.upload(file.tempFilePath,(error,result)=>{
            console.log(result);
            postImage = new ParkingDetailModel({
                title:req.body.title,
                area:req.body.area,
                description:req.body.description,
                slots:req.body.slots,
                distance:req.body.distance,
                image:result.url
            });
            postImage.save().then(result=>{
                console.log(result);
                res.status(200).json({new_product:result})
            })
        }).catch(e=>{
            console.log(e);
            res.status(500).json({Err:e})
        })
    } catch (error) {
        console.log('error');
    }
}


exports.searchAPI = async (req, res) => {

    let data = await ParkingDetailModel.find({
        "$or": [
            {'title':{$regex: new RegExp(req.params.key, "i")}},
        ]
    })
    res.status(200).json({status:true,success: data});
    
}
