'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const propietarioSchema = Schema({
    email:{type: String, unique: true, lowercase:true},
    pass:{type:String, select:false},
    nombre:String,
    apellidos:String,
    empresa:String,
    nif:String,
    cif:String,
    direccion:String,
    numero:Number,
    puerta:String,
    piso:String,
    escalera:String,
    provincia:String,
    cp:Number,
    telefono1:Number,
    foto_dni:String,
    iban:String,
    confirmado:Boolean,
    oculto:Boolean,
    nacionalidad:String,
    fecha_nacimiento:Date,
});

propietarioSchema.pre('save', function(next){
    let user = this;
    if(!user.isModified('pass')) return next();
  
    bcrypt.genSalt(10, (err, salt)=>{
      if(err) return next();
  
      bcrypt.hash(user.pass, salt, null, (err, hash) => {
        if (err) return next(err);
  
        user.pass=hash;
        next();
      })
    })
  })

module.exports=mongoose.model('Propietario', propietarioSchema);