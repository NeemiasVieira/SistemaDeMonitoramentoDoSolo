import React from "react";
import { RelatorioDeSaudeStyle } from "./RelatorioDeSaudeStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceGrinWide as feliz2,
  faFaceSmile as feliz1,
  faFaceMeh as neutro,
  faFaceFrownOpen as triste,
} from "@fortawesome/free-solid-svg-icons";
import { Alerta } from "../Alerta/Alerta";
import { Saude } from "@pages/PainelDeControle/Resumo/Resumo.types";
import { SaudeParamsModal } from "../PopUps/SaudeParamsModal/SaudeParamsModal";
import { Specie } from "../Especie/Types";

const getPropertyColorClass = (value: string) => {
  if (value === "Deficiência") {
    return "bolinha-vermelha";
  } else if (value === "Excesso") {
    return "bolinha-amarela";
  } else {
    return "bolinha-verde";
  }
};

interface RelatorioDeSaudeProps {
  especie: Specie;
  relatorio: Saude;
}

export const RelatorioDeSaude: React.FC<RelatorioDeSaudeProps> = ({ relatorio, especie }) => {
  return (
    <RelatorioDeSaudeStyle>
      <h2 className="titulo">Relatorio de Saúde</h2>

      <div className="legenda">
        <h3>Legenda</h3>
        <ul className="valoresLegenda">
          <li>
            <span className="bolinha bolinha-verde"></span>
            <p>Saudável</p>
          </li>
          <li>
            <span className="bolinha bolinha-amarela"></span>
            <p>Excesso</p>
          </li>
          <li>
            <span className="bolinha bolinha-vermelha"></span>
            <p>Deficiência</p>
          </li>
        </ul>
      </div>

      <div className="SaudeEAlertas">
        <div className="Saude">
          <h3>Estado Geral</h3>
          {relatorio?.estadoGeral === "Excelente!" && (
            <span className="feliz2">
              <FontAwesomeIcon icon={feliz2} />
            </span>
          )}
          {relatorio?.estadoGeral === "Bom" && (
            <span className="feliz1">
              <FontAwesomeIcon icon={feliz1} />
            </span>
          )}
          {relatorio?.estadoGeral === "Regular" && (
            <span className="neutro">
              <FontAwesomeIcon icon={neutro} />
            </span>
          )}
          {relatorio?.estadoGeral === "Ruim" && (
            <span className="triste">
              <FontAwesomeIcon icon={triste} />
            </span>
          )}
          <p>
            <span className={`bolinha ${getPropertyColorClass(relatorio?.nitrogenio)}`}></span>
            Nitrogênio
          </p>
          <p>
            <span className={`bolinha ${getPropertyColorClass(relatorio?.fosforo)}`}></span>
            Fósforo
          </p>
          <p>
            <span className={`bolinha ${getPropertyColorClass(relatorio?.potassio)}`}></span>
            Potássio
          </p>
          <p>
            <span className={`bolinha ${getPropertyColorClass(relatorio?.luz)}`}></span>
            Luz
          </p>
          <p>
            <span className={`bolinha ${getPropertyColorClass(relatorio?.umidade)}`}></span>
            Umidade
          </p>
          <p>
            <span className={`bolinha ${getPropertyColorClass(relatorio?.temperatura)}`}></span>
            Temperatura
          </p>
          <p>
            <span className={`bolinha ${getPropertyColorClass(relatorio?.pH)}`}></span>
            pH
          </p>
        </div>
        <div className="alertas">
          <h3>Alertas</h3>
          {relatorio?.alertas.length > 0 &&
            relatorio?.alertas.map((alerta) => <Alerta key={Math.random()} alerta={alerta} />)}
          {relatorio?.alertas.length === 0 && <Alerta />}
        </div>
      </div>
      {especie && <SaudeParamsModal especie={especie} />}
    </RelatorioDeSaudeStyle>
  );
};
