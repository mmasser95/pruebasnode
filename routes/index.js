'use strict'

const express = require('express');
const userCtrl = require('../controllers/user')
const router = express.Router();
const pisoCtrl = require('../controllers/piso');
const auth = require('../middlewares/auth');


router.get('/piso', pisoCtrl.getPisos);
router.get('/piso/:pisoId', pisoCtrl.getPiso);
router.post('/piso', pisoCtrl.postPiso);
router.put('/piso/:pisoId', pisoCtrl.putPiso);
router.delete('/piso/:pisoId', pisoCtrl.deletePiso);
router.post('/signup', userCtrl.signUp);
router.post('/signin', userCtrl.signIn);
router.get('/private',auth, (req,res)=>{
  return res.status(200).send({message:'Tienes acceso'});
})
module.exports = router;
