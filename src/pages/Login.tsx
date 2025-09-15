import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logado:", userCredential.user);
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuário criado:", userCredential.user);
      alert("Usuário criado com sucesso!");
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <>
        <h1>Bem Vindo!!!</h1>
        <h1>Login</h1>
        <form>
            <input
                id="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <input
                id="password"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setSenha(e.target.value)}
            />
            <br/>
            <button onClick={handleLogin}>Entrar</button>
            <button onClick={handleSignup}>Cadastrar</button>
        </form>
    </>
  );
};

export default Login;
