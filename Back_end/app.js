const express = require('express');
//On crée l'application express
const app = express();
const fileUpload = require("express-fileupload");

app.use((req, res, next) => {
  //d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;
  res.setHeader('Access-Control-Allow-Origin', '*');
  //d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  //d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//body-parser analyse le corps de la demande
app.use(fileUpload());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

const testRoutes = require('./routes/test');
app.use('/api/', testRoutes);

const techniqueRoutes = require('./routes/technique');
app.use('/technique/', techniqueRoutes);

const planteRoutes = require('./routes/plante');
app.use('/plante/', planteRoutes);

const fonctionnaliteRoutes = require('./routes/fonctionnalite');
app.use('/div/', fonctionnaliteRoutes);

const climatRoutes = require('./routes/climat');
app.use('/climat/', climatRoutes);

const regionRoutes = require('./routes/region');
app.use('/region/', regionRoutes);

const userRoutes = require('./routes/user');
app.use('/user/', userRoutes);

module.exports = app;
