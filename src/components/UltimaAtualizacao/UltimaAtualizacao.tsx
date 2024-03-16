import React from "react";
import { UltimaAtualizacaoStyle } from "./UltimaAtualizacaoStyle";
import { formatRelativeTime } from "../GraficoBarras/GraficoBarras";
import { IRegistro } from "../../interfaces/RecordsModule/registro.interface";
import styled from "styled-components";

interface UltimaAtualizacaoProps{
  registro: IRegistro
}

const InfoStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 10px;

  .nomeInfo{
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 10%;
  }

  .valorInfo, .valorInfo2{
    font-size: 40px;
    font-weight: 700;
  }

  .valorInfo{
    margin: 22px 0 0 0;
  }

  .valorInfo2{
    margin: 0;
  }

  .unidadeMedida{
    color: var(--gray-primary);
    font-size: 18px;
    font-weight: 700;
  }

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    width: 125px;
    height: 125px;
    padding: 20px;
    border: solid var(--light-green) 10px;
    border-radius: 150px;
  }

  @media screen and (max-width: 480px) {
    div{
      width: 70px;
      height: 70px;
    }

    .unidadeMedida{
      font-size: 12px;
    } 
    .valorInfo, .valorInfo2{
      font-size: 25px;
    }

    .valorInfo{
      margin: 0px;
    }
  }
`

interface InfoProps{
  nomeInfo: string;
  valorInfo: string;
  unidadeMedida?: string
}

const Info: React.FC<InfoProps> = ({nomeInfo, valorInfo, unidadeMedida}) => {
  return(
    <InfoStyle>
    <p className="nomeInfo">{nomeInfo}</p>
    <div>
      {unidadeMedida && <p className="valorInfo">{valorInfo}</p>}
      {!unidadeMedida && <p className="valorInfo2">{valorInfo}</p>}
      
      <span className="unidadeMedida">{unidadeMedida ? unidadeMedida : ""}</span>
    </div>
    </InfoStyle>
  )
}

export const UltimaAtualizacao: React.FC<UltimaAtualizacaoProps> = ({ registro }) => {
  return (
    <UltimaAtualizacaoStyle>

            {registro && (
              <div className="Infos">

              <Info nomeInfo="Nitrogenio" valorInfo={registro.nitrogenio} unidadeMedida="mg/Kg"/>
              <Info nomeInfo="Fósforo" valorInfo={registro.fosforo} unidadeMedida="mg/Kg"/>
              <Info nomeInfo="Potássio" valorInfo={registro.potassio} unidadeMedida="mg/Kg"/>
              <Info nomeInfo="Luz" valorInfo="50" unidadeMedida="%"/>
              <Info nomeInfo="Temperatura" valorInfo={registro.temperatura} unidadeMedida="°C"/>
              <Info nomeInfo="Umidade" valorInfo={registro.umidade} unidadeMedida="%"/>
              <Info nomeInfo="pH" valorInfo={registro.pH} />
              </div>
            )}

      {registro && (
        <p className="InfoUltimaAtualizacao">
          {formatRelativeTime(registro.dataDeRegistro)}
        </p>
      )}
    </UltimaAtualizacaoStyle>
  );
};
