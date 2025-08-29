import React from "react";


// toDO: referenciar a página de login na rota e no nav
const Login: React.FC = () => {
    return (
        <>
            <h1>Login</h1>
            <form>
                <label>Email:</label>
                <input type="email" required /><br></br>

                <label>Senha:</label>
                <input type="password" required /><br></br>

                <button type="submit">Entrar</button>
            </form>
        </>
    )
}

export default Login;