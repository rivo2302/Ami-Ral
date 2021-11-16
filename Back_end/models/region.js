const db = require('../service/connect');

module.exports = {
    getList: (lang, limit = null) => {
        return new Promise((resolve, reject) => {
            let critere_limit = limit ? "LIMIT "+limit : "";
            db.query(`
            SELECT 
            id_region,nom, type_sol_`+lang+` , path
            FROM region
             `+critere_limit, function(err, resultats){
              if(err) reject(new Error("Erreur ressource list technique"));
              resolve(resultats);
            })
        })
    },
    getRegion: (lang, id, nom = null) => {
        return new Promise((resolve, reject) => {
            let verif_nom = nom ? " OR nom = '"+nom+"'":"";
            db.query(`
            SELECT 
            id_region,nom,path, description_`+lang+`,type_sol_`+lang+`,structure_sol_`+lang+`,texture_sol_`+lang+` , couverture
            FROM region
            WHERE id_region = '`+id+`'
            `+verif_nom, function(err, resultat){
              if(err) reject(new Error("Erreur ressource get région"));
              resolve(resultat);
            })
        })
    },
    getClimat: (lang, id) => {
        return new Promise((resolve, reject) => {
            db.query(`
            SELECT 
            cli.id_climat, cli.groupe, cli.nom_`+lang+` ,cli.image
            FROM region reg
            INNER JOIN climat cli ON reg.id_climat = cli.id_climat
            WHERE reg.id_region = ?
            `,[id] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource get climat"));
              resolve(resultat);
            })
        })
    },

    getTechnique: (lang, id) => {
        return new Promise((resolve, reject) => {
            db.query(`
            SELECT 
            tech.id_technique, tech.nom_`+lang+`,tech.info_`+lang+`,tech.couverture
            FROM technique tech
            INNER JOIN technique_region tech_reg ON tech.id_technique = tech_reg.id_technique
            INNER JOIN region reg ON reg.id_region = tech_reg.id_region 
            WHERE reg.id_region = ?
            `,[id] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource get technique"));
              resolve(resultat);
            })
        })
    },
    getPlante: (lang, id) => {
        return new Promise((resolve, reject) => {
            db.query(`
            SELECT 
            pl.id_plante, pl.nom_`+lang+`,pl.nom_scientifique, image.path image
            FROM region reg
            INNER JOIN plante_region pl_reg ON pl_reg.id_region = reg.id_region 
            INNER JOIN plante pl ON pl.id_plante = pl_reg.id_plante
            LEFT JOIN image ON pl.id_plante = image.id_plante
            WHERE reg.id_region = ?  GROUP BY pl.id_plante
            `,[id] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource get plante"));
              resolve(resultat);
            })
        })
    },

    insertionRegion: (couverture, nom, desc_fr, desc_mg, type_sol_fr, type_sol_mg, struct_sol_fr, struct_sol_mg, texture_sol_fr, texture_sol_mg, id_climat) => {
        return new Promise((resolve, reject) => {
            db.query(`
            INSERT INTO region(couverture, nom, description_mg, description_fr, type_sol_fr, type_sol_mg, structure_sol_mg, structure_sol_fr, texture_sol_mg, texture_sol_fr, id_climat) VALUES (?,?,?,?,?,?,?,?,?,?,?)
            `,[couverture, nom, desc_mg, desc_fr, type_sol_fr, type_sol_mg, struct_sol_mg, struct_sol_fr, texture_sol_mg, texture_sol_fr, id_climat], function(err, resultat){
              if(err) reject(new Error("Erreur ressource get plante"));
              resolve("Insertion success");
            })
        })
    },
    
    getSearch: (lang, query) => {
        return new Promise((resolve, reject) => {
            db.query(`
            SELECT id_region,nom, type_sol_`+lang+` ,couverture 
            FROM region
            WHERE nom LIKE '%`+query+`%' 
            OR type_sol_`+lang+`  LIKE '%`+query+`%' 
            ORDER BY nom
            `, function(err, resultat){
              if(err) reject(new Error("Erreur ressource get Search Region"));
              resolve(resultat);
            })
        })
    }, 
}