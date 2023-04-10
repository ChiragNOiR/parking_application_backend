const router = require('express').Router();
const ReservationController = require('../controller/reservation.controller');

router.post('/reservation', ReservationController.reservation);

router.get('/getReservation/:userId', ReservationController.getReservation)

router.post('/cancelRes/:userId/:status', ReservationController.cancelRes);

module.exports = router;