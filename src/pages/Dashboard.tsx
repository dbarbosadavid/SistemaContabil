import React from "react";

const Dashboard: React.FC = () => {
  return (
    <>
        <h1>Dashboard</h1>
        <p>Saldo Atual: R$ 10.000,00</p>

        <h2>Resumo</h2>
        <ul>
            <li>Receitas: R$ 15.000,00</li>
            <li>Despesas: R$ 5.000,00</li>
            <li>Contas a pagar: 3</li>
            <li>Contas a receber: 2</li>
        </ul>
    </>
  )
  
};

export default Dashboard;
