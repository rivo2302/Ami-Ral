const technique = require('../models/fonctionnalite');
const fs = require('fs');
const region = require('../models/region')
const climat = require('../models/climat')
const plante = require('../models/plante')
const techniqu = require('../models/technique')

const service = require("../service/service");

module.exports = {

    nous_contacter: async(req, res) => {
        let nom = req.body.nom, prenom = req.body.prenom, objet = req.body.objet, email = req.body.email, telephone = req.body.telephone, message = req.body.message;
        let contenu_client =
        "Bonjour " +
        nom + " " + prenom+
        ";<br><br>Tanimboly a bien reçu votre message.<br>Ci-dessous le contenu de celle-ci : <br><br><br>Objet: " +
        objet +
        "<br><br>Message : <br><br>" +
        message +
        "<br><br><br> Cordialement<br><br>Tanimboly<br>contact@tanimboly.org";
        var contenu_tanimboly =
        "Bonjour<br><br>Un nouveau prospect vient de nous contacter: <br><br><br>Objet: " +
        objet +
        "<br>Nom: " +
        nom +
        "<br>Prénom: " +
        prenom +
        "<br>Email: " +
        email +
        "<br>Téléphone: " +
        telephone +
        "<br><br>Message : <br><br>" +
        message +
        "<br><br><br>Cordialement<br><br>Support Tanimboly";
        try {
            let envoie_client = await service.envoyer_mail(email, objet, contenu_client);
            let envoie_tanimboly = await service.envoyer_mail("manambintsoa.mihaingoherilanto@esti.mg",objet, contenu_tanimboly);
            res.send(envoie_tanimboly);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    getTout: async (req, res) => {
        let langage = req.body.langage ? req.body.langage : req.params.langage ? req.params.langage : "fr";
        let query = req.body.query ? req.body.query : req.query.query ? req.query.query : null;
        try {
          let plantes = await plante.getSearch(langage,query)
          let regions = await region.getSearch(langage,query)
          let techniques = await techniqu.getSearch(langage,query)
          let climats = await climat.getSearch(langage,query)
            res.send({plantes,regions,techniques,climats});

        } catch (error) {
          res.status(500).send(error.message);
        }
      },

}