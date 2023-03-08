const router = require('express').Router();
const VehicleDetailController = require('../controller/vehicle.controller');

router.post('/createVehicleDetail', VehicleDetailController.createVehicleDetail);
router.get('/getVehicleDetails', VehicleDetailController.getVehicleDetail);
module.exports = router;
