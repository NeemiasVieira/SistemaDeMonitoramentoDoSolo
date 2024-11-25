import { FormatarDatas } from '@assets/utils/FormatDate';
import React from 'react';
import styled from 'styled-components';
import { DadosRegistroStyle } from './DadosRegistroStyle';
import { Record } from '@services/API/Records/useGetAllRecordsPaginated';
import { Specie } from '@components/Especie/Types';
import { formatarExibicao, getInfoColor } from './Contract';

interface DadosRegistroProps {
  registro: Record;
  especie: Specie;
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
    border: solid var(--text-secondary) 10px;
    border-radius: 150px;
  }

  .Saudavel {
    border: solid var(--light-green) 10px;
  }

  .Excesso {
    border: solid #ffd520 10px;
  }

  .Deficiencia {
    border: solid #ff0000 10px;
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
  cor: string;
  unidadeMedida?: string;
}

const Info: React.FC<InfoProps> = ({ nomeInfo, valorInfo, unidadeMedida, cor }) => {
  return (
    <InfoStyle>
      <p className="nomeInfo">{nomeInfo}</p>
      <div className={cor}>
        {unidadeMedida && <p className="valorInfo">{valorInfo}</p>}
        {!unidadeMedida && <p className="valorInfo2">{valorInfo}</p>}

        <span className="unidadeMedida">{unidadeMedida ? unidadeMedida : ''}</span>
      </div>
    </InfoStyle>
  );
};

export const DadosRegistro: React.FC<DadosRegistroProps> = ({ registro, ultimaAtualizacao, especie }) => {
  return (
    <DadosRegistroStyle>
      {registro && (
        <div className="Infos">
          <Info
            nomeInfo="Nitrogênio"
            valorInfo={formatarExibicao(registro.nitrogenio)}
            unidadeMedida="mg/kg"
            cor={getInfoColor(registro.nitrogenio, especie?.parametros.nitrogenio)}
          />
          <Info
            nomeInfo="Fósforo"
            valorInfo={formatarExibicao(registro.fosforo)}
            unidadeMedida="mg/kg"
            cor={getInfoColor(registro.fosforo, especie?.parametros.fosforo)}
          />
          <Info
            nomeInfo="Potássio"
            valorInfo={formatarExibicao(registro.potassio)}
            unidadeMedida="mg/kg"
            cor={getInfoColor(registro.potassio, especie?.parametros.potassio)}
          />
          <Info
            nomeInfo="Luz"
            valorInfo={formatarExibicao(registro.lux)}
            unidadeMedida="lux"
            cor={getInfoColor(registro.lux, especie?.parametros.luz)}
          />
          {/* <span className="toolTip">
            <Tooltip texts={[`Valor registrado pelo sensor de luminosidade: ${registro.lux} lux`]} />
          </span> */}
          <Info
            nomeInfo="Temperatura"
            valorInfo={formatarExibicao(registro.temperatura)}
            unidadeMedida="°C"
            cor={getInfoColor(registro.temperatura, especie?.parametros.temperatura)}
          />
          <Info
            nomeInfo="Umidade"
            valorInfo={formatarExibicao(registro.umidade)}
            unidadeMedida="%"
            cor={getInfoColor(registro.umidade, especie?.parametros.umidade)}
          />
          <Info
            nomeInfo="pH"
            valorInfo={formatarExibicao(registro.pH)}
            cor={getInfoColor(registro.pH, especie?.parametros.pH)}
          />
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
