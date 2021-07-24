const express = require('express');
const router = express.Router();

const ctrlAdmin = require('../controllers/admin.controller');


router.post('/jobpost',ctrlAdmin.jobpost);

router.get('/all',ctrlAdmin.getall);

router.put('/update',ctrlAdmin.updatedata);

router.delete('/delete/:id',ctrlAdmin.deletedata);

router.get('/filter',ctrlAdmin.filterbysearchandlocation);

router.get('/searchbyrole',ctrlAdmin.searchbyrole);

router.get('/cognizent',ctrlAdmin.getcognizent)

router.get('/tcs',ctrlAdmin.gettcs);

// router.get('/amazon',ctrlAdmin.getamazon);

router.get('/getbycompany/:companyName',ctrlAdmin.getbycompany);




module.exports = router;