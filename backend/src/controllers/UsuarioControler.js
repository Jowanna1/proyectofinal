const usuarioCtrl = {};

const Usuario= require('../models/usuario');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

usuarioCtrl.createUsuario= async (req,res)=>{
    const {usuario,password}=req.body;

    const NuevoUsuario= new Usuario({
        usuario,
        password
    })

    const correoUsuario= await Usuario.findOne({usuario:usuario})

    if(correoUsuario){
        res.json({
            mensaje: 'ERROR el usuario ya existe'
        })
    }else{
        NuevoUsuario.password= await bcrypt.hash(password,10)
        const token = jwt.sign({_id:NuevoUsuario._id},'Elusuari0');
        await NuevoUsuario.save();
        res.json({
            mensaje: 'Bienvenido',
            id: NuevoUsuario._id,
            usuario: NuevoUsuario.usuario,
            token
        })
    }
}

/* usuarioCtrl.login= async (req,res)=>{
    const {usuario,password}: req.body;


} */

module.exports= usuarioCtrl