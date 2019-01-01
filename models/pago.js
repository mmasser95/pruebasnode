'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pagoSchema=Schema({
    inquilinoId:{type:Schema.Types.ObjectId, ref:'Inquilino'},
    reservaId:{type:Schema.Types.ObjectId, ref:'Reserva'},
    fecha_pago:Date,
    metodo_pago:String,
    importe:Schema.Types.Decimal128,
    estado:Number
});

module.exports=mongoose.model('Pago', pagoSchema);