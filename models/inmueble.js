'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inmbuebleSchema = Schema({
    direccion:String,
    numero:Number,
    piso:Number,
    puerta:String,
    cp:Number,
    bloque:String,
    escalera:String,
    poblacion:String,
    provincia:String,
    num_habitaciones:Number,
    num_banyos:Number,
    renta_gestion:Number,
    renta:Number,
    tipo:String,
    propietario:{type:Schema.Types.ObjectId, ref:'Propietario'},
    fianza:Schema.Types.Decimal128,
    metodo_pago:String,
    estancia_minima:Number,
    estancia_maxima:Number,
    reglas_propietario:String,
    perfil:String,
    idiomas:String,
    verificado:Boolean,
    caracteristicas:String,
    latitud:Schema.Types.Decimal128,
    longitud:Schema.Types.Decimal128,
    descripcion:String,
    visible:Boolean,
    multimedia:[{type:String}]
});

module.exports=mongoose.model('Inmueble', inmbuebleSchema);