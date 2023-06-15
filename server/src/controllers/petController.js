const { Pool } = require("pg");

// conseção ao banco de dados
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

const petController = {
  // listando os pets
  lista:
    ("/",
    async (req, res) => {
      try {
        const { rows } = await pool.query("SELECT * FROM pets");
        return res.status(200).send(rows);
      } catch (err) {
        return res.status(400).send(err);
      }
    }),

  // listar um pet
  show:
    ("/:id",
    async (req, res) => {
      const { id } = req.params;

      try {
        const { rows } = await pool.query(
          "SELECT * FROM pets WHERE pets_id=($1)",
          [id]
        );
        return res.status(200).send(rows);
      } catch (err) {
        return res.status(400).send(err);
      }
    }),

  // criando um usuario pet
  create:
    ("/",
    async (req, res) => {
      const { nameanimal } = req.body;
      const { idade } = req.body;
      const { animal } = req.body;
      const { raca } = req.body;
      const { namedono } = req.body;
      const { telefone } = req.body;

      try {
        await pool.query(
          "INSERT INTO pets(nameanimal, idade, animal, raca, namedono, telefone) VALUES ($1,$2,$3,$4,$5,$6) RETURNING * ",
          [nameanimal, idade, animal, raca, namedono, telefone]
        );
        return res.status(200).send({ msg: "Pet cadastrado com sucesso " });
      } catch (err) {
        return res.status(400).send({ msg: "Pet já cadastrado " });
      }
    }),

  //   // atualizando os pets
  update:
    ("/:id",
    async (req, res) => {
      const { id } = req.params;
      const { nameanimal, idade, animal, raca, namedono, telefone } = req.body;

      try {
        await pool.query(
          "UPDATE pets SET nameanimal=($1), idade=($2), animal=($3), raca=($4), namedono=($5), telefone=($6) WHERE pets_id=($7) RETURNING * ",
          [nameanimal, idade, animal, raca, namedono, telefone, id]
        );
        return res.status(200).send({ msg: "Pet Atulizado com sucesso " });
      } catch (err) {
        return res.status(400).send({ msg: "Pet já cadastrado " });
      }
    }),

  // deletando
  delete:
    ("/:id",
    async (req, res) => {
      const { id } = req.params;

      try {
        await pool.query("DELETE FROM pets WHERE pets_id=($1)", [id]);
        return res.status(200).send({ msg: "Pet Deletado com sucesso " });
      } catch (err) {
        return res.status(400).send(err);
      }
    }),
};

module.exports = petController;
