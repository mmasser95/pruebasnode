'use strict'
const Inquilino = require('../models/inquilino');
const services = require('../services');

function getInquilinos(req,res) {
    console.log('GET/api/inquilino');
    Inquilino.find({}, (err, inquilinos) => {
        if (err) return res.status(500).send({message:`Error al realizar la peticion ${err}`});
        if (!inquilinos) return res.status(404).send({message:`No se han encontrado inquilinos`});
        res.status(200).send({inquilinos});
    });
}

function getInquilino(req,res) {
    let inquilinoId = req.params.inquilinoId;
    console.log(`GET /api/inquilino/${inquilinoId}`);
    Inquilino.findById(inquilinoId, (err, inquilino) => {
        if (err) return res.status(500).send({message:`Error al realizar la peticion ${err}`});
        if (!inquilino) return res.status(404).send({message:`No se ha encontrado el inquilino`});
        res.status(200).send(inquilino);
    });
}

function postInquilino(req,res) {
    console.log('POST /api/inquilino');
    console.log(req.body);
    let inquilino = new Inquilino();
    inquilino.email=req.body.email
    inquilino.nombre=req.body.nombre
    inquilino.apellidos=req.body.apellidos
    inquilino.nif=req.body.nif
    inquilino.direccion=req.body.direccion
    inquilino.poblacion=req.body.poblacion
    inquilino.provincia=req.body.provincia
    inquilino.cp=req.body.cp
    inquilino.telefono1=req.body.telefono1
    inquilino.telefono2=req.body.telefono2
    inquilino.estudios=req.body.estudios
    inquilino.fecha_nacimiento=req.body.fecha_nacimiento
    inquilino.nacionalidad=req.body.nacionalidad
    inquilino.como_nos_conocio=req.body.como_nos_conocio    
    inquilino.descripcion = req.body.descripcion
    inquilino.foto_dni = req.body.foto_dni
    inquilino.oculto = req.body.oculto
    inquilino.motivo_baja = req.body.motivo_baja
    inquilino.confirmado = req.body.confirmado
    inquilino.pass=req.body.pass

    inquilino.save((err, inquilinosaved) => {
        if (err) res.status(500).send({message:`Error al guardar ${err}`});
        res.status(200).send({message:`Se ha guardado el inquilino: `, inquilino:inquilinosaved});
    })
}

function putInquilino(req,res) {
    let inquilinoId=req.params.inquilinoId;
    let update = req.body
    console.log(`PUT /api/inquilino/${inquilinoId}`);
    console.log(update);

    Inquilino.findByIdAndUpdate(inquilinoId, update, (err, inquilinoUpdated) => {
        if (err) return res.status(500).send({message:`Error al actualizar ${err}`});
        res.status(200).send({message:`Inquilino actualizado`, inquilino: inquilinoUpdated});
    })
}

function deleteInquilino(req,res) {
    let inquilinoId = req.params.inquilinoId;
    console.log(`DELETE /api/inquilino/${inquilinoId}`);
    
    Inquilino.findById(inquilinoId, (err, inquilino) => {
        if (err) return res.status(500).send({message:`Error al borrar ${err}`});

        inquilino.remove((err) => {
            if (err) return res.status(500).send({message:`Error al borrar ${err}`});

            res.status(200).send({message:'Se ha borrado correctamente!'});
        })
    })
}

function signIn(){

}

module.exports={
    getInquilino,
    getInquilinos,
    postInquilino,
    putInquilino,
    deleteInquilino,
    signIn
};