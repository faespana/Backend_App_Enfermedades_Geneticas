const express = require("express");

//IMPORTANDO EL MIDDLEWARE DESDE SU MODULO
const geneticMiddleware = require("./genetic-diseases.middleware");

const router = express.Router();

//IMPORTANDO LOS CONTROLADORES - Primera forma
const {
  findAll,
  findOne,
  createOne,
  updateOne,
  eliminateOne,
} = require("./genetic-diseases.controller");

//IMPORTANDO LOS CONTROLADORES - Segunda forma
//const geneticController = require("./genetic-diseases.controller");
//router.delete("/genetic-diseases/:id", geneticController.eliminateOne);

//DEFINIENDO LOS ENDPOINTS
//Endpoint para buscar todas las enfermedades geneticas
router.get("/genetic-diseases", geneticMiddleware.sendingSaludo1, findAll);

//Endpoint para crear una enfermedad genetica
router.post("/genetic-diseases", createOne);

//Endpoint para buscar UNA enfermedad genetica
router.get("/genetic-diseases/:id", findOne);

//Endpoint para actualizar una enfermedad
router.patch("/genetic-diseases/:id", updateOne);

//Endpoint para eliminar una enfermedad
router.delete(
  "/genetic-diseases/:id",
  geneticMiddleware.sendingSaludo2,
  eliminateOne
);

module.exports = router;
