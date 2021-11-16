const db = require('../service/connect');

module.exports = {
    getList: (lang, limit="8",start="0", publier = "1") => {
        return new Promise((resolve, reject) => {
                db.query(`
                SELECT 
                id_technique, nom_`+lang+`, materiel_`+lang+`, couverture, publier
                FROM technique 
                WHERE publier = ?
                LIMIT ?, ?
                `,[
                    parseInt(publier), parseInt(start), parseInt(parseInt(limit) + parseInt(start))
                    ],function(err, resultats){
                    if(err) reject(new Error("Erreur ressource list technique"));
                    resolve(resultats);
                })
        })
    },

    getTechnique: (lang, id, nom_technique_fr = null) => {
        console.log('nom_technique_fr:', nom_technique_fr)
        return new Promise((resolve, reject) => {
            let critere_nom = nom_technique_fr ? "OR nom_fr = '"+nom_technique_fr+"'":"";
            console.log('critere_nom:', critere_nom)
            db.query(`
            SELECT 
            id_technique, nom_`+lang+`,description_`+lang+`,info_`+lang+`,productivite_`+lang+`,adaptation_`+lang+`,mitigation_`+lang+`,materiel_`+lang+`,source ,couverture
            FROM technique
            WHERE id_technique = ?
            `+critere_nom,[id] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource get technique"));
              resolve(resultat);
            })
        })
    },

    getEtape: (lang, id) => {
        return new Promise((resolve, reject) => {
            db.query(`
            SELECT 
            id_etape, numero, nom_`+lang+`,description_`+lang+`,image
            FROM etape
            WHERE id_technique = ?
            `,[id] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource get etape"));
              resolve(resultat);
            })
        })
    },

    getClimat: (lang, id) => {
        return new Promise((resolve, reject) => {
            db.query(`
            SELECT 
            cli.id_climat, cli.groupe, cli.nom_`+lang+` ,cli.image
            FROM technique tech
            INNER JOIN climat_technique cli_tech ON tech.id_technique = cli_tech.id_technique
            INNER JOIN climat cli ON cli.id_climat = cli_tech.id_climat 
            WHERE tech.id_technique = ?
            `,[id] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource get etape"));
              resolve(resultat);
            })
        })
    },

    getPlante: (lang, id) => {
        return new Promise((resolve, reject) => {
            db.query(`
            SELECT 
            pl.id_plante, pl.nom_`+lang+`,pl.nom_scientifique,pl.regne ,im.path 
            FROM technique tech
            INNER JOIN technique_plante tech_pl ON tech_pl.id_technique = tech.id_technique
            INNER JOIN plante pl ON pl.id_plante = tech_pl.id_plante
            INNER JOIN image im ON pl.id_plante = im.id_plante
            WHERE tech.id_technique = ?
            GROUP BY (pl.id_plante)
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
            reg.id_region, reg.nom ,reg.couverture
            FROM technique tech
            INNER JOIN technique_region tech_reg ON tech_reg.id_technique = tech.id_technique 
            INNER JOIN region reg ON reg.id_region = tech_reg.id_region
            WHERE tech.id_technique = ?
            `,[id] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource get etape"));
              resolve(resultat);
            })
        })
    },
    getSearch: (lang, query) => {
        return new Promise((resolve, reject) => {
            db.query(`
            SELECT id_technique, nom_`+lang+`,info_`+lang+`,couverture 
            FROM technique
            WHERE nom_fr LIKE '%`+query+`%' 
            OR nom_mg LIKE '%`+query+`%' 
            OR info_mg LIKE '%`+query+`%' 
            OR info_fr LIKE '%`+query+`%' 
            ORDER BY nom_`+lang+`
            `, function(err, resultat){
              if(err) reject(new Error("Erreur ressource get Search Technique"));
              resolve(resultat);
            })
        })
    }, 

    modification_status_publication: (id, new_status) => {
        return new Promise((resolve, reject) => {
            db.query(`
            UPDATE technique set publier = ? where id_technique = ?
            `,[parseInt(new_status), parseInt(id)] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource get etape"));
              resolve("Succée mise à jour");
            })
        })
    },

    insertionEtape: (numero, nom_mg, nom_fr, description_mg, description_fr, image, id_technique) => {
        return new Promise((resolve, reject) => {
            db.query(`
            INSERT INTO etape(numero, nom_mg, nom_fr, description_mg, description_fr, image, id_technique) values(?,?,?,?,?,?,?)
            `,[parseInt(numero), nom_mg, nom_fr, description_mg, description_fr, image, parseInt(id_technique)] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource get etape"));
              resolve("Succée insertion étape");
            })
        })
    },

    insertionTechnique: (nom_mg, nom_fr, description_mg, description_fr, info_mg, info_fr, productivite_fr, productivite_mg, adaptation_fr, adaptation_mg, mitigation_fr, mitigation_mg, materiel_mg, materiel_fr, source, couverture, publier = 0) => {
        console.log(nom_mg, nom_fr, description_mg, description_fr, info_mg, info_fr, productivite_fr, productivite_mg, adaptation_fr, adaptation_mg, mitigation_fr, mitigation_mg, materiel_mg, materiel_fr, source, couverture);
        return new Promise((resolve, reject) => {
            db.query(`
            INSERT INTO technique(nom_mg, nom_fr, description_mg, description_fr, info_mg, info_fr, productivite_fr, productivite_mg, adaptation_fr, adaptation_mg, mitigation_fr, mitigation_mg, materiel_mg, materiel_fr, source, couverture, publier) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
            `,[nom_mg, nom_fr, description_mg, description_fr, info_mg, info_fr, productivite_fr, productivite_mg, adaptation_fr, adaptation_mg, mitigation_fr, mitigation_mg, materiel_mg, materiel_fr, source, couverture, publier] , function(err, resultat){
              if(err) reject(new Error("Erreur insertion technique"));
              resolve("Succée insertion technique");
            })
        })
    },

}
