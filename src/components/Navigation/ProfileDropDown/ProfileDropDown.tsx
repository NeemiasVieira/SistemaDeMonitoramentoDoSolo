import { formarIniciais } from "@assets/utils/formatarIniciais";
import {
  faArrowRightFromBracket,
  faLaptop,
  faPaintRoller,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useApplication } from "../../../contexts/ApplicationContext";
import { useThemes } from "../../../contexts/ThemeProvider";
import { ProfileDropDownStyle } from "./ProfileDropDownStyle";

export const ProfileDropDown = () => {
  const { theme, toggleTheme } = useThemes();
  const { isAdmin, Logout, simulationMode, setSimulationMode } =
    useApplication();

  const [mostrarOpcoesMovimentacoes, setMostrarOpcoesMovimentacoes] =
    useState<boolean>(false);
  const toggleOpcoesMovimentacoes = () => {
    setMostrarOpcoesMovimentacoes(!mostrarOpcoesMovimentacoes);
  };

  const nome = localStorage.getItem("nome");

  return (
    <ProfileDropDownStyle onClick={toggleOpcoesMovimentacoes}>
      <span className="Iniciais">{formarIniciais(nome)}</span>
      {mostrarOpcoesMovimentacoes && (
        <div
          className="dropdown-content"
          onClick={(e) => e.stopPropagation()}
          style={{ display: mostrarOpcoesMovimentacoes ? "block" : "none" }}
        >
          <ul>
            <li className="switchThemeOnDropDown">
              <FontAwesomeIcon icon={faPaintRoller} />
              <span className="texto">
                Tema {theme === "light" ? "claro" : "escuro"}{" "}
              </span>

              <label className="switch">
                <input
                  type="checkbox"
                  onChange={toggleTheme}
                  checked={theme === "light" ? false : true}
                />
                <span className="slider round"></span>
              </label>
            </li>

            <li className="switchThemeOnDropDown">
              <FontAwesomeIcon icon={faLaptop} />
              <span className="texto">Modo Simulação</span>

              <label className="switch">
                <input
                  type="checkbox"
                  onChange={() => setSimulationMode((prevValue) => !prevValue)}
                  checked={simulationMode}
                />
                <span className="slider round"></span>
              </label>
            </li>

            {(isAdmin || simulationMode) && (
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
    </ProfileDropDownStyle>
  );
};
