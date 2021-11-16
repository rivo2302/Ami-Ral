const db = require('../service/connect');

module.exports = {

    insertionRelation: (nom_colonne1, nom_colonne2, valeur_colonne1, valeur_colonne2, nom_table) => {
        return new Promise((resolve, reject) => {
            db.query(`
            INSERT INTO `+nom_table+`(`+nom_colonne1+`, `+nom_colonne2+`) values(?,?)
            `,[parseInt(valeur_colonne1) ? parseInt(valeur_colonne1) : valeur_colonne1, parseInt(valeur_colonne2) ? parseInt(valeur_colonne2) : valeur_colonne2] , function(err, resultat){
              if(err) reject(new Error("Erreur insertion relation "+ nom_table));
              resolve("Succée insertion relation " + nom_table);
            })
        })
    },

}


    