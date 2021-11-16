const express = require('express');
const router = express.Router();


const climatCtrl = require('../controllers/climat');

router.all('/list/:langage/:nbr_list?', climatCtrl.list);
router.get('/getDetails/:langage/:id_climat',climatCtrl.getDetails);
router.post('/insertion', climatCtrl.insertion);
router.get('/search/:langage?', climatCtrl.getSearch);


module.exports = router;