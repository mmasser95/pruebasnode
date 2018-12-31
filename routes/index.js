'use strict'

const express = require('express');
const userCtrl = require('../controllers/user')
const router = express.Router();
const pisoCtrl = require('../controllers/piso');
const inquilinoCtrl=require('../controllers/inquilino');
const propietarioCtrl=require('../controllers/propietario')
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

//inquilino
router.get('/inquilino', inquilinoCtrl.getInquilinos);
router.get('/inquilino/:inquilinoId', inquilinoCtrl.getInquilino);
router.post('/inquilino', inquilinoCtrl.postInquilino);
router.put('/inquilino/:inquilinoId', inquilinoCtrl.putInquilino);
router.delete('/inquilino/:inquilinoId'),
router.post('/inquilino/signin',inquilinoCtrl.signIn);

//propietario
router.get('/propietario', propietarioCtrl.getPropietarios);
router.get('/propietario/:propietarioId', propietarioCtrl.getPropietarios);
router.post('/propietario', propietarioCtrl.postPropietario);
router.put('/propietario/:propietarioId', propietarioCtrl.putPropietario);
router.delete('/propietario/:propietarioId', propietarioCtrl.deletePropietario)

module.exports = router;
