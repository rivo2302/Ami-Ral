const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const SECRET = "mykey";

module.exports = {
    envoyer_mail: function (email, objet, contenu) {
        return new Promise((resolve, reject) => {
            var monMail = process.env.APP_EMAIL;
            var transporter = nodemailer.createTransport({
              host: "mail50.lwspanel.com",
              port: 465,
              secure: true,
              auth: {
                user: monMail,
                pass: process.env.APP_PASSWORD_EMAIL,
              },
            });
    
            var mailOptions = {
                from: monMail,
                to: email,
                subject: objet,
                html: contenu,
            };
    
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    reject(new Error("Erreur envoie email : " + error));
                } else {
                    resolve("Email envoyer");
                }
            });
        })
    },

    inscrire: function (email, mdp1, mdp2, db) {
        return new Promise(function (resolve) {
          if (email) {
            db.query(
              "SELECT email FROM user WHERE email = ?",
              [email],
              function (err, resultats) {
                if (err) throw "Erreur: ressource";
                if (resultats.length) {
                  resolve("Adresse email déjà utilisé");
                } else {
                  if (mdp1 == mdp2) {
                    resolve(true);
                  } else {
                    resolve("Confirmation mot de passe incorrecte");
                  }
                }
              }
            );
          } else {
            resolve("Aucun adresse email");
          }
        });
      },

      return_user_email: function (email, db) {
        return new Promise(function (resolve) {
          db.query(
            "SELECT * FROM user where email = ?",
            [email],
            function (err, resultat) {
              if (err) throw "Erreur: ressource";
              if (resultat.length == 1) {
                resolve(resultat);
              } else {
                resolve("Vérifier votre adresse email");
              }
            }
          );
        });
      },

      generer_token: function (id, email) {
        const token = jwt.sign(
          {
            id: id,
            email: email,
          },
          SECRET,
          { expiresIn: "2d" }
        );
        return token;
      },

      uploadFile: function (chemin, fichier, add_name) {
        return new Promise(function(resolve, reject){
          let uploadPath,
          current_time = new Date().getTime(),
          nom_img;
    
          if (!fichier) {
            console.log("No files were uploaded");
            reject(new Error("No files were uploaded."));
          }
      
          let fichier_name = fichier.name.split(".");
          let ext = fichier_name[fichier_name.length - 1];
          nom_img = "Tanimboly_" + add_name + "_" + current_time + "." + ext;
          uploadPath = chemin + nom_img;
          // Use the mv() method to place the file somewhere on your server
      
          fichier.mv(uploadPath, function (err) {
            if (err) reject(new Error(err));
            resolve(uploadPath);
          });
        }) 
      },
}