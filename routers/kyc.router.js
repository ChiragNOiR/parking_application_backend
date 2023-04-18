const router = require('express').Router();
const KycDetailController = require('../controller/kyc.controller');

router.post('/createKycDetail', KycDetailController.createKycDetails);

router.get('/getKYC', KycDetailController.getKycDetails);

router.get('/getKycById/:userId', KycDetailController.getKycById);

router.post('/kycStatus/:userId/:status', KycDetailController.changeKycStatus);

router.post('/uploadLicense', KycDetailController.uploadLicense);

module.exports = router;