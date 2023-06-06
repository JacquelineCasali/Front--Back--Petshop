// import React from "react";
import React, { Component } from "react";
// // importando o titulo
import { Helmet, HelmetProvider } from "react-helmet-async";
// // qual link ele vai chamar
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styles/reset.css";
import "../styles/lista.css";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
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

class Lista extends Component {
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
          <Helmet title="Lista de Pets" />
        </HelmetProvider>

        <section>
          <h1 className="titulo">Lista de Petes</h1>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th className="nome">Nome do Animal</th>
                  <th>Idade</th>
                  <th>Animal</th>
                  <th>Raça</th>
                  <th>Nome do Dono</th>
                  <th>Telefone</th>
                  <th></th>
                </tr>
              </thead>

              {listapets.map((pets) => {
                return (
                  <tbody>
                    <tr cursor="pointer">
                      <td width="5%" class="fw-bold"></td>
                      <td width="15%" data-title="nomeanimal">
                        {pets.nameanimal}
                      </td>
                      <td width="7%" data-title="idade">
                        {pets.idade}
                      </td>
                      <td width="10%" data-title="animal">
                        {pets.animal}
                      </td>
                      <td width="15%" data-title="raca">
                        {pets.raca}
                      </td>
                      <td width="25%" data-title="namedono">
                        {pets.namedono}
                      </td>
                      <td width="12%" data-title="Telefone">
                        {pets.telefone}
                      </td>

                      <td class="table-actions">
                        <Link to="/deletar">
                          <Icon.Trash3
                            color="black"
                            size={30}
                            cursor="pointer"
                            className="icone"
                          />
                        </Link>

                        <Link to="/editar">
                          <Icon.Pencil
                            color="black"
                            size={30}
                            cursor="pointer"
                          />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </section>
        {/* <section className="final"></section> */}
        <Footer />
      </div>
    );
  }
}
export default Lista;
