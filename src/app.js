const express = require("express");

const app = express();
//Permite obtener el body en formato json
app.use(express.json());
//Permite obtener el body en formato url encoded
app.use(express.urlencoded({ extended: true }));

//Mediante la funciones puedo pasarle por parametro como valor al metodo GET el callback "findAll"
const findAll = (req, res) => {
  return res.status(200).json({
    message: "method get findAll",
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

  //Desestructurando
  const { enfermedad, especie, raza } = req.body;

  console.log(enfermedad);

  return res.status(201).json({
    message: "method post create",
    data: req.body,
    otherData: disease,
  });
};

const findOne = (req, res) => {
  //Sino se llama el req.params no va a funcionar mi llamado por parametros
  console.log(req.params);
  return res.status(200).json({
    message: "method get findOne",
    id: req.params.id,
  });
};

const updateOne = (req, res) => {
  const { id } = req.params;

  return res.status(200).json({
    message: "method patch updateOne",
    id, //Puede ir solo id sin el : ya que solo tiene una cosa que desestructurar
  });
};

const eliminateOne = (req, res) => {
  const { id } = req.params;

  return res.status(200).json({
    message: "method delete eliminateOne",
    id,
  });
};

//Endpoint para buscar todas las enfermedades geneticas
app.get("/api/v1/genetic-diseases", findAll);

//Endpoint para crear una enfermedad genetica
app.post("/api/v1/genetic-diseases", createOne);

//Endpoint para buscar UNA enfermedad genetica
app.get("/api/v1/genetic-diseases/:id", findOne);

//Endpoint para actualizar una enfermedad
app.patch("/api/v1/genetic-diseases/:id", updateOne);

app.delete("/api/v1/genetic-diseases/:id", eliminateOne);

app.listen(3000, () => {
  console.log("El servidor esta escuchando en el puerto 4000");
});
