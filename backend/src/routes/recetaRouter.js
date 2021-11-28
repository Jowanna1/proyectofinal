const {Router}= require('express');
const router = Router();
const RecetaCtrl= require('../controllers/RecetaControler');

router.post('/compartir_receta',RecetaCtrl.compartir);

module.exports= router;
