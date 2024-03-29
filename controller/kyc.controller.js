const KYCService = require('../services/kyc_services');
const KYCModel = require('../model/kyc_model');
const kycDetailModel = require('../model/kyc_model');
const UserModel = require('../model/user.model');

exports.createKycDetails = async(req, res)=>{
    try {
        console.log('hhh');
        const {userId,fullName,address,dateOfBirth,licenseOffice,licenseNumber,citizenshipNumber,category,contact,dateOfIssue,dateOfExpiry,status,profile} = req.body;
        let successCreateKycDetail = await KYCService.createKycDetails(userId,fullName,address,dateOfBirth,licenseOffice,licenseNumber,citizenshipNumber,category,contact,dateOfIssue,dateOfExpiry,status,profile);
        res.status(200).json({status:true,success: successCreateKycDetail});
    } catch (e) {
        res.status(400).json({status:false,success: "Bad Request"});
    }
}

exports.changeKycStatus = async(req, res)=>{


    try {
        const {contact, status} = req.body;

        const kyc = await KYCModel.findOneAndUpdate({contact}, {status}, {new: false, runValidators: true});
    res.status(200).json({ status: true, success: kyc });

    } catch (error) {
    res.status(500).json({ error: e.message });
        
    }
}

exports.getKycDetails = async(req, res) => {
    try {
        let kyc = await KYCService.getKycDetails();
        res.status(200).json({status:true,success: kyc});
    } catch (e) {
        res.status(400).json({status:false,success: "Bad Request"});
    }


}

exports.getKycById = async(req,res)=>{
    try{
        
        const userId = req.params.userId;
        console.log(`userId: ${userId}`);
        const user = await UserModel.findById(userId);
        console.log(`user: ${user}`);

        if(!user) {
            return res.status(404).json({status:false, success: "User not found"});
        }

        const userKyc = await KYCService.getKycByID(userId);

        res.status(200).json({status:true,success: {userKyc}});
    }catch(e){
        console.log(e);
        res.status(400).json({status:false,success: "Bad Request"});
    }
}

exports.uploadLicense = async(req, res) => {
    try {
        const {contact, licensePhoto} = req.body;

        const lic = await KYCModel.findOneAndUpdate({contact},{licensePhoto},{new: true, runValidators: true});
        res.status(200).json({ status: true, success: lic });
    } catch (error) {
        res.status(500).json({ error: e.message });
    }
}