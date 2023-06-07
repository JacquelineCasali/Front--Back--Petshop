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

function Cadastrar() {
  // função do botão
  // async function handClikCadastro() {
  //   console.log("Salvo");
  // }
  // async function getTodos() {
  //   // axios banco de dados
  //   const response = await axios.get("https://petshop-proqsel.onrender.com/");
  //   setTodos(response.data);
  //   console.log(response.data);
  // }
  // Salvando

  const [nameanimal, setNameanimal] = useState("");
  const [idade, setIdade] = useState("");
  const [animal, setAnimal] = useState("");
  const [raca, setRaca] = useState("");
  const [namedono, setNamedono] = useState("");
  const [telefone, setTelefone] = useState("");

  const handClikCadastro = (e) => {
    axios.post("https://petshop-proqsel.onrender.com/", {}).then((response) => {
      console.log(response);
    });
    // getTodos();
    // setInputValue("");
  };

  return (
    <div className="App">
      <Header />
      <HelmetProvider>
        <Helmet title="Cadastrar Pet" />
      </HelmetProvider>
      <section className="editar">
        <h1 className="">Cadastrar Pet</h1>

        <form className="login-fomr" onSubmit={handClikCadastro}>
          <label htmlFor="nameanimal">Nome do Animal:</label>

          <input
            className="input-padrao"
            type="text"
            name="nameanimal"
            id="nameanimal"
            value={nameanimal}
            onChange={(e) => {
              setNameanimal(e.target.value);
            }}
            placeholder="Digite o Nome do Dono"
          />
          <label htmlFor="idade">Idade:</label>
          <input
            className="input-padrao"
            type="text"
            name="idade"
            value={idade}
            onChange={(e) => {
              setIdade(e.target.value);
            }}
            placeholder="Digite o Numero do Telefone"
          />

          <div className="coluna-animal">
            <div className="coluna-animal1">
              <label htmlFor="nameanimal">Animal : </label>
              <input
                className="input-padrao"
                name="animal"
                type="text"
                id="text"
                value={animal}
                onChange={(e) => {
                  setAnimal(e.target.value);
                }}
                placeholder="Digite o nome do animal "
              />
            </div>

            <div className="coluna-animal1">
              <label htmlFor="raca">
                Raça:
                <input
                  className="input-animal1"
                  type="text"
                  name="raca"
                  value={raca}
                  onChange={(e) => {
                    setRaca(e.target.value);
                  }}
                  placeholder="Digite o tipo do animal"
                />
              </label>
            </div>
          </div>
          <div className="coluna-animal">
            <div className="coluna-animal1">
              <label htmlFor="namedono">
                Nome do Dono:
                <input
                  className="input-animal1"
                  type="text"
                  name="namedono"
                  value={namedono}
                  onChange={(e) => {
                    setNamedono(e.target.value);
                  }}
                  placeholder="Digite a idade do Animal"
                />
              </label>
            </div>
            <div className="coluna-animal1">
              <label htmlFor="telefone">Telefone:</label>
              <input
                className="input-padrao"
                type="text"
                name="telefone"
                value={telefone}
                onChange={(e) => {
                  setTelefone(e.target.value);
                }}
                placeholder="Digite Raça do Animal"
              />
            </div>
          </div>

          <button className="button-senha" type="submit">
            Salvar
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}
export default Cadastrar;
