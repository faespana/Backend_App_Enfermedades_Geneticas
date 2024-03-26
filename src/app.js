//IMPORTANDO EXPRESS
const express = require("express");

//CONFIGURANDO LAS RUTAS
const geneticDiseases = require("./genetic-diseases/genetic-diseases.route");

//CREANDO UNA CONSTANTE APP QUE TENDRA TODAS LAS FUNCIONALIDADES DE EXPRESS
const app = express();

//Creando un Middleware para evitar el DRY: Dont Repeat Yourself"
const calculateRequestTime = (req, res, next) => {
  const requestTime = new Date().toISOString();

  req.requestTime = requestTime;
  next();
};

// const sendingSaludo1 = (req, res, next) => {
//   const saludo1 = "Hola desde saludo1";
//   req.saludo1 = saludo1;
//   next();
// };

//MIDDLEWARES 👇🏽
//Permite obtener el body en formato json
app.use(express.json());
//Permite obtener el body en formato url encoded
app.use(express.urlencoded({ extended: true }));
//Permite enviar el tiempo de la solicitud (notese que no se debe ejecutar)
app.use(calculateRequestTime);
//Permite usar las rutas que se hacen en el archivo routes.js en el app.
app.use("/api/v1", geneticDiseases);

module.exports = app;
