const Piso = require('../models/piso');

function getPisos(req, res) {
  console.log('GET /api/piso');
  Piso.find({}, (err, pisos)=>{
    if (err) return res.status(500).send({message : `Error al realizar la peticion ${err}`});
    if (!pisos) return res.status(404).send({message: `No se han encontrado pisos`});
    res.status(200).send({pisos});
  })
}

function getPiso(req, res) {
  let pisoId = req.params.pisoId
  Piso.findById(pisoId, (err, piso)=>{
    if (err) return res.status(500).send({message:`Error al realizar la peticion ${err}`});
    if (!piso) return res.status(404).send({message:`No se ha encontrado el piso`});

    res.status(200).send(piso);
  })
}

function postPiso(req, res) {
  console.log('POST /api/piso');
  console.log(req.body);

  let piso = new Piso();
  piso.direccion = req.body.direccion
  piso.renta = req.body.renta
  piso.tipo = req.body.tipo
  piso.descripcion = req.body.descripcion

  piso.save((err, pisoSaved)=>{
    if (err) res.status(500).send({message:`Error al guardar ${err}`});
    res.status(200).send({message:`Se ha guardado el piso: `, piso:pisoSaved});
  });
}

function putPiso(req, res) {
  console.log('PUT /api/piso');
  console.log(req.body);
  let pisoId = req.params.pisoId;

  let update = req.body;

  Piso.findByIdAndUpdate(pisoId, update, (err, pisoUpdated)=>{
    if (err) return res.status(500).send({message:`Error al actualizar ${err}`});
    res.status(200).send({message:`Piso actualizado`, piso: pisoUpdated});
  })
}

function deletePiso(req, res) {
  let pisoId = req.params.pisoId
  console.log('DELETE /api/piso');

  Piso.findById(pisoId, (err, piso)=>{
    if (err) return res.status(500).send({message:`Error al borrar ${err}`});

    piso.remove((err)=>{
      if(err) return res.status(500).send({message:`Error al borrar ${err}`});

      res.status(200).send({message:'Se ha borrado correctamente!'});
    })
  })
}

module.exports={
  getPiso,
  getPisos,
  postPiso,
  putPiso,
  deletePiso
}
