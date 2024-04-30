import React from "react";
import { IconeLogoSms } from "../Icones/sms-logo";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useThemes } from "../../contexts/ThemeProvider";

interface ListaNavegacaoProps {
  closeModal?: () => void;
}

export const ListaNavegacaoNaoAutenticada: React.FC<ListaNavegacaoProps> = ({ closeModal }) => {
  const urlCompleta = window.location.href;
  const caminhoAtual = new URL(urlCompleta).hash.replace("#", "");
  const { theme, toggleTheme } = useThemes();

  return (
    <ul className="navegacao">
      <li className="logo">
        <IconeLogoSms path={"/"} />
      </li>
      <li className={caminhoAtual === "/aplicacao" ? "selecionado" : "naoSelecionado"}>
        <Link to="/aplicacao" onClick={closeModal}>
          Aplicação
        </Link>
      </li>
      <li className={caminhoAtual === "/faq" ? "selecionado" : "naoSelecionado"}>
        <Link to="/faq" onClick={closeModal}>
          FAQ
        </Link>
      </li>
      <li className="botaoLogin">
        <Link to="/login" onClick={closeModal}>
          Login
        </Link>
      </li>
      <li className="switchTheme">
        {theme === "light" ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        <label className="switch">
          <input type="checkbox" onClick={toggleTheme} checked={theme === "light" ? false : true} />
          <span className="slider round"></span>
        </label>
      </li>
    </ul>
  );
};
