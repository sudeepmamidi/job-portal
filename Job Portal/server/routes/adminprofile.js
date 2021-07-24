const express = require('express');
const router = express.Router();

const ProfileCtrl = require('../controllers/adminprofile.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register',ProfileCtrl.register);
router.post('/authenticate', ProfileCtrl.authenticate);


module.exports = router;