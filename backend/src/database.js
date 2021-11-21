const mongoose = require('mongoose');

const user= 'ssdm';
const password= '12345';
const dataB= 'colombianFood';
const uri= `mongodb+srv://${user}:${password}@cluster0.ojq0r.mongodb.net/${dataB}?retryWrites=true&w=majority`; 

// const uri= 'mongodb://localhost/db_colombianfood'

const options = {useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(uri, options).then(
    () => console.log('Base de datos lista y conectada')
).catch (error => console.log(error))

module.exports= mongoose