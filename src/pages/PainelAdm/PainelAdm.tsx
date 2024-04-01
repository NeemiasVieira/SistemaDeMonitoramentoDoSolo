import React from "react";
import { PainelAdmStyle } from "./PainelAdmStyle";
import { Navigation } from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faSpa } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const PainelAdm = () => {
  const auth = localStorage.getItem("token") ? true : false;
  const navigate = useNavigate();

  return (
    <>
      <PainelAdmStyle>
        <Navigation auth={auth} />
        <h2>Painel Administrativo</h2>
        <section className="menu">
          <button className="botaoMenu especies" onClick={() => navigate("/adm/especies")}>
            <h3>Espécies</h3>
            <FontAwesomeIcon icon={faSpa} />
          </button>
          <button className="botaoMenu">
            <h3>Em breve</h3>
            <FontAwesomeIcon icon={faFolder} />
          </button>
          <button className="botaoMenu">
            <h3>Em breve</h3>
            <FontAwesomeIcon icon={faFolder} />
          </button>
          <button className="botaoMenu">
            <h3>Em breve</h3>
            <FontAwesomeIcon icon={faFolder} />
          </button>
        </section>
      </PainelAdmStyle>
      <Footer />
    </>
  );
};

export default PainelAdm;
