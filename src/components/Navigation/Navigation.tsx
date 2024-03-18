import React, { useState } from "react";
import { NavAutenticadaStyle, NavStyle } from "./NavigationStyle";
import { Link, useNavigate } from "react-router-dom";
import { IconeLogoSms } from "../Icones/sms-logo";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const formarIniciais = (nome: string): string => {
  nome = nome.toUpperCase();
  const nomes = nome.split(" ");
  if (nomes.length >= 2) return nomes[0][0] + nomes[1][0];
  return nomes[0][0];
};

interface NavigationProps {
  auth?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ auth }) => {
  const [mostrarOpcoesMovimentacoes, setMostrarOpcoesMovimentacoes] = useState<boolean>(false);
  const urlCompleta = window.location.href;
  const caminhoAtual = new URL(urlCompleta).hash.replace("#", "");

  const toggleOpcoesMovimentacoes = () => {
    setMostrarOpcoesMovimentacoes(!mostrarOpcoesMovimentacoes);
  };

  const navigate = useNavigate();
  const nome = localStorage.getItem("nome");
  const Logout = () => {
    localStorage.removeItem("nome");
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    navigate("/");
  };

  return (
    <>
      {auth && (
        <NavAutenticadaStyle>
          <ul className="navegacao">
            <li>
              <IconeLogoSms path={"/sistema/home"}/>
            </li>
            <li className={caminhoAtual === "/sistema/home" ? "selecionado" : "naoSelecionado"}>
              <Link to="/sistema/home">Início</Link>
            </li>
            <li className={caminhoAtual === "/sistema/minhaplanta" ? "selecionado" : "naoSelecionado"}>
              <Link to="/sistema/minhaplanta">Minha Planta</Link>
            </li>
            <li>
              <Link to="/sistema/home">Ajuda</Link>
            </li>
          </ul>
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
      )}

      {!auth && (
        <>
          <NavStyle>
            <ul className="navegacao">
              <li>
                <IconeLogoSms path={"/"}/>
              </li>
              <li className={caminhoAtual === "/" ? "selecionado" : "naoSelecionado"}>
                <Link to="/">Home</Link>
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
          </NavStyle>
        </>
      )}
    </>
  );
};
