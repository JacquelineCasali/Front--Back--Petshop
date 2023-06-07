// import React from "react";
import React, { Component } from "react";
// // importando o titulo
import { Helmet, HelmetProvider } from "react-helmet-async";
// // qual link ele vai chamar
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styles/reset.css";
import "../styles/lista.css";

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

class Deletar extends Component {
  // conectando ao banco de dados
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("https://petshop-proqsel.onrender.com/")
      // "http://127.0.0.1:5432"
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <HelmetProvider>
          <Helmet title="Deletar Pet" />
        </HelmetProvider>

        <section>
          <h1 className="titulo">Deletar Petes</h1>

          <div className="table-container">
            {listapets.map((pets) => {
              return (
                <main>
                  <span>{pets.nameanimal}</span>
                  <span>{pets.idade}</span>
                  <span>{pets.animal}</span>
                  <span>{pets.raca}</span>
                  <span>{pets.namedono}</span>
                  <span>{pets.telefone}</span>
                </main>
              );
            })}
          </div>
        </section>

        {/* <section className="final"></section> */}
        <Footer />
      </div>
    );
  }
}
export default Deletar;
