const express = require('express');
const router = express.Router();


const fonctionnaliteCtrl = require('../controllers/fonctionnalite');

router.post('/contacter', fonctionnaliteCtrl.nous_contacter);
router.get('/search/:langage?', fonctionnaliteCtrl.getTout);

module.exports = router;