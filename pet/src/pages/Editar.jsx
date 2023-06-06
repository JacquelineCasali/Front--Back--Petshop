import React from "react";
// importando o titulo
import { Helmet, HelmetProvider } from "react-helmet-async";

// importando estilo
import "../styles/reset.css";
import "../styles/App.css";
import Axios from "axios";
// import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
// import Axios from "axios";

const listapets = [
  {
    nameanimal: "Rex",
    idade: "5 Anos",
    animal: "Cachorro",
    raca: "Pastor Alemão",
    namedono: "Paulo Santos",
    telefone: "11-9998-5555",
  },
  {
    nameanimal: "Pingo",
    idade: "5 Anos",
    animal: "Cachorro",
    raca: "Rote",
    namedono: "Paulo Santos",
    telefone: "11-9998-5555",
  },
];

function Editar() {
  const handClikEditar = (values) => {
    // const navigate = useNavigate();
    Axios.post("http://localhost:9000/cadastro", {
      // intercepitação do evento
      nameanimal: values.nameanimal,
      idade: values.idade,
      animal: values.animal,
      raca: values.raca,
      namedono: values.namedono,
      telefone: values.telefone,
    }).then((response) => {
      //   navigate("/");
      console.log(response);
    });
  };

  return (
    <div className="App">
      <Header />
      <HelmetProvider>
        <Helmet title="Editar Pet" />
      </HelmetProvider>
      <section className="editar">
        <h1 className="">Editar Pet</h1>

        <form className="login-fomr" onSubmit={handClikEditar}>
          <label htmlFor="namedono">Nome do Dono:</label>
          <input
            className="input-padrao"
            type="text"
            name="namedono"
            id="namedono"
            // value={idade}
            placeholder="Digite o Nome do Dono"
          />
          <label htmlFor="telefone">Telefone:</label>
          <input
            className="input-padrao"
            type="text"
            name="telefone"
            id="telefone"
            // value={idade}
            placeholder="Digite o Nome do Dono"
          />

          <div className="coluna-animal">
            <div className="coluna-animal1">
              <label htmlFor="nameanimal">Nome do Animal : </label>
              <input
                className="input-padrao"
                name="nameanimal"
                type="text"
                id="text"
                // value={nameanimal}
                placeholder="Digite o nome do animal "
              />
            </div>

            <div className="coluna-animal1">
              <label htmlFor="animal">
                Animal:
                <input
                  className="input-animal1"
                  type="text"
                  name="animal"
                  id="animal"
                  // value={idade}
                  placeholder="Digite o tipo do animal"
                />
              </label>
            </div>
          </div>
          <div className="coluna-animal">
            <div className="coluna-animal1">
              <label htmlFor="idade">
                Idade:
                <input
                  className="input-animal1"
                  type="text"
                  name="idade"
                  id="idade"
                  // value={listapets.idade}
                  placeholder="Digite a idade do Animal"
                />
              </label>
            </div>
            <div className="coluna-animal1">
              <label htmlFor="raca">Raça do Animal:</label>
              <input
                className="input-padrao"
                type="text"
                name="raca"
                id="raca"
                // value={idade}
                placeholder="Digite Raça do Animal"
              />
            </div>
          </div>

          <button className="button-senha" type="submit">
            Editar
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Editar;
