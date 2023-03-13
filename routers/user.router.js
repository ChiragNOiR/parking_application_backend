const router = require('express').Router();
const UserController = require('../controller/user.controller');

router.post('/registration', UserController.register);
router.post('/login', UserController.login);
router.get('/getUserDetails', UserController.getUserDetails);
router.post('/tokenIsValid', UserController.tokenIsValid);
module.exports = router;