const express = require('express');
const router = express.Router();


const testCtrl = require('../controllers/stuff');

router.get('/test', testCtrl.test);


module.exports = router;