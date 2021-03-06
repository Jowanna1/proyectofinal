const express = require('express');
const app= express();
const morgan = require('morgan');
const cors = require('cors');

require('./database');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({arigin:'*'}));

//Rutas

app.use('/usuario', require('./routes/usuarioRoute'));
app.use('/recetas', require('./routes/recetaRouter'));

//Puerto

app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'), ()=>{
    console.log('App listening on port ' + app.get('puerto'));
});