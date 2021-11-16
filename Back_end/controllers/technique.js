const technique = require('../models/technique');
const fonctionnalite = require('../models/fonctionnalite');
const service = require('../service/service');

module.exports = {

    list: async (req, res) => {
      let langage = req.body.langage ? req.body.langage : req.params.langage ? req.params.langage : "fr";
      let nbr_list = req.body.nbr_list ? req.body.nbr_list : req.params.nbr_list ? req.params.nbr_list : "8";
      let start = req.body.start ? req.body.start : req.params.start ? req.params.start : "0";
      let publier = req.body.publier ? req.body.publier : req.params.publier ? req.params.publier : "1";
      try {
          let resultat_list = await technique.getList(langage, nbr_list, start,publier);
          if(req.params.non_publier){
            let resultat_list_non_publier = await technique.getList(langage, nbr_list, start,0);
            let resultats = [...resultat_list, ...resultat_list_non_publier ];
            res.send(resultats);
          }
          else{
            res.send(resultat_list);
          }
      } catch (error) {
          res.status(500).send(error.message);
      }
    },

    getDetails: async (req, res) => {
      let langage = req.body.langage ? req.body.langage : req.params.langage ? req.params.langage : "fr";
      let id = req.params.id_technique ? parseInt(req.params.id_technique) : 0 ;
      try {
        let tech = await technique.getTechnique(langage, id);
        if(tech){
          let etapes = await technique.getEtape(langage, id);
          let climats = await technique.getClimat(langage, id);
          let plantes = await technique.getPlante(langage, id);
          let regions = await technique.getRegion(langage, id);
          res.send({techique:tech, etapes, climats, plantes, regions});
        }
        else{
          res.send([]);
        }
      } catch (error) {
        res.status(500).send(error.message);
      }
    },

    getSearch :async(req,res)=> {
        let langage = req.body.langage ? req.body.langage : req.params.langage ? req.params.langage : "fr";
        let query = req.body.query ? req.body.query : req.query.query ? req.query.query : null;
        try {
            let techniques = await technique.getSearch(langage, query);
            let plantes = [];
            let regions = []
            let climats = [];
            
            res.send({plantes,regions,techniques,climats});
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    modification_status_publication: async(req, res) => {
      let new_status_publier = req.body.new_status_publier, id_technique = req.body.id_technique;
      try {
        let resultat_publier = await technique.modification_status_publication(id_technique, new_status_publier);
        res.send(resultat_publier);
      } catch (error) {
        res.status(500).send(error.message);
      }
    },

    insertionEtape: async(req, res) => {
      console.log("INSERT TECH");
      let donnee = req.body;
      let numero = donnee.numero , nom_mg = donnee.nom_mg , nom_fr = donnee.nom_fr , description_mg = donnee.description_mg , description_fr = donnee.description_fr , id_technique = donnee.id_technique;
      try {
        let image = await service.uploadFile("public/image/", req.files.image, Math.floor(Math.random() * 11))
        let resultat_insertion = await technique.insertionEtape(numero, nom_mg, nom_fr, description_mg, description_fr, image, id_technique);
        res.send(resultat_insertion);
      } catch (error) {
        res.status(500).send(error.message);
      }
    },

    insertionTechnique: async(req, res) => {
      let donnee = req.body;
      let nom_mg = donnee.nom_mg, nom_fr = donnee.nom_fr , description_mg = donnee.description_mg , description_fr = donnee.description_fr , info_mg = donnee.info_mg , info_fr = donnee.info_fr , productivite_fr = donnee.productivite_fr, productivite_mg = donnee.productivite_mg, adaptation_fr = donnee.adaptation_fr, adaptation_mg = donnee.adaptation_mg, mitigation_fr = donnee.mitigation_fr, mitigation_mg = donnee.mitigation_mg, materiel_mg = donnee.materiel_mg, materiel_fr = donnee.materiel_fr, source = donnee.source;
      try {
        let couverture = await service.uploadFile("public/image/", req.files.couverture, Math.floor(Math.random() * 11));
        let resultat_insertion = await technique.insertionTechnique(nom_mg, nom_fr, description_mg, description_fr, info_mg, info_fr, productivite_fr, productivite_mg, adaptation_fr, adaptation_mg, mitigation_fr, mitigation_mg, materiel_mg, materiel_fr, source, couverture);
        console.log(resultat_insertion);
        let donnee_new_technique = await technique.getTechnique("fr", 0, nom_fr);
        res.send(donnee_new_technique);

      } catch (error) {
        res.status(500).send(error.message);
      }
    },

    insertionRelation_plante_technique: async(req, res) => {
      let id_technique = req.body.id_technique, id_plante = req.body.id_plante;
      try {
        let insertion_plante_technique = await fonctionnalite.insertionRelation("id_technique", "id_plante", id_technique, id_plante, "technique_plante");
        res.send(insertion_plante_technique);
      } catch (error) {
        res.status(500).send(error.message);
      }
    },

    insertionRelation_climat_technique: async(req, res) => {
      let id_technique = req.body.id_technique, id_climat = req.body.id_climat;
      try {
        let insertion_climat_technique = await fonctionnalite.insertionRelation("id_technique", "id_climat", id_technique, id_climat, "climat_technique");
        res.send(insertion_climat_technique);
      } catch (error) {
        res.status(500).send(error.message);
      }
    },

    insertionRelation_region_technique: async(req, res) => {
      let id_region = req.body.id_region, id_technique = req.body.id_technique;
      try {
        let insertion_technique_region = await fonctionnalite.insertionRelation("id_region", "id_technique", id_region, id_technique, "technique_region");
        res.send(insertion_technique_region);
      } catch (error) {
        res.status(500).send(error.message);
      }
    }

}