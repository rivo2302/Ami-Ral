const express = require('express');
const router = express.Router();


const planteCtrl = require('../controllers/plante');
const { route } = require('./technique');

router.all('/list/:langage/:nbr_list?/:start?', planteCtrl.list);
router.get('/getDetails/:langage/:id_plante', planteCtrl.getDetails);
router.post('/insertionImage', planteCtrl.insertionImage);
router.get('/search/:langage?', planteCtrl.getSearch);
router.post('/insertionPlante', planteCtrl.insertionPlante);

module.exports = router;