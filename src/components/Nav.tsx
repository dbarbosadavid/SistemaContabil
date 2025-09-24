import React from "react";
import { Link, useNavigate } from "react-router-dom"
import '../Nav.css';
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { SubMenu } from "./SubMenu";

const Nav: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Erro ao deslogar.");
    }
  };

  return (
    <nav id="nav">
        <Link to="/">Balanco</Link>
        <Link to="/lancamentos">
          <SubMenu 
          title="Lançamentos"
          items={["Novo Lançamento", "Listar Lançamentos"]}
          left={"-1.5rem"}
          />
        </Link>
        <Link to="/contas">Contas</Link>
        <Link to="/relatorios">Relatorios</Link>
        <Link to="/about">Sobre</Link>
        <a onClick={()=>{
          window.confirm("Deseja realmente sair? "),
          handleLogout()
        }}>Sair</a>
    </nav>
  )
};

export default Nav;
