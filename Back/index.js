'use stric'

const express = require('express')
const body_parser = require('body-parser')
const port = 3800


var app = express()

const configMensaje = require('./mailer/project');



//middleware
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas
//Prueba objeto
/*var objeto = {
    name: "Jose",
    email: 'rodriguezcarrerajose@gmail.com',
    date: '14/04/2019',
    hour: '2pm',
    message: 'Quiero cita para las 2pm'
}*/
app.post('/reserva', (req, res)=>{
    configMensaje(req.body)
    res.status(200).send({
        message: 'Mensaje enviado'
    })
})

app.get('/test', (req, res)=>{
    res.status(200).send({
        message: 'Hola mundo'
    })
})
//configMensaje() --> prueba
//escucha
app.listen(port, ()=>{
    console.log('Se enviara correo')
})


