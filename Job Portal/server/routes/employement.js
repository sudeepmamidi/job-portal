const express = require('express');
const router = express.Router();


const empCtrl = require('../controllers/personaldetails.controller');

router.post('/postempdetails',detailsCtrl.postdetails);

router.get('/getpersonaldetals/:id',detailsCtrl.getpersonaldata);



module.exports = router;