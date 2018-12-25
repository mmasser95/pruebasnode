'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');


mongoose.connect(config.db, (err, res)=>{
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`);;
  }
  console.log("Conexión OK");

  app.listen(config.port, ()=>{
    console.log(`Node funcionando en http://localhost:${config.port}`);
  });
});
