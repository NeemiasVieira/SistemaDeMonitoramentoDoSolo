import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faChartLine, faFileWaveform, faImage } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { PainelMenuStyle } from "./MenuStyle";
import { BotaoVoltar } from "../../../components/BotaoVoltar/BotaoVoltar";

const PainelMenu = () => {
  const navigate = useNavigate();
  const { idPlanta } = useParams();

  return (
      <PainelMenuStyle>
        <BotaoVoltar path="/painel"/>
        <h2>Gerencie sua planta</h2>
        <section className="menu">
          <button className="botaoMenu" onClick={() => navigate(`/painel/plantas/${idPlanta}/resumo`)}>
            <FontAwesomeIcon icon={faBorderAll} />
            <h3>Resumo</h3>
            <p>Tudo em um lugar só</p>
          </button>
          <button className="botaoMenu" >
            <FontAwesomeIcon icon={faChartLine} />
            <h3>Histórico em gráfico</h3>
            <p>Visualizaçao clara do histórico</p>
          </button>
          <button className="botaoMenu" >
            <FontAwesomeIcon icon={faFileWaveform} />
            <h3>Relatório de Saúde</h3>
            <p></p>
          </button>
          <button className="botaoMenu">
            <FontAwesomeIcon icon={faImage} />
            <h3>Diagnóstico e Imagem com IA</h3>
            <p></p>
          </button>
        </section>
      </PainelMenuStyle>
  );
};

export default PainelMenu;
