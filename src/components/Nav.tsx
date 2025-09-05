import React from "react";
import { Link } from "react-router-dom"
import '../Nav.css';

const Nav: React.FC = () => {
  return (
    <nav id="nav">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/usuarios">Usuarios</Link>
        <Link to="/lancamentos">Lancamentos</Link>
        <Link to="/contas">Contas</Link>
        <Link to="/relatorios">Relatorios</Link>
        <Link to="/about">Sobre</Link>
        <Link onClick={()=>{
          window.confirm("Deseja realmente sair? ")
        }} to="/">Sair</Link>
    </nav>
  )
};

export default Nav;
