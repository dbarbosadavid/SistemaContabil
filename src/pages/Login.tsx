import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function validaLogin(login: String, senha: String){
    const preLogin = 'david';
    const preSenha = '123' 

    if (preLogin == login && preSenha == senha){
        return true
    }
    else {
        return false
    }
}
// toDO: referenciar a página de login na rota e no nav
const Login: React.FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        navigate("/page/dashboard");
    };
    
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Usuário"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <br />
                <input
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <br />
                <button type="submit">Entrar</button>
            </form>
        </>
    )
}

export default Login;