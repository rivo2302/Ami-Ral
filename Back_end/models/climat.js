const db = require('../service/connect');

module.exports = {
    getList: (lang, limit = null) => {
        return new Promise((resolve, reject) => {
            let nom = "nom_"+lang;
            let critere_limit = limit ? "LIMIT "+limit : "";
            db.query(`
            SELECT 
            id_climat,`+nom+`, temperature, image, precipitation, vent 
            FROM climat
             `+critere_limit, function(err, resultats){
              if(err) reject(new Error("Erreur ressource list climat"));
              resolve(resultats);
            })
            
        })
    },

    getSearch: (lang, query) => {
        return new Promise((resolve, reject) => {
            db.query(`
            SELECT id_climat, nom_`+lang+`,image,temperature
            FROM climat 
            WHERE nom_mg LIKE '%`+query+`%' 
            OR nom_fr LIKE '%`+query+`%' 
            OR vent LIKE '%`+query+`%' 
            OR nebulosite LIKE '%`+query+`%' 
            OR lumiere LIKE '%`+query+`%' 
            ORDER BY nom_`+lang+`
            `, function(err, resultat){
              if(err) reject(new Error("Erreur ressource get Search Climat"));
              resolve(resultat);
            })
        })
    }, 
    
    getClimat: (lang, id, nom_mg = null) => {
        return new Promise((resolve, reject) => {
            let verif_nom = nom_mg ? " OR nom_mg = '"+nom_mg+"'":"";
            db.query(`
            SELECT 
            id_climat,nom_`+lang+`, temperature, image, precipitation, vent ,nebulosite, lumiere
            FROM climat
            WHERE id_climat = ?
            `+verif_nom,[id] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource get climat"));
              resolve(resultat[0]);
            })
        })
    },

    getRegion : (lang, id) => {
        return new Promise((resolve, reject) => {
            db.query(`
            SELECT 
            reg.id_region,reg.nom, reg.type_sol_`+lang+` 
            FROM region reg
            INNER JOIN climat cli ON cli.id_climat = reg.id_climat
            WHERE cli.id_climat = ?
            `,[id] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource get region"));
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
            INNER JOIN climat_technique cli_tech ON tech.id_technique = cli_tech.id_technique
            INNER JOIN climat cli ON cli.id_climat = cli_tech.id_climat 
            WHERE cli.id_climat = ?
            `,[id] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource get technique"));
              resolve(resultat);
            })
        })
    },

    insertionClimat: (groupe, nom_mg, nom_fr, precipitation, vent, nebulosite, lumiere, temperature, image) => {
        return new Promise((resolve, reject) => {
            db.query(`
            INSERT INTO climat(groupe, nom_mg, nom_fr,precipitation,vent, nebulosite, lumiere, temperature, image  ) VALUES (?,?,?,?,?,?,?,?,?)
            `,[groupe, nom_mg, nom_fr, precipitation, vent, nebulosite, lumiere, temperature, image], function(err, resultat){
              if(err) reject(new Error("Erreur ressource get plante"));
              resolve(resultat);
            })
        })
    }
}

 