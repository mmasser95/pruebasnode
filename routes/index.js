'use strict'

const express = require('express');
const userCtrl = require('../controllers/user')
const router = express.Router();
const pisoCtrl = require('../controllers/piso');
const inquilinoCtrl=require('../controllers/inquilino');
const propietarioCtrl=require('../controllers/propietario')
const inmuebleCtrl=require('../controllers/inmueble');
const reservaCtrl=require('../controllers/reserva');
const auth = require('../middlewares/auth');

//Piso deprecated
router.get('/piso', pisoCtrl.getPisos);
router.get('/piso/:pisoId', pisoCtrl.getPiso);
router.post('/piso', pisoCtrl.postPiso);
router.put('/piso/:pisoId', pisoCtrl.putPiso);
router.delete('/piso/:pisoId', pisoCtrl.deletePiso);
//user
router.post('/signup', userCtrl.signUp);
router.post('/signin', userCtrl.signIn);
//private
router.get('/private',auth, (req,res)=>{
  return res.status(200).send({message:'Tienes acceso'});
})
//inmueble
router.get('/inmueble', inmuebleCtrl.getInmuebles);
router.get('/inmueble/:inmuebleId', inmuebleCtrl.getInmueble);
router.post('/inmueble', inmuebleCtrl.postInmueble);
router.put('/inmueble/:inmuebleId', inmuebleCtrl.putInmueble);
router.delete('/inmueble/:inmuebleId', inmuebleCtrl.deleteInmueble);

//inquilino
router.get('/inquilino', inquilinoCtrl.getInquilinos);
router.get('/inquilino/:inquilinoId', inquilinoCtrl.getInquilino);
router.post('/inquilino', inquilinoCtrl.postInquilino);
router.put('/inquilino/:inquilinoId', inquilinoCtrl.putInquilino);
router.delete('/inquilino/:inquilinoId'),
router.post('/inquilino/signin',inquilinoCtrl.signIn);

//propietario
router.get('/propietario', propietarioCtrl.getPropietarios);
router.get('/propietario/:propietarioId', propietarioCtrl.getPropietario);
router.post('/propietario', propietarioCtrl.postPropietario);
router.put('/propietario/:propietarioId', propietarioCtrl.putPropietario);
router.delete('/propietario/:propietarioId', propietarioCtrl.deletePropietario)

//reserva
router.get('/reserva', reservaCtrl.getReservas);
router.get('/reserva/:reservaId', reservaCtrl.getReserva);
router.post('/reserva', reservaCtrl.postReserva);
router.put('/reserva/:reservaId', reservaCtrl.putReserva);
router.delete('/reserva/:reservaId', reservaCtrl.deleteReserva);

module.exports = router;
