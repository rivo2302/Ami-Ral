const express = require('express');
const router = express.Router();


const regionCtrl = require('../controllers/region');

router.all('/list/:langage/:nbr_list?', regionCtrl.list);
router.get('/getDetails/:langage/:id_region',regionCtrl.getDetails);
router.post('/insertion', regionCtrl.insertion);
router.get('/search/:langage?', regionCtrl.getSearch);
router.post('/insertionRelation_plante_region', regionCtrl.insertionRelation_plante_region);

module.exports = router;