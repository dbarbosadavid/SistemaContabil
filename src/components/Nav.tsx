import React from "react";
import { Link } from "react-router-dom"
import { SubMenu } from "./SubMenu";
import '../Nav.css';

const Nav: React.FC = () => {
  return (
    <nav id="nav">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/usuarios">Usuarios</Link>
        <Link to="/lancamentos">Lancamentos</Link>
        <Link to="/contas">Contas</Link>
        <Link to="/relatorios">Relatorios</Link>

{/*
        <SubMenu 
            title="Lançamento" 
            items={["Criar Lançamento", 
                    "Editar Lançamento",
                    "Excluir Lançamento",
                    "Listar Lançamentos",
                    "Pesquisar Lançamento"
                  ]}
            left="1rem"
        />
        <SubMenu 
            title="Contas" 
            items={["Cadastrar Conta", 
                    "Pagar Conta",
                    "Receber Conta",
                    "Editar Conta",
                    "Listar Contas",
                  ]} 
            left="20rem"
        />
        <SubMenu 
            title="Relatórios" 
            items={["Gerar Relatório"]} 
            left="37rem"
      
        /> 
*/}
        <Link to="/about">Sobre</Link>
    </nav>
  )
};

export default Nav;
