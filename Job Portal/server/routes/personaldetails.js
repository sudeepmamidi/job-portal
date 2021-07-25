const express = require('express');
const router = express.Router();

const detailsCtrl = require('../controllers/personaldetails.controller');

//const jwtHelper = require('../config/jwtHelper');

router.post('/postdetails',detailsCtrl.postdetails);

router.get('/getpersonaldetals/:id',detailsCtrl.getpersonaldata);



module.exports = router;