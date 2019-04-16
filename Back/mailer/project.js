'use strict'

const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
    user: 'themaster1990@hotmail.com', // Cambialo por tu email
    pass: '8Tumamafue..7' // Cambialo por tu password
    }
    });
   /*const mailOptions = {
    from: 'themaster1990@hotmail.com',
    to: 'rodriguezcarrerajose@gmail.com', // Cambia esta parte por el destinatario
    subject: 'Prueba',
    html: 'Prueba Prueba'
   };*/
   const mailOptions = {
    from: 'themaster1990@hotmail.com',
    to: `"${formulario.name}" <${formulario.email}>`, // Cambia esta parte por el destinatario
    subject: formulario.name,
    html: `
    <strong>Nombre:</strong> ${formulario.name} <br/>
    <strong>E-mail:</strong> ${formulario.email} <br/>
    <strong>Fecha:</strong> ${formulario.date} <br/>
    <strong>Fecha:</strong> ${formulario.hour} <br/>
    <strong>Mensaje:</strong> ${formulario.message}
    `
    };

   transporter.sendMail(mailOptions, function (err, info) {
    if (err)
    console.log(err)
    else
    console.log(info);
    });
   }