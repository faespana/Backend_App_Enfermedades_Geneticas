const app = require("./app");

const { envs } = require("./config/enviroments/enviroments");

//PONER AL SERVIDOR A ESCUCHAR
app.listen(envs.PORT, () => {
  console.log("El servidor esta escuchando en el puerto " + envs.PORT);
});
