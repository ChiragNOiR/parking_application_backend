const KycModel = require('../model/kyc_model');

class KYCService{
    static async createKycDetails(userId,fullName,address,dateOfBirth,licenseOffice,licenseNumber,citizenshipNumber,category,contact,dateOfIssue,dateOfExpiry,status,profile){
        try {
            const createKycDetails = new KycModel({userId,fullName,address,dateOfBirth,licenseOffice,licenseNumber,citizenshipNumber,category,contact,dateOfIssue,dateOfExpiry,status,profile});
            return await createKycDetails.save();
        } catch (error) {
            throw error;
        }
    }

    static async getKycDetails(){
        try {
            const kyc = await KycModel.find();
            return kyc;
        } catch (error) {
            throw error;
        }
    }

    static async getKycByID(userId){
        const kyc = await KycModel.find({userId});
        return kyc;
    }
}

module.exports = KYCService;