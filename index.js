// app en express usando EM5
const express = require('express');
const {Middlewares, encriptar} = require('./services/middlewares');


//instancio express
const app = express();
//puerto
const PORT = 3000;

//uso de los middleware
app.use(Middlewares);

//entendinedo json
app.use(express.json());

//datos para form
app.use(express.urlencoded({extended:true}))

//entender datos estaticos que los busque dentro de public
app.use(express.static('public'))
//envio de recursos - CREATE;
//uso un middleware para esta ruta pasandolo como parametro
app.post('/guardar', encriptar,(req,res)=>{
    const nombre = req.body.nombre;
    res.status(201).send('guardado '+ nombre);
});

//peticion de recursos - READ;
app.get( '/',(req, res)=>{
    console.log(req);
    console.log(req.url);
    console.log(req.method);
    res.status(200).send('hola estoy conectado a express')
} );
//envio un archivo al front
 app.get('/index',(req, res)=>{
     res.sendFile(__dirname+ 'index.html');
 } ); 
//descargo un archivo
app.get('/descargas',(req, res)=>{
    res.download(__dirname+'/descarga.txt')
} );

//actualizacion parcial de recursos - UPDATE;
//app.put();

//eliminacion de recursos - DELETE;
//app.delete();

//levanto la aplicacion
app.listen(PORT, ()=>{
    console.log(`servidor funcionado en http://localhost:${PORT}`);
});
