const recetaCtrl= {};

const Receta = require('../models/recetas');

recetaCtrl.compartir= async (req,res)=>{
    try{
        const {receta, ingredientes, preparacion, autor}= req.body;

        const nuevaReceta= new Receta({
            receta,
            ingredientes,
            preparacion,
            autor
        })

        nuevaReceta.save();

        res.json({
            mensaje: 'Gracias por compatir tu receta'
        })
    }catch{
        return res.json({mensaje: 'Ocurrio un error'})
    }
    
}

module.exports = recetaCtrl; 