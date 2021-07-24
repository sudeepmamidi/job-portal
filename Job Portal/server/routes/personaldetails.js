const express = require('express');
const router = express.Router();
const employement = require('../models/employement')

const detailsCtrl = require('../controllers/personaldetails.controller');

//const jwtHelper = require('../config/jwtHelper');

router.post('/postdetails',detailsCtrl.postdetails);



module.exports = router;