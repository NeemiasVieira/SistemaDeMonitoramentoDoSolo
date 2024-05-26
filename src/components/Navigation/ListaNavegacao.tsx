import React from "react";
import { Link } from "react-router-dom";
import { IconeLogoSms } from "../Icones/sms-logo";
import { useApplication } from "../../contexts/ApplicationContext";
import { useThemes } from "../../contexts/ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useIsMobile } from "../../services/hooks/useIsMobile";

interface ListaNavegacaoProps {
  closeModal?: () => void;
}

export const ListaNavegacao: React.FC<ListaNavegacaoProps> = ({ closeModal }) => {
  const urlCompleta = window.location.href;
  const caminhoAtual = String(new URL(urlCompleta).pathname);
  const { theme, toggleTheme } = useThemes();
  const { Logout, isAdmin, auth } = useApplication();
  const isMobile = useIsMobile();

  const handleLogout = () => {
    closeModal();
    Logout();
  }

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

      {auth && (
        <li className={caminhoAtual.includes("/painel") ? "selecionado" : "naoSelecionado"}>
          <Link to="/painel" onClick={closeModal}>
            Painel de Controle
          </Link>
        </li>
      )}

      {isAdmin && isMobile && (
        <li>
          <Link to="/adm/painel" onClick={closeModal}>
            Painel Administrativo
          </Link>
        </li>
      )}

      {(isMobile || (!isMobile && !auth)) && (
        <li className="switchTheme">
          {theme === "light" ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
          <label className="switch">
            <input type="checkbox" onChange={toggleTheme} checked={theme === "light" ? false : true} />
            <span className="slider round"></span>
          </label>
        </li>
      )}

      {isMobile && auth && (
        <>
          <li>
            <Link to="/" onClick={handleLogout} className="logoutMobileButton">
              Logout
            </Link>
          </li>
        </>
      )}

      {!auth && (
        <li className="botaoLogin">
          <Link to="/login" onClick={closeModal}>
            Login
          </Link>
        </li>
      )}
    </ul>
  );
};
