import React from "react";
import { CadastroMain } from "./CadastroStyle";
import Navigation from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";
import { CadastroConcluido } from "../../components/CadastroConcluido/CadastroConcluido";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import { auth } from "../../services/firebaseConfig";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { MensagemDeErro } from "../../components/MensagemDeErro/MensagemDeErro";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [senha1, setSenha1] = useState("");
  const [senha2, setSenha2] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return <MensagemDeErro erro={error.message} />;
  }

  if (loading) {
    return <Loading />;
  }

  if (user) return <CadastroConcluido />;

  function VerificaSenha(e) {
    e.preventDefault();

    if (senha1 === senha2) {
      return senha1;
    } else {
      return -1;
    }
  }

  function Cadastrar(e) {
    if (typeof VerificaSenha(e) == "string") {
      createUserWithEmailAndPassword(email, senha1);
    } else {
      alert("As senhas não correspondem!");
    }
  }

  return (
    <>
      <CadastroMain>
        <Navigation />
        <h1>Sistema de Monitoramento de Solo</h1>
        <h2>Cadastramento de Novo Usuário</h2>

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
            value={senha1}
            onChange={(e) => {
              {
                setSenha1(e.target.value);
              }
            }}
          />

          <label htmlFor="">Confirmação</label>

          <input
            type="password"
            placeholder="Confirme sua senha"
            value={senha2}
            onChange={(e) => {
              setSenha2(e.target.value);
            }}
          />

          <button onClick={(e) => Cadastrar(e)}>Login</button>
          <div className="sugestaoLogin">
            <p>Já possui cadastro?</p>
            <Link to="/login">Faça Login</Link>
          </div>
        </form>
      </CadastroMain>
      <Footer />
    </>
  );
};

export default Cadastro;
