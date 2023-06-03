const exprees = require("express");
const { Pool } = require("pg");
//  variavel de ambiente
require("dotenv").config();

const port = 3333;
const app = exprees();

// consulta no banco de dados
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

app.use(exprees.json());
// rota
app.get("/", (req, res) => {
  console.log("iniciando o banco");
});
app.get("/users", async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users");
    console.log(users);
  } catch (err) {
    return res.status(400).send(err);
  }
});
app.listen(port, () => {
  console.log("Estamos rodando em: http://localhost:" + port);
});
