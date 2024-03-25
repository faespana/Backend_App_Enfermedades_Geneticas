//IMPORTANDO EXPRESS
const express = require("express");

//CREANDO UNA CONSTANTE APP QUE TENDRA TODAS LAS FUNCIONALIDADES DE EXPRESS
const app = express();

//Creando un Middleware para evitar el DRY: Dont Repeat Yourself"
const calculateRequestTime = (req, res, next) => {
  const requestTime = new Date().toISOString();

  req.requestTime = requestTime;
  next();
};

//MIDDLEWARES 👇🏽
//Permite obtener el body en formato json
app.use(express.json());
//Permite obtener el body en formato url encoded
app.use(express.urlencoded({ extended: true }));
//Permite enviar el tiempo de la solicitud (notese que no se debe ejecutar)
app.use(calculateRequestTime);

//DEFINICION DE FUNCIONES
//Mediante la funciones puedo pasarle por parametro como valor al metodo GET el callback "findAll"
const findAll = (req, res) => {
  const requestTime = req.requestTime;
  //Desestructurando, otra forma de llamar al requestTime
  //const { requestTime } = req
  return res.status(200).json({
    message: "method get findAll",
    requestTime,
  });

  // res.status(200).json([
  //   {
  //     enfermedad: "enfermedad1",
  //   },
  //   {
  //     enfermedad: "enfermedad2",
  //   },
  // ]);

  //res.send("Hola mundo!");
};

const createOne = (req, res) => {
  //El postman simula lo que se hace con axios en el frontend;
  console.log(req.body);
  //Se puede tambien hacer de la siguiente forma;
  const disease = req.body;

  const { requestTime } = req;

  //Desestructurando
  const { enfermedad, especie, raza } = req.body;

  console.log(enfermedad);

  return res.status(201).json({
    message: "method post create",
    data: req.body,
    otherData: disease,
    requestTime,
  });
};

const findOne = (req, res) => {
  const { requestTime } = req;
  //Sino se llama el req.params no va a funcionar mi llamado por parametros
  console.log(req.params);
  return res.status(200).json({
    message: "method get findOne",
    id: req.params.id,
    requestTime,
  });
};

const updateOne = (req, res) => {
  const { id } = req.params;
  const { requestTime } = req;

  return res.status(200).json({
    message: "method patch updateOne",
    id, //Puede ir solo id sin el : ya que solo tiene una cosa que desestructurar
    requestTime,
  });
};

const eliminateOne = (req, res) => {
  const { id } = req.params;
  const { requestTime } = req;

  return res.status(200).json({
    message: "method delete eliminateOne",
    id,
    requestTime,
  });
};

//DEFINIR LOS ENDPOINTS
//Endpoint para buscar todas las enfermedades geneticas
app.get("/api/v1/genetic-diseases", findAll);

//Endpoint para crear una enfermedad genetica
app.post("/api/v1/genetic-diseases", createOne);

//Endpoint para buscar UNA enfermedad genetica
app.get("/api/v1/genetic-diseases/:id", findOne);

//Endpoint para actualizar una enfermedad
app.patch("/api/v1/genetic-diseases/:id", updateOne);

//Endpoint para eliminar una enfermedad
app.delete("/api/v1/genetic-diseases/:id", eliminateOne);

app.listen(3000, () => {
  console.log("El servidor esta escuchando en el puerto 3000");
});
