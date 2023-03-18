const router = require('express').Router();
const UserController = require('../controller/user.controller');
const auth = require('../middleware/auth');
const { route } = require('./parking.router');

router.post('/registration', UserController.register);
router.post('/login', UserController.login);
router.get('/', auth, UserController.getUserData);
router.post('/tokenIsValid', UserController.tokenIsValid);
module.exports = router;