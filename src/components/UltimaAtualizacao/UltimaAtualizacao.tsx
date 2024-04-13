import React from "react";
import { UltimaAtualizacaoStyle } from "./UltimaAtualizacaoStyle";
import { formatRelativeTime } from "../GraficoBarras/GraficoBarras";
import { IRegistro } from "../../interfaces/RecordsModule/registro.interface";
import styled from "styled-components";

interface UltimaAtualizacaoProps{
  registro: IRegistro
  ultimaAtualizacao: boolean;
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
    margin: 2px;
  }

  .valorInfo, .valorInfo2{
    font-size: 32px;
    font-weight: 700;
  }

  .valorInfo{
    margin: 18px 0 0 0;
  }

  .valorInfo2{
    margin: 0;
  }

  .unidadeMedida{
    color: var(--gray-primary);
    font-size: 16px;
    font-weight: 700;
  }

  div{
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

const mapearDia = (dia: number) => {
  switch (dia) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda-feira";
    case 2:
      return "Terça-feira";
    case 3:
      return "Quarta-feira";
    case 4:
      return "Quinta-feira";
    case 5:
      return "Sexta-feira";
    case 6:
      return "Sábado";
  }
}

const mapearMes = (mes: string) => {
  switch (Number(mes)) {
    case 0:
      return "Janeiro";
    case 1:
      return "Fevereiro";
    case 2:
      return "Março";
    case 3:
      return "Abril";
    case 4:
      return "Maio";
    case 5:
      return "Junho";
    case 6:
      return "Julho";
    case 7:
      return "Agosto";
    case 8:
      return "Setembro";
    case 9:
      return "Outubro";
    case 10:
      return "Novembro";
    case 11:
      return "Dezembro";
    default:
      return "";
  }
}


const formatarData = (data: string) => {
  const novaData = new Date(data);
  const dia = novaData.getDate().toString().padStart(2, '0');
  const mes = (novaData.getMonth() + 1).toString().padStart(2, '0'); 
  const ano = novaData.getFullYear();
  const hora = novaData.getHours().toString().padStart(2, '0');
  const minuto = novaData.getMinutes().toString().padStart(2, '0');
  const day = novaData.getDay();
  
  return `${mapearDia(day)}, ${dia} de ${mapearMes(mes)} de ${ano} as ${hora}:${minuto}h`;
}

export const UltimaAtualizacao: React.FC<UltimaAtualizacaoProps> = ({ registro, ultimaAtualizacao }) => {
  return (
    <UltimaAtualizacaoStyle>

            {registro && (
              <div className="Infos">

              <Info nomeInfo="Nitrogenio" valorInfo={registro.nitrogenio} unidadeMedida="mg/Kg"/>
              <Info nomeInfo="Fósforo" valorInfo={registro.fosforo} unidadeMedida="mg/Kg"/>
              <Info nomeInfo="Potássio" valorInfo={registro.potassio} unidadeMedida="mg/Kg"/>
              <Info nomeInfo="Luz" valorInfo={registro.luz} unidadeMedida="%"/>
              <Info nomeInfo="Temperatura" valorInfo={registro.temperatura} unidadeMedida="°C"/>
              <Info nomeInfo="Umidade" valorInfo={registro.umidade} unidadeMedida="%"/>
              <Info nomeInfo="pH" valorInfo={registro.pH} />
              </div>
            )}

      {registro && (
        <p className="InfoUltimaAtualizacao">
          {ultimaAtualizacao ? formatRelativeTime(registro.dataDeRegistro) : formatarData(registro.dataDeRegistro)}
        </p>
      )}
    </UltimaAtualizacaoStyle>
  );
};
