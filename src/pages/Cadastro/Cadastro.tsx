import React, { useState } from "react";
import { CadastroMain } from "./CadastroStyle";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { CadastroConcluido } from "../../components/CadastroConcluido/CadastroConcluido";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faAt, faA } from "@fortawesome/free-solid-svg-icons";
import { useNotificacoes } from "../../contexts/NotificacoesProvider";
import { useSignUp } from "../../services/API/Users/useSignup";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha1, setSenha1] = useState("");
  const [senha2, setSenha2] = useState("");
  
  const { notificar } = useNotificacoes();
  const { signupResponse, isLoading, confirmCreateUser } = useSignUp({email, nome, senha: senha1})

  if (signupResponse?.id) return <CadastroConcluido />;

  const VerificaSenha = () => {return senha1 === senha2 ? true : false;}

  const Cadastrar = async (e: any) => {
    e.preventDefault();

    if(!nome || !email || !senha1 || !senha2){
      notificar({mensagem: "Todos os campos são obrigatórios", tempoEmSeg: 3, tipo: 'ERRO'});
      return;
    }

    if (!VerificaSenha()) {
      notificar({mensagem: "As senhas não correspondem", tempoEmSeg: 3, tipo: 'ERRO'});
      return;
    }
    confirmCreateUser();
  };

  return (
      <CadastroMain>
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
  );
};

export default Cadastro;
