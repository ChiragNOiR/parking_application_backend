const router = require('express').Router();
const ParkingDetailController = require('../controller/parking.controller');

router.post('/getParkingDetail', ParkingDetailController.getParkingDetail);
module.exports = router;
