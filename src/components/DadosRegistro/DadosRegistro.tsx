import React from "react";
import styled from "styled-components";
import { DadosRegistroStyle } from "./DadosRegistroStyle";
import { FormatarDatas } from "../../assets/utils/FormatDate";
import { RecordQuery } from "../GraficoLinhas/Types";

interface DadosRegistroProps {
  registro: RecordQuery;
  ultimaAtualizacao: boolean;
}

const InfoStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 10px;

  .nomeInfo {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 10%;
    margin: 2px;
  }

  .valorInfo,
  .valorInfo2 {
    font-size: 32px;
    font-weight: 700;
  }

  .valorInfo {
    margin: 18px 0 0 0;
  }

  .valorInfo2 {
    margin: 0;
  }

  .unidadeMedida {
    color: var(--gray-primary);
    font-size: 16px;
    font-weight: 700;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    width: 90px;
    height: 90px;
    padding: 15px;
    border: solid var(--light-green) 10px;
    border-radius: 150px;
  }

  @media screen and (max-width: 480px) {
    div {
      width: 70px;
      height: 70px;
    }

    .unidadeMedida {
      font-size: 12px;
    }
    .valorInfo,
    .valorInfo2 {
      font-size: 25px;
    }

    .valorInfo {
      margin: 0px;
    }
  }
`;

interface InfoProps {
  nomeInfo: string;
  valorInfo: string;
  unidadeMedida?: string;
}

const Info: React.FC<InfoProps> = ({ nomeInfo, valorInfo, unidadeMedida }) => {
  return (
    <InfoStyle>
      <p className="nomeInfo">{nomeInfo}</p>
      <div>
        {unidadeMedida && <p className="valorInfo">{valorInfo}</p>}
        {!unidadeMedida && <p className="valorInfo2">{valorInfo}</p>}

        <span className="unidadeMedida">{unidadeMedida ? unidadeMedida : ""}</span>
      </div>
    </InfoStyle>
  );
};

export const DadosRegistro: React.FC<DadosRegistroProps> = ({ registro, ultimaAtualizacao }) => {
  return (
    <DadosRegistroStyle>
      {registro && (
        <div className="Infos">
          <Info nomeInfo="Nitrogenio" valorInfo={registro.nitrogenio} unidadeMedida="mg/Kg" />
          <Info nomeInfo="Fósforo" valorInfo={registro.fosforo} unidadeMedida="mg/Kg" />
          <Info nomeInfo="Potássio" valorInfo={registro.potassio} unidadeMedida="mg/Kg" />
          <Info nomeInfo="Luz" valorInfo={registro.luz} unidadeMedida="%" />
          <Info nomeInfo="Temperatura" valorInfo={registro.temperatura} unidadeMedida="°C" />
          <Info nomeInfo="Umidade" valorInfo={registro.umidade} unidadeMedida="%" />
          <Info nomeInfo="pH" valorInfo={registro.pH} />
        </div>
      )}

      {registro && (
        <p className="InfoUltimaAtualizacao">
          {ultimaAtualizacao
            ? FormatarDatas.atualizadoA(registro.dataDeRegistro)
            : FormatarDatas.completao(registro.dataDeRegistro)}
        </p>
      )}
    </DadosRegistroStyle>
  );
};
