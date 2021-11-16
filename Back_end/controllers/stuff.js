const eleve = require('../models/eleve');
const fs = require('fs');
const db = require('../service/connect');

module.exports = {

  test: async (req, res) => {
    let listEleve = await eleve.getListEleve();
    res.send(listEleve[0].nom);
  } 

}