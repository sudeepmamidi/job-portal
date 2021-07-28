const express = require('express');
const router = express.Router();

const savedCtrl = require('../controllers/saved.controller');


router.post('/saved/:id',savedCtrl.postsavedId);

router.get('/getsaved',savedCtrl.getallsaved);

router.delete('/deletesaved/:id',savedCtrl.deletesavedyid);



module.exports = router;