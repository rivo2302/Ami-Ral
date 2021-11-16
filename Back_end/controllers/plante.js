const plante = require('../models/plante');
const service = require('../service/service');

module.exports = {

    list: async (req, res) => {
      let langage = req.body.langage ? req.body.langage : req.params.langage ? req.params.langage : "fr";
      let nbr_list = req.body.nbr_list ? req.body.nbr_list : req.params.nbr_list ? req.params.nbr_list : "8";
      let start = req.body.start ? req.body.start : req.params.start ? req.params.start : "0";
      try {
          let resultat_list = await plante.getList(langage, nbr_list,start);
          res.send(resultat_list);
      } catch (error) {
          res.status(500).send(error.message);
      }
    },

    getDetails: async (req, res) => {
        let langage = req.body.langage ? req.body.langage : req.params.langage ? req.params.langage : "fr";
        let id = req.params.id_plante ? parseInt(req.params.id_plante) : 0 ;
        try {
          let details_plante = await plante.getPlante(langage, id);
          if(details_plante){
            let images = await plante.getImage(langage, id);
            let pathologie = await plante.getPathologie(langage, id);
            let technique = await plante.getTechnique(langage, id);
            let region = await plante.getRegion(langage, id);
            res.send({plante:details_plante, images, pathologie, technique, region});
          }
          else{
            res.send([]);
          }
        } catch (error) {
          res.status(500).send(error.message);
        }
      },

      insertionImage: async (req, res) => {
        let donnee = req.body;
        let description_fr = donnee.description_fr, description_mg = donnee.description_mg, id_plante = donnee.id_plante;
        try {
            let path = await service.uploadFile("public/image/", req.files.image, Math.floor(Math.random() * 11))
            let insertion_image = await plante.insertionImage(path, description_mg, description_fr, id_plante);
            res.send(insertion_image);
        } catch (error) {
            res.status(500).send(error.message);
        }
      },
      
      getSearch :async(req,res)=> {
        let langage = req.body.langage ? req.body.langage : req.params.langage ? req.params.langage : "fr";
        let query = req.body.query ? req.body.query : req.query.query ? req.query.query : null;
        try {
            let plantes = await await plante.getSearch(langage, query);
            let techniques = [];
            let regions = []
            let climats = [];

            res.send({plantes,regions,techniques,climats});
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    insertionPlante: async(req, res) => {
      let donnee = req.body;
      let nom_mg = donnee.nom_mg, nom_fr = donnee.nom_fr, nom_scientifique = donnee.nom_scientifique, description_mg = donnee.description_mg, description_fr = donnee.description_fr, regne = donnee.regne, embranchement = donnee.embranchement, classe = donnee.classe, ordre = donnee.ordre, famille = donnee.famille, genre = donnee.genre, espece = donnee.espece, humidite = donnee.humidite, floraison = donnee.floraison, lumiere = donnee.lumiere, temperature = donnee.temperature;
      try {
        let resultat_insertion = await plante.insertionPlante(nom_mg, nom_fr, nom_scientifique, description_mg, description_fr, regne, embranchement, classe, ordre, famille, genre, espece, humidite, floraison, lumiere, temperature);
        res.send(resultat_insertion);
      } catch (error) {
        res.status(500).send(error.message);
      }
    }
}