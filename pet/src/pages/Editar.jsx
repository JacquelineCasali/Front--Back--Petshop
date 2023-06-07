import React, { useState, useEffect } from "react";
// importando o titulo
import { Helmet, HelmetProvider } from "react-helmet-async";

// importando estilo
import "../styles/reset.css";
import "../styles/App.css";

// import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import axios from "axios";

function Editar() {
  async function getTodos() {
    // axios banco de dados
    const response = await axios.get("https://petshop-proqsel.onrender.com/");
    setTodos(response.data);
    console.log(response.data);
  }
  const [namedono, setNamedono] = useState("");

  const handClikEditar = (values) => {
    // const navigate = useNavigate();
    axios
      .put("https://petshop-proqsel.onrender.com/", {
        // intercepitação do evento
        // nameanimal: values.nameanimal,
        // idade: values.idade,
        // animal: values.animal,
        // raca: values.raca,
        // namedono: values.namedono,
        telefone: values.telefone,
      })
      .then((response) => {
        //   navigate("/");
        console.log(response);
      });
  };
  //  importando do banco
  const [todos, setTodos] = useState([]);
  // useEffect chama a função do banco
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="App">
      <Header />
      <HelmetProvider>
        <Helmet title="Editar Pet" />
      </HelmetProvider>
      <section className="editar">
        <h1 className="">Editar Pet</h1>

        {todos.map((pets) => {
          return (
            <form className="login-fomr" onSubmit={handClikEditar}>
              <label htmlFor="namedono">Nome do Dono:</label>
              <input
                className="input-padrao"
                type="text"
                name="namedono"
                value={pets.namedono}
              />
              <label htmlFor="telefone">Telefone:</label>
              <input
                className="input-padrao"
                type="text"
                name="telefone"
                id="telefone"
                value={pets.telefone}
              />

              <div className="coluna-animal">
                <div className="coluna-animal1">
                  <label htmlFor="nameanimal">Nome do Animal : </label>
                  <input
                    className="input-padrao"
                    name="nameanimal"
                    type="text"
                    id="text"
                    value={pets.nameanimal}
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
                      value={pets.animal}
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
                      value={pets.idade}
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
                    value={pets.raca}
                  />
                </div>
              </div>

              <button className="button-senha">Editar</button>
            </form>
          );
        })}
      </section>
      <Footer />
    </div>
  );
}

export default Editar;
