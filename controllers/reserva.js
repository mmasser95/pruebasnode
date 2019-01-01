'use strict'

const Reserva = require('../models/reserva');

function getReservas(req,res) {
    console.log('GET /api/reserva');
    Reserva.find({}, (err, reservas) => {
        if (err) return res.status(500).send({message:`Error al realizar la peticion ${err}`});
        if (!reservas) return res.status(404).send({message:`No se han encontrado reservas`});
        res.status(200).send({reservas});
    })
}

function getReserva(req,res) {
    let reservaId=req.params.reservaId
    console.log(`GET /api/reserva/${reservaId}`);
    Reserva.findById(reservaId, (err, reserva) => {
        if (err) return res.status(500).send({message:`Error al realizar la peticion ${err}`});
        if (!reserva) return res.status(404).send({message:`No se han encontrado reserva`});
        res.status(200).send(reserva);
    })    
}

function postReserva(req,res) {
    console.log('POST /api/reserva');
    let post = req.body;
    console.log(post);
    let reserva = new Reserva({
        inmuebleId:post.inmuebleId,
        fecha_entrada:post.fecha_entrada,
        fecha_salida:post.fecha_salida,
        duracion_contrato:post.duracion_contrato,
        importe_reserva:post.importe_reserva,
        fianza:post.fianza,
        renta:post.renta,
        estado:post.estado,
        motivo_cancelacion:post.motivo_cancelacion,
        metodo_pago:post.metodo_pago,
        pagoId:post.pagoId,
        fecha_pago:post.fecha_pago,
        inquilinoId:post.inquilinoId,
        tipo:post.tipo
    })
    
    reserva.save((err, reservasaved) => {
        if (err) res.status(500).send({message:`Error al guardar ${err}`});
        res.status(200).send({message:`Se ha guardado la reserva`, reservasaved})
    })
}

function putReserva(req,res){
    let reservaId=req.params.reservaId;
    let update = req.body;
    console.log(`PUT /api/reserva/${reservaId}`);
    console.log(update);
    Reserva.findByIdAndUpdate(reservaId, update, (err, reservaupdated) => {
        if (err) return res.status(500).send({message:`Error al actualizar ${err}`});
        res.status(200).send({message:'Reserva actualizada', reservaupdated})
    })
}

function deleteReserva(req,res) {
    let reservaId=req.params.reservaId;
    console.log(`DELETE /api/reserva/${reservaId}`);

    Reserva.findById(reservaId, (err, reserva) => {
        if (err) return res.status(500).send({message:`Error al borrar ${err}`});
        reserva.remove((err) => {
            if (err) return res.status(500).send({message:`Error al borrar ${err}`});
            res.status(200).send({message:`Se ha borrado correctamente!`});
        })
    })
}

module.exports={
    getReserva,
    getReservas,
    postReserva,
    putReserva,
    deleteReserva
}