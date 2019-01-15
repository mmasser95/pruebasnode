'use strict'
const Pago = require('../models/pago');

function getPagos(req, res) {
    console.log('GET /api/pago');
    Pago.find({}, (err, pagos) => {
        if (err) return res.status(500).send({message:`Error al realizar la peticion ${err}`});
        if (!pagos) return res.status(404).send({message:`No se han encontrado pagos`});
        res.status(200).send({pagos});
    });
}

function getPago(req, res) {
    let pagoId = req.params.pagoId;
    console.log(`GET /api/pago/${pagoId}`);
    Pago.findById(pagoId, (err, pago) => {
        if (err) return res.status(500).send({message:`Error al realizar la peticion ${err}`});
        if (!pago) return res.status(404).send({message:`No se ha encontrado el pago`});
        res.status(200).send(pago);
    });
}

function postPago(req, res){
    console.log('POST /api/pago');
    console.log(req.body);
    let pago = new Pago();
    pago.inquilinoId=req.body.inquilinoId
    pago.reservaId=req.body.reservaId
    pago.fecha_pago=req.body.fecha_pago
    pago.metodo_pago=req.body.metodo_pago
    pago.importe=req.body.importe
    pago.estado=req.body.estado

    pago.save((err, pagosaved) => {
        if (err) res.status(500).send({message:`Error al guardar ${err}`});
        res.status(200).send({message:`Se ha guardado el pago: `, pagosaved});
    });
}

function putPago(req, res) {
    let pagoId=req.params.pagoId;
    let update=req.body;
    console.log(`PUT /api/pago/${pagoId}`);
    console.log(update);
    
    Pago.findByIdAndUpdate(pagoId, update, (err, pagoupdated) => {
        if (err) return res.status(500).send({message:`Error al actualizar ${err}`});
        res.status(200).send({message:`Pago actualizado`, pagoupdated});
    });
}

function deletePago(req,res){
    let pagoId = req.params.pagoId;
    console.log(`DELETE /api/pago/${pagoId}`);
    
    Pago.findById(pagoId, (err, pago) => {
        if (err) return res.status(500).send({message:`Error al borrar ${err}`});

        pago.remove((err) => {
            if (err) return res.status(500).send({message:`Error al borrar ${err}`});
            res.status(200).send({message:'Se ha borrado correctamente!'});
        })
    });
}

module.exports={
    getPagos,
    getPago,
    postPago,
    putPago,
    deletePago
}