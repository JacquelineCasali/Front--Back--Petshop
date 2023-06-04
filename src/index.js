const exprees = require("express");
// const { Pool } = require("pg");
//  variavel de ambiente
require("dotenv").config();

const port = 3333;

const petRoute = require("./routes/petRoute");
const app = exprees();

// consulta no banco de dados
// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL,
// });

app.use(exprees.json());

app.use("/", petRoute);

// // listando os pets
app.listen(port, () => {
  console.log("Estamos rodando em: http://localhost:" + port);
});
