import React from "react";
import { NavAutenticadaStyle } from "./NavAutenticadaStyle";
import { Link, useNavigate } from "react-router-dom";

export const NavAutenticada = () => {
  const navigate = useNavigate();
  const nome = localStorage.getItem("nome");

  const Logout = () => {
    localStorage.removeItem("nome");
    localStorage.removeItem("token");
    navigate("/");

  };

  return (
    <NavAutenticadaStyle>
      <ul className="navegacao">
        <li>
          <Link to="/sistema/home">Início</Link>
        </li>
        <li>
          <Link to="/sistema/minhaplanta">Minha Planta</Link>
        </li>
        <li>
          <Link to="/sistema/home">Ajuda</Link>
        </li>
        <li className="usuario">{nome}</li>
        <li>
          <Link to="/" className="logout">
            <button onClick={Logout}>Sair</button>
          </Link>
        </li>
      </ul>
    </NavAutenticadaStyle>
  );
};
