const db = require('../service/connect');

module.exports = {
    getList: (lang, limit="8",start="0") => {
        return new Promise((resolve, reject) => {
            db.query(`
            SELECT 
            pl.id_plante,pl.nom_`+lang+`, pl.nom_scientifique, pl.regne, img.path path_image
            FROM plante pl
            LEFT JOIN image img ON img.id_plante = pl.id_plante  
            GROUP BY pl.id_plante 
            LIMIT ?, ?
             `,[parseInt(start), parseInt(parseInt(limit) + parseInt(start))], function(err, resultats){
              if(err) reject(new Error("Erreur ressource list plante"));
              resolve(resultats);
            })

        })
    },

    getPlante: (lang, id) => {
        return new Promise((resolve, reject) => {
            db.query(`
            SELECT 
            nom_scientifique, nom_`+lang+` ,description_`+lang+`,
            regne ,embranchement, classe , ordre ,famille ,
            genre, espece ,lumiere ,humidite, floraison , temperature
            FROM plante WHERE id_plante = ?
            `,[id], function(err, resultat){
              if(err) reject(new Error("Erreur ressource get plante"));
              resolve(resultat[0]);
            })
        })
    },

    getImage: (lang, id) => {
        return new Promise((resolve, reject) => {
            db.query(`
            SELECT 
            path, description_`+lang+`
            FROM image WHERE id_plante = ?
            `, [id], function(err, resultat){
              if(err) reject(new Error("Erreur ressource get Image"));
              resolve(resultat);
            })
        })
    },

    getPathologie: (lang, id) => {
        return new Promise((resolve, reject) => {
            db.query(`
            SELECT 
            pat.id_pathologie, pat.nom_`+lang+`, pat.description_`+lang+`, image 
            FROM plante pl
            INNER JOIN plante_pathologie pl_pat ON pl_pat.id_plante = pl.id_plante 
            INNER JOIN pathologie pat ON pat.id_pathologie = pl_pat.id_pathologie
            WHERE pl.id_plante = ?
            `,[id] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource get pathologie"));
              resolve(resultat);
            })
        })
    },

    getTechnique: (lang, id) => {
        return new Promise((resolve, reject) => {
            db.query(`
            SELECT 
            tech.id_technique, tech.nom_`+lang+`,tech.info_`+lang+` ,tech.couverture
            FROM technique tech
            INNER JOIN technique_plante tech_pl ON tech_pl.id_technique = tech.id_technique 
            INNER JOIN plante pl ON pl.id_plante = tech_pl.id_plante
            WHERE pl.id_plante = ?
            `,[id] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource get etape"));
              resolve(resultat);
            })
        })
    },

    getRegion: (lang, id) => {
        return new Promise((resolve, reject) => {
            db.query(`
            SELECT 
            reg.id_region, reg.path, reg.nom,reg.type_sol_`+lang+`,reg.couverture
            FROM region reg
            INNER JOIN plante_region pl_reg ON pl_reg.id_region = reg.id_region 
            INNER JOIN plante pl ON pl.id_plante = pl_reg.id_plante
            WHERE pl.id_plante = ?
            `,[id] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource get etape"));
              resolve(resultat);
            })
        })
    },

    insertionImage: (path, desc_mg, desc_fr, id_plante) => {
        return new Promise((resolve, reject) => {
            db.query(`
            INSERT INTO image(path, description_mg, description_fr, id_plante) VALUES(?,?,?,?)
            `,[path, desc_mg, desc_fr, id_plante] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource insertion image"));
              resolve("Success insertion");
            })
        })
    },
    
    getSearch: (lang, query) => {
        return new Promise((resolve, reject) => {
            db.query(`
            SELECT 
            pl.id_plante,pl.nom_`+lang+`, pl.nom_scientifique, pl.regne, img.path path_image
            FROM plante pl
            LEFT JOIN image img ON img.id_plante = pl.id_plante 
            WHERE pl.nom_mg LIKE '%`+query+`%' 
            OR pl.nom_fr LIKE '%`+query+`%' 
            OR pl.regne LIKE '%`+query+`%' 
            GROUP BY pl.id_plante 
            ORDER BY nom_`+lang+`
            `, function(err, resultat){
              if(err) reject(new Error("Erreur ressource get Search Plante"));
              resolve(resultat);
            })
        })
    },

    insertionPlante: (nom_mg, nom_fr, nom_scientifique, description_mg, description_fr, regne, embranchement, classe, ordre, famille, genre, espece, humidite, floraison, lumiere, temperature) => {
        return new Promise((resolve, reject) => {
            db.query(`
            INSERT INTO plante(nom_mg, nom_fr, nom_scientifique, description_mg, description_fr, regne, embranchement, classe, ordre, famille, genre, espece, humidite, floraison, lumiere, temperature) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
            `,[nom_mg, nom_fr, nom_scientifique, description_mg, description_fr, regne, embranchement, classe, ordre, famille, genre, espece, humidite, floraison, lumiere, temperature] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource insertion image"));
              resolve("Succée insertion");
            })
        })
    }

}