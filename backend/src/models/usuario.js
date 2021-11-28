const mongoose= require('mongoose');
const Schema= mongoose.Schema ;


const db_users= new Schema({
    usuario: {type: String, require:true},
    password: {type: String, require:true}
});

//Convertir a modelo

const usuario= mongoose.model('Usuario', db_users);

module.exports = usuario