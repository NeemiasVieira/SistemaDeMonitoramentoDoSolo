import React from "react";
import { NavAutenticadaStyle } from "./NavAutenticadaStyle";
import { Link, useNavigate } from "react-router-dom";

export const NavAutenticada = () => {
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
          <Link to="/sistema/home">Início</Link>
        </li>
        <li>
          <Link to="/sistema/minhaplanta">Minha Planta</Link>
        </li>
        <li>
          <Link to="/sistema/home">Ajuda</Link>
        </li>
      </ul>
      <div className="logoutDiv">
        <p className="usuario">{nome}</p>
        <button className="logoutButton" onClick={Logout}>
          Sair
        </button>
      </div>
    </NavAutenticadaStyle>
  );
};
