import React from "react";
import { Link } from "react-router-dom";


// toDO: referenciar a página de login na rota e no nav
const Login: React.FC = () => {
    return (
        <>
            <h1>Login</h1>
            <form>
                <label>E-mail:  </label>
                <input type="email" required /><br></br>

                <label>Senha:  </label>
                <input type="password" required /><br></br>

                <button type="submit" onClick={() => {
                    <Link to="/dashboard"></Link>
                }}>Entrar</button>
            </form>
        </>
    )
}

export default Login;