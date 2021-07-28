const express = require('express');
const router = express.Router();

const applyCtrl = require('../controllers/applied.controller');


router.post('/applied/:id',applyCtrl.appliedJobs);


router.get('/getapplied',applyCtrl.getallapplied)



module.exports = router;