import React from "react";

const Lancamentos: React.FC = () => {
    return (
        <>
            <h1>Lançamentos</h1>
            <button>Novo Lançamento</button>

            <table border={1}>
                <thead>
                <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>01/09/2025</td>
                    <td>Venda de produto</td>
                    <td>Receita</td>
                    <td>R$ 500,00</td>
                    <td>Crédito</td>
                    <td><button>Editar</button> <button>Excluir</button></td>
                </tr>
                </tbody>
            </table>

        </>
    )
}

export default Lancamentos;