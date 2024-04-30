import React, { useState } from "react";
import { NavStyle, NavStyleMobile } from "./NavigationStyle";
import { Link } from "react-router-dom";
import { IconeLogoSms } from "../Icones/sms-logo";
import { faArrowRightFromBracket, faPaintRoller, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalNavigation } from "../PopUps/ModalNavigation/ModalNavigation";
import { ListaNavegacaoAutenticada } from "./ListaNavegacaoAutenticada";
import { NavAutenticadaStyle } from "./NavegacaoAutenticadaStyle";
import { formarIniciais } from "./Services";
import { ListaNavegacaoNaoAutenticada } from "./ListaNavegacaoNaoAutenticada";
import { useApplication } from "../../contexts/ApplicationContext";
import { useThemes } from "../../contexts/ThemeProvider";


export const Navigation = () => {
  const [mostrarOpcoesMovimentacoes, setMostrarOpcoesMovimentacoes] = useState<boolean>(false);
  const nome = localStorage.getItem("nome");
  const { Logout, auth, isAdmin } = useApplication();
  const { theme, toggleTheme } = useThemes();

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


                  <li className="switchTheme">
                    <FontAwesomeIcon icon={faPaintRoller} />
                    <span className="texto">Tema {theme === "light" ? "claro" : "escuro"} </span>
                      
                      <label className="switch">
                      <input type="checkbox" onClick={toggleTheme} checked={theme === "light" ? false : true}/>
                      <span className="slider round"></span>
                      </label>
                    </li>

                    {isAdmin && (
                      <li>
                        <Link to="/adm/painel" onClick={toggleOpcoesMovimentacoes}>
                          <FontAwesomeIcon icon={faUserTie} />
                          Painel Administrativo
                        </Link>
                      </li>
                    )}
                    

                    <li>
                      <Link
                        to="/login"
                        onClick={() => {
                          Logout();
                          toggleOpcoesMovimentacoes();
                        }}
                      >
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
            <ModalNavigation auth={auth} />
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
