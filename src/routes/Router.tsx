import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import About from "../pages/About";
import Balanco from "../pages/Balanco";
import Lancamentos from "../pages/Lancamentos";
import Contas from "../pages/Contas";
import Relatorios from "../pages/Relatorios";
import NovoLancamento from "../pages/NovoLancamento";

const AppRoutes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Balanco />} />
      <Route path="/lancamentos" element={<Lancamentos />} />
      <Route path="/contas" element={<Contas />} />
      <Route path="/relatorios" element={<Relatorios />} />
      <Route path="/about" element={<About />} />
      <Route path="/novo-lancamento" element={<NovoLancamento  />} />

    </RouterRoutes>
  );
};

export default AppRoutes;