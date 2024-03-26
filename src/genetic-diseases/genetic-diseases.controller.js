//DEFINICION DE FUNCIONES
//Mediante la funciones puedo pasarle por parametro como valor al metodo GET el callback "findAll"
const findAll = (req, res) => {
  const requestTime = req.requestTime;
  //Desestructurando, otra forma de llamar al requestTime
  //const { requestTime } = req
  const saludo1 = req.saludo1;
  return res.status(200).json({
    message: "method get findAll",
    requestTime,
    saludo1,
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
  const { requestTime, saludo2 } = req;

  return res.status(200).json({
    message: "method delete eliminateOne",
    id,
    requestTime,
    saludo2,
  });
};

//Primera forma de exportar
module.exports = {
  findAll,
  createOne,
  findOne,
  updateOne,
  eliminateOne,
};

//Segunda forma
// exports.eliminateOne = (req, res) => {
//     const { id } = req.params;
//     const { requestTime } = req;

//     return res.status(200).json({
//       message: "method delete eliminateOne",
//       id,
//       requestTime,
//     });
//   };
