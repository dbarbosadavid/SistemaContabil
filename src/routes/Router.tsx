import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Usuarios from "../pages/Usuarios";
import Lancamentos from "../pages/Lancamentos";
import Contas from "../pages/Contas";
import Relatorios from "../pages/Relatorios";
import Login from "../pages/Login";

const AppRoutes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/lancamentos" element={<Lancamentos />} />
      <Route path="/contas" element={<Contas />} />
      <Route path="/relatorios" element={<Relatorios />} />
      <Route path="/about" element={<About />} />
    </RouterRoutes>
  );
};

export default AppRoutes;