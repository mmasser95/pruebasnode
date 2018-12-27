'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const inquilinoSchema = Schema({
    email:{type:String, unique:true, lowercase:true},
    pass:{type:String, select:false},
    nombre:String,
    apellidos:String,
    nif:String,
    direccion:String,
    poblacion:String,
    provincia:String,
    cp:Number,
    telefono1:Number,
    telefono2:Number,
    estudios:String,
    fecha_nacimiento:Date,
    nacionalidad:String,
    como_nos_conocio:String,
    descripcion:String,
    foto_dni:String,
    oculto:Boolean,
    motivo_baja:String,
    confirmado:Boolean
});

inquilinoSchema.pre('save', function(next){
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
module.exports=mongoose.model('Inquilino', inquilinoSchema);