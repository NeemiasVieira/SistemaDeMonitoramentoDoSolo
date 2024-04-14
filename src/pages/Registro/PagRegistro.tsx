import React, { useEffect } from "react";
import { PagRegistroStyle } from "./PagRegistroStyle";
import { useRegistrosContext } from "../../contexts/RegistrosContext";
import { BotaoVoltar } from "../../components/Buttons/BotaoVoltar";
import { DadosRegistro } from "../../components/DadosRegistro/DadosRegistro";

const PagRegistro = () => {
  const { registroEmMemoria: registro, backUrl } = useRegistrosContext();

  useEffect(() => {
    console.log(backUrl);
  })

  return (
  <PagRegistroStyle>
    <BotaoVoltar path={backUrl}/>
    <h1>Registro Detalhado</h1>
    {registro && (
      <>
        <h2 className="nuRegistro">{registro.nuRegistro}º</h2>
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
