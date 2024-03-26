/*
IMPORTANDO EL dotenv previamente instalado que sirve para utilizar variables de entorno, además:
const dotenv = require("dotenv")
dotenv.config()
*/
require("dotenv").config();

//IMPORTANDO env-var que sirve para validar las envs
const env = require("env-var");

exports.envs = {
  PORT: env.get("PORT").required().asPortNumber(),
};
