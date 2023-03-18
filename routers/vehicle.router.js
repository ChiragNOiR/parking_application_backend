const router = require('express').Router();
const VehicleDetailController = require('../controller/vehicle.controller');
const auth = require('../middleware/auth');

router.post('/createVehicleDetail', VehicleDetailController.createVehicleDetail);
// router.post('/getData', VehicleDetailController.getdata);
router.get('/getVehicleData', auth, VehicleDetailController.getVehicleData);
module.exports = router;
