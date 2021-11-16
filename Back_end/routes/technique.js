const express = require('express');
const router = express.Router();


const techniqueCtrl = require('../controllers/technique');

router.all('/list/:langage/:nbr_list?/:start?/:publier?/:non_publier?', techniqueCtrl.list);
router.get('/getDetails/:langage/:id_technique', techniqueCtrl.getDetails);
router.get('/search/:langage?', techniqueCtrl.getSearch);
router.post('/update_publier', techniqueCtrl.modification_status_publication);
router.post('/insertionEtape', techniqueCtrl.insertionEtape);
router.post("/insertionTechnique", techniqueCtrl.insertionTechnique);
router.post("/insertionrelation_plante_technique", techniqueCtrl.insertionRelation_plante_technique);
router.post("/insertionRelation_climat_technique", techniqueCtrl.insertionRelation_climat_technique);
router.post("/insertionRelation_region_technique", techniqueCtrl.insertionRelation_region_technique);

module.exports = router;