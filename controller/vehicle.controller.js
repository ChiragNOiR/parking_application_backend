const { response } = require('../app');
const VehicleService = require('../services/vehicle.services');
const VehicleDetailModel = require('../model/vehicle.model');
const jwt = require('jsonwebtoken');

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

// exports.getVehicleDetail = async(req,res) => {
//     try{
//         const {userId} = req.body;
//         let successGetVehicleDetail = await VehicleService.getVehicleDetail(userId);
        
//         res.status(200).json({status:true,success: successGetVehicleDetail});
//     }catch(e){
//         console.log(e);
//         res.status(400).json({status:false,success: "Bad Request"});
//     }
// }


// exports.getVechileData = async (req, res) => {
//     const vehicle = await VehicleDetailModel.findById(req.vehicleDetail);
//     res.json({...vehicle._doc, token: req.token});
// }

// exports.tokenIsValid =  async (req, res) => {
//     try {
//       const token = req.header("x-auth-token");
//       if (!token) return res.json(false);
//       const isVerified = jwt.verify(token, "passwordKey");
//       if (!isVerified) return res.json(false);
  
//       const user = await VehicleDetailModel.findById(isVerified.id);
//       if (!user) return res.json(false);
//       res.json(true);
//     } catch (e) {
//         console.log(e);
//       res.status(500).json({ error: e.message });
//     }
//   }

exports.getVehicleData = async (req,res)=>{
    const token = req.headers.authorization.split(' ')[1];

    try {
        const decodedToken = jwt.verify(token, "passwordKey");
        const userId = decodedToken.userId;

        const vehicles = await VehicleDetailModel.find({userId});

        es.status(200).json({
            success: true,
            vehicles
          });
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Invalid or expired token'
          }); 
    }
}