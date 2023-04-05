const router = require('express').Router();
const ReservationController = require('../controller/reservation.controller');

router.post('/reservation', ReservationController.reservation);

router.get('/getReservation/:userId', ReservationController.getReservation)

module.exports = router;