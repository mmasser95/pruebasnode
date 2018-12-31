'use strict'
const Propietario = require('../models/propietario');
const services = require('../services')

function getPropietarios(req,res) {
    console.log('GET /api/propietaro');
    Propietario.find({}, (err, propietarios) => {
        if (err) return res.status(500).send({message:`Error al realizar la peticion ${err}`});
        if (!propietarios) return res.status(404).send({message:`No se han encontrado propietarios`});
        res.status(200).send({propietarios})
    });
};

function getPropietario(req,res){
    let propietarioId=req.params.propietarioId;
    console.log(`GET /api/propietario/${propietarioId}`);
    Propietario.findById(propietarioId, (err, propietario) => {
        if (err) return res.status(500).send({message:`Error al realizar la peticion ${err}`});
        if (!propietario) return res.status(404).send({message:`No se ha encontrado el propietario`});
        res.status(200).send(propietario)
    })
}

function postPropietario(req,res){
    console.log('POST /api/propietario');
    console.log(req.body);
    let propietario = new Propietario({
        email:req.body.email,
        nombre:req.body.nombre,
        apellidos:req.body.apellidos,
        empresa:req.body.empresa,
        nif:req.body.nif,
        cif:req.body.cif,
        direccion:req.body.direccion,
        numero:req.body.numero,
        puerta:req.body.puerta,
        piso:req.body.piso,
        escalera:req.body.escalera,
        provincia:req.body.provincia,
        cp:req.body.cp,
        telefono1:req.body.telefono1,
        foto_dni:req.body.foto_dni,
        iban:req.body.iban,
        confirmado:req.body.confirmado,
        oculto:req.body.oculto,
        nacionalidad:req.body.nacionalidad,
        fecha_nacimiento:req.body.fecha_nacimiento
    });

    propietario.save((err, propietariosaved) => {
        if (err) res.status(500).send({message:`Error al guardar ${err}`});
        res.status(200).send({message:"Se ha guardado el propietario", propietariosaved})
    })

}

function putPropietario(req,res) {
    let propietarioId=req.params.propietarioId;
    let update = req.body;
    console.log(`PUT /api/inquilino/${propietarioId}`);
    console.log(update);

    Propietario.findByIdAndUpdate(propietarioId, update, (err, propietarioupdated) => {
        if (err) return res.status(500).send({message:`Error al actualizar ${err}`});
        res.status(200).send({message:"Se ha actualizado el propietario", propietarioupdated})
    })

}

function deletePropietario(req,res) {
    let propietarioId = req.params.propietarioId;
    console.log(`DELETE /api/propietario/${propietarioId}`);
    
    Propietario.findById(propietarioId, (err, propietario) => {
        if (err) return res.status(500).send({message:`Error al borrar ${err}`});

        propietario.remove((err) => {
            if (err) return res.status(500).send({message:`Error al borrar ${err}`});

            res.status(200).send({message:"Se ha borrado correctamente!"})
        })
    })
}

module.exports={
    getPropietario,
    getPropietarios,
    postPropietario,
    putPropietario,
    deletePropietario
}