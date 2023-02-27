const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./routers/user.router');
const parkingRouter = require('./routers/parking.router');

const app = express();
app.use(express.json());
// app.use(body_parser.json());
app.use('/', userRouter);
app.use('/', parkingRouter);

module.exports = app;