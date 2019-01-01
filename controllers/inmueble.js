'use strict'

const Inmueble = require('../models/inmueble');
const services = require('../services');

function getInmuebles(req,res) {
    console.log('GET /api/inmueble');
    Inmueble.find({}, (err, inmuebles) => {
        if (err) return res.status(500).send({message:`Error al realizar la peticion ${err}`});
        if (!inmuebles) return res.status(404).send({message:`No se han encontrado inmuebles`});
        res.status(200).send({inmuebles});
    })
}

function getInmueble(req,res) {
    let inmuebleId = req.params.inmuebleId;
    console.log(`GET /api/inmueble/${inmuebleId}`);
    Inmueble.findById(inmuebleId, (err, inmueble) => {
        if (err) return res.status(500).send({message:`Error al realizar la peticion ${err}`});
        if (!inmueble) return res.status(404).send({message:`No se ha encontrado el inmueble`});
        res.status(200).send(inmueble);
    })
}

function postInmueble(req,res) {
    console.log('POST /api/inmueble');
    let post=req.body;
    console.log(post);
    let inmueble = new Inmueble({
        direccion:post.direccion,
        numero:post.numero,
        piso:post.piso,
        puerta:post.puerta,
        cp:post.cp,
        bloque:post.bloque,
        escalera:post.escalera,
        poblacion:post.poblacion,
        provincia:post.provincia,
        num_habitaciones:post.num_habitaciones,
        num_banyos:post.num_banyos,
        renta_gestion:post.renta_gestion,
        renta:post.renta,
        tipo:post.tipo,
        propietario:post.propietario,
        fianza:post.fianza,
        metodo_pago:post.metodo_pago,
        estancia_minima:post.estancia_minima,
        estancia_maxima:post.estancia_maxima,
        reglas_propietario:post.reglas_propietario,
        perfil:post.perfil,
        idiomas:post.idiomas,
        verificado:post.verificado,
        caracteristicas:post.caracteristicas,
        latitud:post.latitud,
        longitud:post.longitud,
        descripcion:post.descripcion,
        visible:post.visible,
        multimedia:post.multimedia
    });

    inmueble.save((err,inmueblesaved) => {
        if (err) res.status(500).send({message:`Error al guardar ${err}`});
        res.status(200).send({message:`Se ha guardado el propietario`, inmueblesaved})
    });
}

function putInmueble(req,res) {
    let inmuebleId=req.params.inmuebleId;
    let update = req.body;
    console.log(`PUT /api/inmueble/${inmuebleId}`);
    console.log(update);
    
    Inmueble.findByIdAndUpdate(inmuebleId, update, (err, inmuebleUpdated) => {
        if (err) return res.status(500).send({message:`Error al actualizar ${err}`});
        res.status(200).send({message:'Inmueble actualizado', inmuebleUpdated})
    })
}

function deleteInmueble(req,res) {
    let inmuebleId=req.params.inmuebleId;
    console.log(`DELETE /api/inmueble/${inmuebleId}`);
    
    Inmueble.findById(inmuebleId, (err, inmueble) => {
        if (err) return res.status(500).send({message:`Error al borrar ${err}`});

        inmueble.remove((err) => {
            if (err) return res.status(500).send({message:`Error al borrar ${err}`});
            res.status(200).send({message:`Se ha borrado correctamente!`});
        })
    })
}

module.exports = {
    getInmueble,
    getInmuebles,
    postInmueble,
    putInmueble,
    deleteInmueble
}