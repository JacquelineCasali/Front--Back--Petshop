const exprees = require("express");
const cors = require("cors");

const { Pool } = require("pg");
const bodyParser = require("body-parser");
const db = require("./src/models");
//  variavel de ambiente
require("dotenv").config();
const PORT = process.env.PORT || 5432;
// consulta no banco de dados
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});
const petRoute = require("./src/routes/petRoute");
const app = exprees();

app.use(exprees.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", petRoute);

// // listando os pets
app.listen(PORT, () => {
  console.log("Estamos rodando em: http://127.0.0.1:" + PORT);
});
