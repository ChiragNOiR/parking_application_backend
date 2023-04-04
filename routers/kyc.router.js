const router = require('express').Router();
const KycDetailController = require('../controller/kyc.controller');

router.post('/createKycDetail', KycDetailController.createKycDetails);
router.get('/getKYC', KycDetailController.getKycDetails);
router.get('/getKycById/:userId', KycDetailController.getKycById);

module.exports = router;