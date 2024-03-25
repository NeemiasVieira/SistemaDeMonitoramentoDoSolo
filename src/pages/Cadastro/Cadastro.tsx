import React, { useState, useEffect } from "react";
import { CadastroMain } from "./CadastroStyle";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { Footer } from "../../components/Footer/Footer";
import { CadastroConcluido } from "../../components/CadastroConcluido/CadastroConcluido";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faAt, faA } from "@fortawesome/free-solid-svg-icons";
import { Navigation } from "../../components/Navigation/Navigation";
import { useNotificacoes } from "../../contexts/NotificacoesProvider";
import { useSignUp } from "../../services/API/Users/useSignup";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha1, setSenha1] = useState("");
  const [senha2, setSenha2] = useState("");
  const { notificar } = useNotificacoes();
  let { signupResponse, isLoading, error, refetch } = useSignUp({email, nome, senha: senha1})

  const notificarErro = () => notificar({tipo: "ERRO", mensagem: error, tempoEmSeg: 3});

  useEffect(() => {
    if(error) notificarErro();
  }, [error]);

  if (signupResponse?.id) return <CadastroConcluido />;

  const VerificaSenha = () => {return senha1 === senha2 ? true : false;}

  const Cadastrar = async (e: any) => {
    e.preventDefault();

    if (!VerificaSenha()) {
      error = "As senhas não correspondem";
      notificarErro();
      return;
    }
    await refetch();
    
    if(error) notificarErro();
  };

  return (
    <>
      <CadastroMain>
        <Navigation/>
        <h2>Cadastro</h2>

        {isLoading && <Loading minHeight={"60vh"}/>}

        {!isLoading && (<form onSubmit={(e) => Cadastrar(e)}>
          <label htmlFor="">Nome</label>
          <div className="divInput">
            <div className="divIcon"><FontAwesomeIcon icon={faA} /></div>
            <input
              type="text"
              placeholder="Digite o seu nome"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
          </div>
          <label htmlFor="">E-mail</label>
          <div className="divInput">
            <div className="divIcon"><FontAwesomeIcon icon={faAt} /></div>
            <input
              type="text"
              placeholder="Digite o seu e-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <label htmlFor="">Senha</label>
          <div className="divInput">
            <div className="divIcon"><FontAwesomeIcon icon={faKey} /></div>
            <input
              type="password"
              placeholder="Digite a sua senha"
              value={senha1}
              onChange={(e) => setSenha1(e.target.value)}
            />
          </div>
          <label htmlFor="">Confirmar Senha</label>
          <div className="divInput">
            <div className="divIcon"><FontAwesomeIcon icon={faKey} /></div>
            <input
              type="password"
              placeholder="Confirme sua senha"
              value={senha2}
              onChange={(e) => {
                setSenha2(e.target.value);
              }}
            />
          </div>
          <button className="botaoCadastrar" onClick={(e) => Cadastrar(e)}>
            Cadastrar
          </button>
          <div className="sugestaoCadastro">
            <p>Já possui cadastro?</p>
            <Link to="/login" className="jaPossuiCadastro">
              Faça Login
            </Link>
          </div>
        </form>)}
      </CadastroMain>
      <Footer />
    </>
  );
};

export default Cadastro;
