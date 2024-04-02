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
            <FontAwesomeIcon icon={faSpa} />
            <h3>Espécies</h3>
            <p>Gerenciamento de espécies ativas</p>
          </button>
          <button className="botaoMenu">
            <FontAwesomeIcon icon={faFolder} />
            <h3>Em breve</h3>
            <p></p>
          </button>
          <button className="botaoMenu">
            <FontAwesomeIcon icon={faFolder} />
            <h3>Em breve</h3>
            <p></p>
          </button>
          <button className="botaoMenu">
            <FontAwesomeIcon icon={faFolder} />
            <h3>Em breve</h3>
            <p></p>
          </button>
        </section>
      </PainelAdmStyle>
      <Footer />
    </>
  );
};

export default PainelAdm;
