const region = require('../models/region');
const fonctionnalite = require('../models/fonctionnalite');

module.exports = {

    list: async (req, res) => {
      let langage = req.body.langage ? req.body.langage : req.params.langage ? req.params.langage : "fr";
      let nbr_list = req.body.nbr_list ? req.body.nbr_list : req.params.nbr_list ? req.params.nbr_list : null;
      try {
          let resultat_list = await region.getList(langage, nbr_list);
          res.send(resultat_list);
      } catch (error) {
          res.status(500).send(error.message);
      }
    },

    getDetails: async (req, res) => {
        let langage = req.body.langage ? req.body.langage : req.params.langage ? req.params.langage : "fr";
        let id = req.params.id_region ? req.params.id_region : 0 ;
        try {
          let reg = await region.getRegion(langage, id);
          if(reg){
            let climats = await region.getClimat(langage, id);
            let plantes = await region.getPlante(langage, id);
            let techniques = await region.getTechnique(langage, id);
            res.send({region:reg,climats, plantes, techniques});
          }
          else{
            res.send([]);
          }
        } catch (error) {
          res.status(500).send(error.message);
        }
      },

      insertion: async(req, res) => {
        let donnee = req.body;
        let nom = donnee.nom, desc_fr = donnee.description_fr, desc_mg = donnee.description_mg, type_sol_fr = donnee.type_sol_fr, type_sol_mg = donnee.type_sol_mg, struct_sol_mg = donnee.structure_sol_mg, struct_sol_fr =  donnee.structure_sol_fr, texture_sol_mg = donnee.texture_sol_mg, texture_sol_fr =  donnee.texture_sol_fr , id_climat = donnee.id_climat ? donnee.id_climat : null ;
        try {
          let region_exist = await region.getRegion("fr", 0, nom);
          if(!region_exist){
            let couverture = await service.uploadFile("public/image/", req.files.couverture, Math.floor(Math.random() * 11));
            let insertion = await region.insertionRegion(couverture, nom, desc_fr, desc_mg, type_sol_fr, type_sol_mg, struct_sol_fr, struct_sol_mg, texture_sol_fr, texture_sol_mg, id_climat);
            res.send(insertion)
          }
          else{
            res.send("Région déjà enregistré");
          }
        } catch (error) {
            res.status(500).send(error.message);
        }
      },
      
      getSearch :async(req,res)=> {
        let langage = req.body.langage ? req.body.langage : req.params.langage ? req.params.langage : "fr";
        let query = req.body.query ? req.body.query : req.query.query ? req.query.query : null;
        try {
            let regions = await region.getSearch(langage, query);
            let plantes = [];
            let techniques = []
            let climats = []
            
            res.send({plantes,regions,techniques,climats});
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    insertionRelation_plante_region: async(req, res) => {
      let id_region = req.body.id_region, id_plante = req.body.id_plante;
      try {
        let insertion_plante_region = await fonctionnalite.insertionRelation("id_region", "id_plante", id_region, id_plante, "plante_region");
        res.send(insertion_plante_region);
      } catch (error) {
        res.status(500).send(error.message);
      }
    }
}