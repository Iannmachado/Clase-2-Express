// app en express usando EM5
const express = require('express');

//instancio express
const app = express();
//puerto
const PORT = 3000;
//envio de recursos - CREATE;
//app.post();

//peticion de recursos - READ;
app.get( '/',(req, res)=>{
    console.log(req);
    console.log(req.url);
    console.log(req.method);
    res.status(200).send('hola estoy conectado a express')
} );
//envio un archivo al front
app.get('/index',(req, res)=>{
    res.sendFile(__dirname+ '/index.html');
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
