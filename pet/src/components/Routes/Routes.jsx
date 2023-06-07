import React from "react";
// rotas
// qual rota ele vai chamar
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Listapets from "../../pages/Listadepet";
import Cadastro from "../../pages/Cadastro";

import Editar from "../../pages/Editar";
// import deletar from "../../pages/deletar/deletar";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Listapets />} />
        <Route exact path="/cadastro" element={<Cadastro />} />

        <Route exact path="/editar" element={<Editar />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
