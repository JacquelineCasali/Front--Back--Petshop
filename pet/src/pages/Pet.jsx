import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import "../styles/reset.css";
import "../styles/pet.css";

function Pet() {
  const { id } = useParams();
  const [pet, setPet] = useState([]);

  useEffect(() => {
    axios
      .get("https://petshop-proqsel.onrender.com/" + id)

      .then((res) => {
        console.log(res);
        setPet(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Header />
      <HelmetProvider>
        <Helmet title="Cadastrar Pet" />
      </HelmetProvider>

      <section className="editar">
        <h1 className="titulo">Detalhe Pet</h1>

        <div className="item">
          <div className="lista1 ">
            <span className="lista">Nome do Dono: </span>
            <span className="lista"> {pet.namedono}</span>
          </div>
          <div className="lista1 ">
            <h2 className="lista"> Telefone:</h2>

            <h2 className="lista"> {pet.telefone}</h2>
          </div>
          <div className="lista1 ">
            <h2 className="lista"> Animal:</h2>

            <h2 className="lista">{pet.animal}</h2>
          </div>
          <div className="lista1">
            <h2 className="lista"> Idade:</h2>

            <h2 className="lista">{pet.idade}</h2>
          </div>
          <div className="lista1 ">
            <h2 className="lista"> Nome do Animal:</h2>

            <h2 className="lista"> {pet.nameanimal}</h2>
          </div>

          <div className="lista1 ">
            <h2 className="lista"> Raça:</h2>

            <h2 className="lista"> {pet.raca}</h2>
          </div>

          <Link to="/" className="volta">
            Voltar
          </Link>
          <Link className="link" to={`/edit/${pet.pets_id}`}>
            Editar
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Pet;
