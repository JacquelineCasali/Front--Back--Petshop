const exprees = require("express");
const cors = require("cors");
const { Pool } = require("pg");
//  variavel de ambiente
require("dotenv").config();

const port = 5432;
// consulta no banco de dados
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});
const petRoute = require("./routes/petRoute");
const app = exprees();
app.use(exprees.json());
app.use(cors());
app.use("/", petRoute);

// // listando os pets
app.listen(port, () => {
  console.log("Estamos rodando em: http://localhost:" + port);
});