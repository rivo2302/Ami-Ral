const bcrypt = require("bcrypt");
const db = require("../service/connect");
const service = require("../service/service");
const saltRounds = 10;

module.exports = {
  index: function (req, res) {
    res.send();
  },

  register: function (req, res) {
    var donnee = req.body;
    var email = donnee.email,
      mdp1 = donnee.password,
      mdp2 = donnee.new_password,
      nom = donnee.nom,
      prenom = donnee.prenom,
      appelation = donnee.appelation, droit = donnee.droit;
    service.inscrire(email, mdp1, mdp2, db).then(function (verification) {
      if (verification != true) {
        res.status(403).send(verification);
      } else {
        bcrypt.hash(mdp1, saltRounds, function (err, hash) {
          if (err) throw err;
          db.query(
            "INSERT INTO user(email, password, nom, prenom, appelation, droit) VALUES(?,?,?,?,?,?)",
            [email, hash, nom, prenom, appelation, droit],
            function (err, resultat) {
              if (err) return res.status(500).send("Erreur: ressource");
              service.return_user_email(email, db).then(function (resultat) {
                if (resultat == "Vérifier votre adresse email") {
                  res.status(403).send(resultat);
                } else {
                  const token = service.generer_token(resultat[0].id, email);
                  res.send({
                    id: resultat[0].id,
                    token: token,
                    nom: resultat[0].nom,
                    prenom: resultat[0].prenom,
                    appelation: resultat[0].appelation,
                  });
                }
              });
            }
          );
        });
      }
    });
  },

  login: function (req, res) {
    var email = req.body.email,
      mdp = req.body.password;
    if (email && mdp) {
      service.return_user_email(email, db).then(function (resultat) {
        if (resultat == "Vérifier votre adresse email") {
          res.status(403).send(resultat);
        } else {
          bcrypt.compare(mdp, resultat[0].password, function (err, result) {
            if (err) throw err;
            if (result === true) {
              const token = service.generer_token(resultat[0].id, email);
              res.send({
                id: resultat[0].id,
                token: token,
                nom: resultat[0].nom,
                prenom: resultat[0].prenom,
                appelation: resultat[0].appelation,
              });
            } else {
              res.status(403).send("Vérifier votre mot de passe");
            }
          });
        }
      });
    } else {
      res.send("Aucun adresse email");
    }
  },

  update: function (req, res) {
    var id = req.body.id,
      email = req.body.email,
      nom = req.body.nom,
      prenom = req.body.prenom,
      appelation = req.body.appelation;
    service.verifier_exist_user(id, db).then(function (user) {
      if (user && email) {
        service
          .mail_utiliser_autre_user(email, id, db)
          .then(function (verification) {
            if (verification === false) {
              db.query(
                "UPDATE user set email = ?, nom = ?, prenom = ?, appelation = ? WHERE id =?",
                [email, nom, prenom, appelation, id],
                function (err) {
                  if (err) return res.status(500).send({ error: "Ressource" });
                  res.send({ success: true });
                }
              );
            } else {
              res.status(403).send({ error: verification });
            }
          });
      } else {
        res.status(403).send({ error: "Utilisateur introuvable" });
      }
    });
  },

  delete: function (req, res) {
    if (req.body.id) {
      db.query("DELETE FROM user WHERE id = ? ", [req.body.id], function (err) {
        if (err) return res.status(500).send({ error: "Ressource" });
        res.send({ success: true });
      });
    } else {
      res.status(403).send({ error: "Données insuffisante" });
    }
  },

  show: function (req, res) {
    if (req.params.id) {
      db.query(
        "SELECT id, email, nom, prenom, appelation, droit FROM user WHERE id = ? ",
        [req.params.id],
        function (err, resultat) {
          if (err) return res.status(500).send({ error: "Ressource" });
          res.send({ success: resultat[0] });
        }
      );
    } else {
      res.status(403).send({ error: "Données insuffisante" });
    }
  },

};
