const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./routers/user.router');
const parkingRouter = require('./routers/parking.router');
const vehicleRouter = require('./routers/vehicle.router');
const reservationRouter = require('./routers/reservation.router');
const fileUpload = require('express-fileupload')

const app = express();
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true
}))
// app.use(body_parser.json());
app.use('/', userRouter);
app.use('/', parkingRouter);
app.use('/',vehicleRouter);
app.use('/',reservationRouter);

module.exports = app;