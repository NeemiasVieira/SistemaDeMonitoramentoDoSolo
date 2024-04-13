import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faChartLine, faFileWaveform, faListUl } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { PainelMenuStyle } from "./MenuStyle";
import { BotaoVoltar } from "../../../components/Buttons/BotaoVoltar";

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
          <button className="botaoMenu" onClick={() => navigate(`/painel/plantas/${idPlanta}/grafico-historico`)}>
            <FontAwesomeIcon icon={faChartLine} />
            <h3>Gráfico do Histórico</h3>
            <p>Visualizaçao clara do histórico</p>
          </button>
          <button className="botaoMenu" onClick={() => navigate(`/painel/plantas/${idPlanta}/relatorio-saude`)}>
            <FontAwesomeIcon icon={faFileWaveform} />
            <h3>Relatório de Saúde</h3>
            <p>Saúde do último registro</p>
          </button>
          <button className="botaoMenu" onClick={() => navigate(`/painel/plantas/${idPlanta}/registros?rpp=10&pag=1`)}>
            <FontAwesomeIcon icon={faListUl} />
            <h3>Todos os registros</h3>
            <p>Todos os detalhes do registro</p>
          </button>
        </section>
      </PainelMenuStyle>
  );
};

export default PainelMenu;
