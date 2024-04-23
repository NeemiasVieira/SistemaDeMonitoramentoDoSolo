import React, { useEffect } from "react";
import { PagRegistroStyle } from "./PagRegistroStyle";
import { useRegistrosContext } from "../../../../contexts/RegistrosContext";
import { BotaoVoltar } from "../../../../components/Buttons/BotaoVoltar";
import { DadosRegistro } from "../../../../components/DadosRegistro/DadosRegistro";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileWaveform } from "@fortawesome/free-solid-svg-icons";

const PagRegistro = () => {
  const { registroEmMemoria: registro, backUrl } = useRegistrosContext();
  const { idRegistro } = useParams();

  return (
  <PagRegistroStyle>
    <BotaoVoltar path={backUrl}/>
    <h1>Registro Detalhado</h1>
    {registro && (
      <>
        <h2 className="nuRegistro">{registro.nuRegistro}º</h2>
        <Link to={`/painel/registros/${idRegistro}/saude`} className="botaoSaude"><FontAwesomeIcon icon={faFileWaveform}/> Saúde do Relatório</Link>
        <div className="DadosSensores">
          <DadosRegistro registro={registro} ultimaAtualizacao={false}/>
        </div>
        
        {registro?.imagem && (
          <div className="imagemEDiagnosticoDiv">
            <h3>Imagem e Diagnóstico</h3>
            <div className="imagemEDiagnostico">
              <img src={registro.imagem} alt="" />
              <p><b>Diagnóstico: </b>{registro?.diagnostico}</p>
            </div>
          </div>
        )}
        
      </>
    )}
  </PagRegistroStyle>
    )
};

export default PagRegistro;
