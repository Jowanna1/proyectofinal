const mongoose= require('mongoose');
const Schema= mongoose.Schema ;


const db_recetas= new Schema({
    
    receta: {type: String, require:true},
    ingredientes: {type: String, require:true},
    preparacion: {type: String, require:true},
    autor: {type: String, require:true},
    date:{type:Date, default:Date.now}
});

const recetas= mongoose.model('Recetas', db_recetas);

module.exports= recetas;