import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";

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

  const signInWithGoogle = async () => {
      try {
          const result = await signInWithPopup(auth, provider);
          // O usuário logou com sucesso!
          const user = result.user;
          console.log("Usuário logado:", user);
          // Você pode redirecionar o usuário ou atualizar o estado do app aqui
      } catch (error: any) {
          // Lidar com erros aqui.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Erro ao fazer login com Google:", errorCode, errorMessage);
      }
  };


  return (
    <>
      <img src="src\assets\dbit-logo.png" alt="" id="dbit-logo"/>      
      <h1>Bem vindo ao DBIT!!!</h1>
      <div id="form">

        <form>
          <h1>Login</h1>
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
            <br/>
            <p>Não tem conta? Cadastre-se!</p>
            <button onClick={handleSignup}>Cadastrar-se</button>
        </form>
        <button onClick={signInWithGoogle}>
          <img src="src\assets\google-logo.png" width="30"/>
          <br/>
          Logar com Google
        </button>
      </div>

    </>
  );
};

export default Login;
