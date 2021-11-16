const climat = require('../models/climat');

module.exports = {

    list: async (req, res) => {
        let langage = req.body.langage ? req.body.langage : req.params.langage ? req.params.langage : "fr";
        let nbr_list = req.body.nbr_list ? req.body.nbr_list : req.params.nbr_list ? req.params.nbr_list : null;
        try {
            let resultat_list = await climat.getList(langage, nbr_list);
            res.send(resultat_list);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    getDetails: async (req, res) => {
        let langage = req.body.langage ? req.body.langage : req.params.langage ? req.params.langage : "fr";
        let id = req.params.id_climat ? parseInt(req.params.id_climat) : 0 ;
        try {
          let cli = await climat.getClimat(langage, id);
          if(cli){
            let regions = await climat.getRegion(langage, id);
            let techniques = await climat.getTechnique(langage, id);
            res.send({climat:cli,regions, techniques});
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
        let groupe = donnee.groupe, nom_mg = donnee.nom_mg, nom_fr = donnee.nom_fr, precipitation = donnee.precipitation, vent = donnee.vent, nebulosite = donnee.nebulosite, lumiere =  donnee.lumiere, temperature = donnee.temperature, image =  donnee.image;
        try {
          let climat_exist = await climat.getClimat("fr", 0, nom_mg);
          if(!climat_exist){
            let insertion_climat = await climat.insertionClimat(groupe, nom_mg, nom_fr, precipitation, vent, nebulosite, lumiere, temperature, image);
            res.send("Insertion success")
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
          console.log(query);
          let climats = await climat.getSearch(langage, query);
          let techniques = [];
          let regions = []
          let plantes = [];
          
          res.send({plantes,regions,techniques,climats});
      } catch (error) {
          res.status(500).send(error.message);
      }
  },
}