'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pisoSchema = Schema({
  direccion:String,
  renta:Number,
  tipo:{ type: String, enum: ['Piso', 'Adosado']},
  descripcion:String
});

module.exports=mongoose.model('Piso', pisoSchema);
