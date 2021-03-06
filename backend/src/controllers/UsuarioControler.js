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
            mensaje: 'ERROR el usuario ya existe',
            login: false
        })
    }else{
        NuevoUsuario.password= await bcrypt.hash(password,10)
        const token = jwt.sign({_id:NuevoUsuario._id},'Elusuari0');
        await NuevoUsuario.save();
        res.json({
            mensaje: 'Bienvenido',
            login: true
        })
    }
}

usuarioCtrl.login= async (req,res)=>{
    const {usuario,password}= req.body;
    const user= await Usuario.findOne({usuario: usuario})

    if(!user){
        return res.json({
            mensaje: 'Usuario y/o contraseña incorrrectos',
            login: false
        })
    }

    const match = await bcrypt.compare(password, user.password);

    if(match){
        const token = jwt.sign({_id:user._id}, 'Elusuari0')
        res.json({
            mensaje: 'Bienvenido',
            login: true
        })

    }else{
        res.json({
            mensaje: 'Usuario y/o contraseña incorrrectos',
            login: false
        })
    }
}

module.exports= usuarioCtrl;