const router = require('express').Router();
const VehicleDetailController = require('../controller/vehicle.controller');
const auth = require('../middleware/auth');

router.post('/createVehicleDetail', VehicleDetailController.createVehicleDetail);
router.get('/getVehicleData/:vehicleId', VehicleDetailController.getVehicleData);
module.exports = router;
