import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";
import { AplicacaoMain } from "./AplicacaoStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

const Aplicacao = () => {
  return (
    <>
      <AplicacaoMain>
        <Navigation />
        <h1>Introdução</h1>
        <section className="SecaoIntroducao">
          <FontAwesomeIcon icon={faSeedling} />
          <div className="introducaoTexto">
          <p>O projeto Sistema de Monitoramento do Solo tem foco no desenvolvimento e cuidados com o crescimento de plantas.</p>
          <p>Nosso objetivo é trazer praticidade para o plantio domiciliar, através da implementação tecnólogica que auxiliará em todos os cuidados da sua plantinha.</p>
          <p>O sistema contará com controle em tempo real de onde estiver, monitorando a planta por imagens, que conseguirão detectar a presença de doenças e/ou anomalias, e também contará com o controle de nutrientes e estatísticas como: Nitrogênio, Fósforo, Potássio (NPK), umidade, temperatura e pH.</p>
          </div>
        </section>
    
        {/* <br></br><br></br>Monitoramentos: <br></br><br></br>Nitrogênio, Fosfóro, Potássio, umidade, temperatura e pH</p> */}
      </AplicacaoMain>
      <Footer />
    </>
  );
};

export default Aplicacao;
