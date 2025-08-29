import React from "react";

const Relatorios: React.FC = () => {
  return (
    <>
        <h1>Relatórios Financeiros</h1>

        <form>
            <label>Período:</label>
            <input type="date" /> até <input type="date" />
            <button type="submit">Gerar</button>
        </form>

        <h2>Resumo</h2>
        <p>Total Receitas: R$ 5.000,00</p>
        <p>Total Despesas: R$ 2.000,00</p>
        <p>Saldo: R$ 3.000,00</p>

    </>
  )
  
};

export default Relatorios;
