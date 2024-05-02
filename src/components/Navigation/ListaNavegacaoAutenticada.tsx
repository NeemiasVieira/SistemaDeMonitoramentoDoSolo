import React from "react";
import { Link } from "react-router-dom";
import { IconeLogoSms } from "../Icones/sms-logo";
import { useApplication } from "../../contexts/ApplicationContext";
import { useThemes } from "../../contexts/ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

interface ListaNavegacaoProps {
  closeModal?: () => void;
}

export const ListaNavegacaoAutenticada: React.FC<ListaNavegacaoProps> = ({ closeModal }) => {
  const urlCompleta = window.location.href;
  const caminhoAtual = String(new URL(urlCompleta).pathname);
  const { theme, toggleTheme } = useThemes();
  const { Logout, isAdmin } = useApplication();
  console.log(caminhoAtual);

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
      <li className={caminhoAtual.includes("/painel") ? "selecionado" : "naoSelecionado"}>
        <Link to="/painel" onClick={closeModal}>
          Painel de Controle
        </Link>
      </li>
      {isAdmin && (
        <li>
          <Link to="/adm/painel" className="mobileOnly" onClick={closeModal}>
            Painel Administrativo
          </Link>
        </li>
      )}
      <li className="switchTheme mobileOnly">
        {theme === "light" ? <FontAwesomeIcon icon={faSun} className="mobileOnly"/> : <FontAwesomeIcon icon={faMoon} className="mobileOnly" />}
        <label className="switch mobileOnly">
          <input type="checkbox" onChange={toggleTheme} checked={theme === "light" ? false : true} className="mobileOnly" />
          <span className="slider round mobileOnly"></span>
        </label>
      </li>
      <li>
        <Link to="/" onClick={Logout} className="logoutMobileButton">
          Logout
        </Link>
      </li>
    </ul>
  );
};
