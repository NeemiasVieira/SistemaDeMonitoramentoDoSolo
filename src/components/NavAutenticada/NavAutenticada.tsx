import React, { useState } from "react";
import { NavAutenticadaStyle } from "./NavAutenticadaStyle";
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

export const NavAutenticada = () => {
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
    <NavAutenticadaStyle>
      <ul className="navegacao">
        <li>
          <IconeLogoSms />
        </li>
        <li className={caminhoAtual === '/sistema/home' ? 'selecionado' : 'naoSelecionado'}>
          <Link to="/sistema/home">Início</Link>
        </li>
        <li className={caminhoAtual === '/sistema/minhaplanta' ? 'selecionado' : 'naoSelecionado'}>
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
  );
};
