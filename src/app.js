const express = require("express");

const app = express();

app.get("/api/v1/genetic-diseases", (req, res) => {
  res.send("Hola mundo!");
});

app.listen(3000, () => {
  console.log("El servidor esta escuchando en el puerto 4000");
});
