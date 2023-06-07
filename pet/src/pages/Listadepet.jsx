// import React from "react";
import { useState, useEffect } from "react";
// // importando o titulo
import { Helmet, HelmetProvider } from "react-helmet-async";
// // qual link ele vai chamar
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styles/reset.css";
import "../styles/lista.css";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import axios from "axios";
// para teste
// const listapets = [
//   {
//     nameanimal: "Rex",
//     idade: "5 Anos",
//     animal: "Cachorro",
//     raca: "Pastor Alemão",
//     namedono: "Paulo Santos",
//     telefone: "11-9998-5555",
//   },
//   {
//     nameanimal: "Pingo",
//     idade: "5 Anos",
//     animal: "Cachorro",
//     raca: "Rote",
//     namedono: "Paulo Santos",
//     telefone: "11-9998-5555",
//   },
// ];

function Lista() {
  async function getTodos() {
    // axios banco de dados
    const response = await axios.get("https://petshop-proqsel.onrender.com/");
    setTodos(response.data);
    console.log(response.data);
  }
  async function deletePet(pets) {
    await axios.delete(`https://petshop-proqsel.onrender.com/${pets.pets_id}`);
    getTodos();
  }
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

            {todos.map((pets) => {
              return (
                <tbody>
                  <tr cursor="pointer">
                    <td width="5%" class="fw-bold">
                      {" "}
                      {pets.pets_id}
                    </td>
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

                    <td className="table-actions">
                      <button onClick={() => deletePet(pets)}>
                        <Icon.Trash3
                          color="black"
                          size={30}
                          cursor="pointer"
                          className="icone"
                        />
                      </button>

                      <Link to="/editar">
                        <Icon.Pencil color="black" size={30} cursor="pointer" />
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

export default Lista;
