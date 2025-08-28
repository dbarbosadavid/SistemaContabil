import React from "react";
import { Link } from "react-router-dom"
import { SubMenu } from "./SubMenu";

const Nav: React.FC = () => {
  return (
    <nav id="nav">
        <Link to="/">Home</Link>
        <SubMenu 
            title="Lançamento" 
            items={["Criar Lançamento", 
                    "Editar Lançamento",
                    "Excluir Lançamento",
                    "Listar Lançamentos",
                    "Pesquisar Lançamento"]} 
            
        />
        <SubMenu 
            title="Contas" 
            items={["Contas a pagar", "Contas a receber"]} 
           
        />
        <SubMenu 
            title="Relatórios" 
            items={["Gerar Relatório"]} 
            
        />

        <Link to="/about">Sobre</Link>
    </nav>
  )
};

export default Nav;
