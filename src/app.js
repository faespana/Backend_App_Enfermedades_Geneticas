const express = require("express");

const app = express();
//Permite obtener el body en formato json
app.use(express.json());
//Permite obtener el body en formato url encoded
app.use(express.urlencoded({ extended: true }));

//Endpoint para buscar todas las enfermedades geneticas
app.get("/api/v1/genetic-diseases", (req, res) => {
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
});

//Endpoint para crear una enfermedad genetica
app.post("/api/v1/genetic-diseases", (req, res) => {
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
});

//Endpoint para buscar UNA enfermedad genetica
app.get("/api/v1/genetic-diseases/:id", (req, res) => {
  //Sino se llama el req.params no va a funcionar mi llamado por parametros
  console.log(req.params);
  return res.status(200).json({
    message: "method get findOne",
    id: req.params.id,
  });
});

//Endpoint para actualizar una enfermedad
app.patch("/api/v1/genetic-diseases/:id", (req, res) => {
  const { id } = req.params;

  return res.status(200).json({
    message: "method patch updateOne",
    id, //Puede ir solo id sin el : ya que solo tiene una cosa que desestructurar
  });
});

app.delete("/api/v1/genetic-diseases/:id", (req, res) => {
  const { id } = req.params;

  return res.status(200).json({
    message: "method delete eliminateOne",
    id,
  });
});

app.listen(3000, () => {
  console.log("El servidor esta escuchando en el puerto 4000");
});
