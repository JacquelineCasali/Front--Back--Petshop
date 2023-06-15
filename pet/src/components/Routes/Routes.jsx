import React from "react";
// rotas
// qual rota ele vai chamar
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Listapets from "../../pages/Listadepet";
import Cadastro from "../../pages/Cadastro";
import Pet from "../../pages/Pet";
import Editar from "../../pages/Editar";
// import deletar from "../../pages/deletar/deletar";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Listapets />} />
        <Route exact path="/:id" element={<Pet />} />
        <Route exact path="/cadastro" element={<Cadastro />} />
        <Route exact path="/edit/:id" element={<Editar />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
