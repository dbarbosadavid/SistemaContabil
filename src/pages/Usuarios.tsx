import React from "react";

const Usuarios: React.FC = () => {
  return (
    <>
        <h1>Gestão de Usuários</h1>
        <button>Novo Usuário</button>

        <table border={1}>
            <thead>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Perfil</th>
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Maria</td>
                <td>maria@email.com</td>
                <td>Admin</td>
                <td><button>Editar</button> <button>Excluir</button></td>
            </tr>
            </tbody>
        </table>
    </>
  )
}

export default Usuarios;