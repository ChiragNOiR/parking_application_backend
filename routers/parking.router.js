const router = require('express').Router();
const ParkingDetailController = require('../controller/parking.controller');

router.post('/createParkingDetail', ParkingDetailController.createParkingDetail);
router.get('/getParkingDetails', ParkingDetailController.getParkingDetail);
router.get('/getTempleList', ParkingDetailController.getTempleList);
router.get('/getSchoolList',ParkingDetailController.getSchoolList);
router.get('/getMallList',ParkingDetailController.getMallList);
router.get('/getTrekList',ParkingDetailController.getTrekList);
router.post('/postImage', ParkingDetailController.postImage);

module.exports = router;
