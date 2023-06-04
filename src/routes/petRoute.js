const express = require("express");
const router = express.Router();
// const userController = require("../controllers/userController");
const petController = require("../controllers/petController");
// pets

router.get("/", petController.lista);
// um pet ler 1
router.get("/:id", petController.show);
// router.get("/user/:id", userController.show);

router.post("/", petController.create);
router.put("/:id", petController.update);
router.delete("/:id", petController.delete);

// router.post("/pet/:user_id", petController.create);

module.exports = router;

// {
//     "user_id": 1,
//     "nameanimal": "Tobe",
//     "idade": "5",
//     "animal": "Cachorro",
//     "raca": "Pastor",
//     "namedono": "Carlos Santos",
//     "telefone": "011 99975-4545"
// },
// {
//     "user_id": 2,
//     "nameanimal": "Mingau",
//     "idade": "10",
//     "animal": "Gato",
//     "raca": "Peduro",
//     "namedono": "Amanda Silva",
//     "telefone": "011 99845-4545"
// },
// {
//     "user_id": 3,
//     "nameanimal": "Sushi",
//     "idade": "5 Anos",
//     "animal": "Cachorro",
//     "raca": "Pudo",
//     "namedono": "Carmem Souza",
//     "telefone": "11 99945-4547"
// },
// {
//     "user_id": 4,
//     "nameanimal": "Mike",
//     "idade": " 1 Ano",
//     "animal": "Gato",
//     "raca": "Peduro",
//     "namedono": "Isabella Costa",
//     "telefone": "11 99945-4544"
// },
// {
//     "user_id": 5,
//     "nameanimal": "Rex",
//     "idade": " 1 Ano",
//     "animal": "Cachorro",
//     "raca": "Pastor Alemão",
//     "namedono": "Isabella Costa",
//     "telefone": "11 99945-4542"
// },
// {
//     "user_id": 10,
//     "nameanimal": "Tobe",
//     "idade": " 2 Ano",
//     "animal": "Cachorro",
//     "raca": "Hot Vale",
//     "namedono": "Filipe Costa",
//     "telefone": "11 99945-4540"
// },
// {
//     "user_id": 13,
//     "nameanimal": "Pingo",
//     "idade": " 2 Ano",
//     "animal": "Cachorro",
//     "raca": "Hot Vale",
//     "namedono": "Filipe Silva",
//     "telefone": "11 99945-3515"
// }
