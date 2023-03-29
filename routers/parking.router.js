const router = require('express').Router();
const ParkingDetailController = require('../controller/parking.controller');

router.post('/createParkingDetail', ParkingDetailController.createParkingDetail);
router.get('/getParkingDetails', ParkingDetailController.getParkingDetail);
router.get('/getTempleList', ParkingDetailController.getTempleList);
module.exports = router;
