import React from "react";

const Contas: React.FC = () => {
    return (
        <>
            <h1>Contas a Pagar / Receber</h1>
            <button>Nova Conta</button>

            <table border={1}>
                <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Vencimento</th>
                    <th>Valor</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Aluguel</td>
                    <td>05/09/2025</td>
                    <td>R$ 1.200,00</td>
                    <td>Pendente</td>
                    <td><button>Pagar</button> <button>Editar</button></td>
                </tr>
                </tbody>
            </table>
        </>

    )
}

export default Contas;