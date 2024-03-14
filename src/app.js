const express = require("express");

const app = express();

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

app.post("/api/v1/genetic-diseases", (req, res) => {});

app.listen(3000, () => {
  console.log("El servidor esta escuchando en el puerto 4000");
});
