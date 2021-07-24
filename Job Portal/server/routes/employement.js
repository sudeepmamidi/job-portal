const express = require('express');
const router = express.Router();
const employement = require('../models/employement')

const employementCtrl = require('../controllers/employement.controller');

//const jwtHelper = require('../config/jwtHelper');

router.post('/postemployement',employementCtrl.postemployement);



module.exports = router;