'use strict'
const mongoose = require('mongoose');;

const Schema = mongoose.Schema;
const reservaSchema=Schema({
    inmuebleId:{type:Schema.Types.ObjectId, ref:'Inmueble'},
    fecha_entrada:Date,
    fecha_salida:Date,
    duracion_contrato:Number,
    importe_reserva:Schema.Types.Decimal128,
    fianza:Schema.Types.Decimal128,
    renta:Schema.Types.Decimal128,
    estado:Number,
    motivo_cancelacion:String,
    metodo_pago:String,
    pagoId:{type:Schema.Types.ObjectId, ref:'Pago'},
    fecha_pago:Date,
    inquilinoId:{type:Schema.Types.ObjectId, ref:'Inquilino'},
    tipo:String
});

module.exports=mongoose.model('Reserva',reservaSchema);