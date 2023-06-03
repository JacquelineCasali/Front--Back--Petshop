const exprees = require("express");
const port = 3333;
const app = exprees();

app.listen(port, () => {
  console.log("Estamos rodando em: http://localhost:" + port);
});
