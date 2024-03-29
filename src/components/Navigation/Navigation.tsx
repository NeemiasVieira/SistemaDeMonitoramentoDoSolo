import React, { useState } from "react";
import { NavAutenticadaStyle, NavStyle, NavStyleMobile } from "./NavigationStyle";
import { Link, useNavigate } from "react-router-dom";
import { IconeLogoSms } from "../Icones/sms-logo";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalNavigation } from "../ModalNavigation/ModalNavigation";
import { useQueryClient } from 'react-query';

const formarIniciais = (nome: string): string => {
  nome = nome.toUpperCase();
  const nomes = nome.split(" ");
  if (nomes.length >= 2) return nomes[0][0] + nomes[1][0];
  return nomes[0][0];
};

interface NavigationProps {
  auth?: boolean;
}

export const ListaNavegacaoAutenticada = () => {
  const urlCompleta = window.location.href;
  const caminhoAtual = new URL(urlCompleta).hash.replace("#", "");
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  const Logout = () => {
    localStorage.removeItem("nome");
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    localStorage.removeItem("sucessoLogin");
    queryClient.removeQueries('login');
    queryClient.invalidateQueries('login');
    queryClient.clear();
    navigate("/");
  };

  return (
    <ul className="navegacao">
      <li className="logo">
        <IconeLogoSms path={"/"} />
      </li>
     
      <li className={caminhoAtual === "/aplicacao" ? "selecionado" : "naoSelecionado"}>
        <Link to="/aplicacao">Aplicação</Link>
      </li>
      <li className={caminhoAtual === "/faq" ? "selecionado" : "naoSelecionado"}>
        <Link to="/faq">FAQ</Link>
      </li>
      <li className={caminhoAtual === "/sistema/minhasplantas" ? "selecionado" : "naoSelecionado"}>
        <Link to="/sistema/minhasplantas">Minhas Plantas</Link>
      </li>
      <li className={caminhoAtual === "/sistema/controle" ? "selecionado" : "naoSelecionado"}>
        <Link to="/sistema/controle">Controle</Link>
      </li>
      {/* <li>
        <Link to="/sistema/minhasplantas">Ajuda</Link>
      </li> */}
      <li>
         <Link to="/" onClick={Logout} className="logoutMobileButton">Logout</Link>
      </li>
    </ul>
  );
};

export const ListaNavegacaoNaoAutenticada = () => {
  const urlCompleta = window.location.href;
  const caminhoAtual = new URL(urlCompleta).hash.replace("#", "");

  return (
    <ul className="navegacao">
      <li className="logo">
        <IconeLogoSms path={"/"} />
      </li>
      <li className={caminhoAtual === "/aplicacao" ? "selecionado" : "naoSelecionado"}>
        <Link to="/aplicacao">Aplicação</Link>
      </li>
      <li className={caminhoAtual === "/faq" ? "selecionado" : "naoSelecionado"}>
        <Link to="/faq">FAQ</Link>
      </li>
      <li className="botaoLogin">
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};

export const Navigation: React.FC<NavigationProps> = ({ auth }) => {
  const [mostrarOpcoesMovimentacoes, setMostrarOpcoesMovimentacoes] = useState<boolean>(false);
  const navigate = useNavigate();
  const nome = localStorage.getItem("nome");
  const Logout = () => {
    localStorage.removeItem("nome");
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    navigate("/");
  };

  const toggleOpcoesMovimentacoes = () => {
    setMostrarOpcoesMovimentacoes(!mostrarOpcoesMovimentacoes);
  };

  return (
    <>
      {auth && (
        <>
        <NavAutenticadaStyle>
          <ListaNavegacaoAutenticada />
          <div className="botaoPerfil" onClick={toggleOpcoesMovimentacoes}>
            <span>{formarIniciais(nome)}</span>
            {mostrarOpcoesMovimentacoes && (
              <div
                className="dropdown-content"
                onClick={(e) => e.stopPropagation()}
                style={{ display: mostrarOpcoesMovimentacoes ? "block" : "none" }}
              >
                <ul>
                  <li>
                    <Link to="/login" onClick={Logout}>
                      <FontAwesomeIcon icon={faArrowRightFromBracket} />
                      Sair
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </NavAutenticadaStyle>

      <NavStyleMobile>
        
        <IconeLogoSms path={"/"} />
      <ModalNavigation auth={auth}/>


      </NavStyleMobile>
      </>

        
      )}

      {!auth && (
        <>
          <NavStyle>
            <ListaNavegacaoNaoAutenticada />
          </NavStyle>

          <NavStyleMobile>
            <IconeLogoSms path={"/"} />
            <ModalNavigation auth={auth} />
          </NavStyleMobile>
        </>
      )}
    </>
  );
};
