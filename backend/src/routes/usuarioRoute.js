const {Router}= require('express');
const router = Router();
const UsuarioCtrl= require('../controllers/UsuarioControler');

router.post('/crear',UsuarioCtrl.createUsuario)

module.exports= router