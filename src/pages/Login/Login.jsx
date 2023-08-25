import React, { useState } from "react";
import { LoginMain } from "./LoginStyle";
import Navigation from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import { Link, Navigate } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { MensagemDeErro } from "../../components/MensagemDeErro/MensagemDeErro";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (error) {
    return <MensagemDeErro erro={error.message}/>
  }
  if (loading) {
    return <Loading/>;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.user.email}</p>
        <Navigate to="/sistema/home" />
        {console.log(user)}
      </div>
    );
  }

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  return (
    <>
      <LoginMain>
        <Navigation />
        <h1>Sistema de Monitoramento de Solo</h1>

        <form type="submit">
          <label htmlFor="">Usuário</label>

          <input
            type="text"
            placeholder="Digite o seu e-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label htmlFor="">Senha</label>

          <input
            type="password"
            placeholder="Digite a sua senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={handleLogin}>Login</button>
          <div className="sugestaoCadastro">
            <p>Não tem cadastro?</p>
            <Link to="/cadastro" className="crieSuaConta">Crie sua conta</Link>
          </div>
        </form>
      </LoginMain>
      <Footer />
    </>
  );
};

export default Login;

//https://www.youtube.com/watch?v=LI0YcHMu9P4
