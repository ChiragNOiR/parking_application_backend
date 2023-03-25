const router = require('express').Router();
const ReservationController = require('../controller/reservation.controller');

router.post('/reservation', ReservationController.reservation);

module.exports = router;