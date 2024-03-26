const sendingSaludo1 = (req, res, next) => {
  const saludo1 = "Hola desde saludo1";
  req.saludo1 = saludo1;
  next();
};

const sendingSaludo2 = (req, res, next) => {
  const saludo2 = "Hola desde saludo2";
  req.saludo2 = saludo2;
  next();
};

module.exports = {
  sendingSaludo1,
  sendingSaludo2,
};
