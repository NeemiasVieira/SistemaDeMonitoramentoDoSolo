import React from "react";
import { RelatorioDeSaudeStyle } from "./RelatorioDeSaudeStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinWide as feliz2, faFaceSmile as feliz1, faFaceMeh as neutro, faFaceFrownOpen as triste} from "@fortawesome/free-solid-svg-icons"; 
import { Alerta } from "../Alerta/Alerta";
import { IRelatorioSaudePlanta } from "../../interfaces/PlantsModule/planta.interface";
import { Saude } from "../../pages/privatePages/MinhaPlanta/minha-planta.types";

const getPropertyColorClass = (value: string) => {
    if (value === "Deficiência") {
      return "bolinha-vermelha";
    } else if (value === "Excesso") {
      return "bolinha-amarela";
    } else {
      return "bolinha-verde";
    }
  }

export const formatoDateBR = (inputDateString: string) => {
    const date = new Date(inputDateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const formattedString = `${day}/${month}/${year} - ${hours}:${minutes}`;  
    return formattedString;
  };

interface RelatorioDeSaudeProps{
  relatorio: Saude
}

export const RelatorioDeSaude: React.FC<RelatorioDeSaudeProps> = ({ relatorio }) => {    

  return (
    <RelatorioDeSaudeStyle>
        <div className="SaudeEAlertas">
      <div className="Saude">
      <h1>Relatório de Saúde</h1>
      <div className="RelatorioCore">
        <div className="estadoGeral">        
        {relatorio?.estadoGeral === "Excelente!" && <span className="feliz2"><FontAwesomeIcon icon={feliz2} /></span>}
        {relatorio?.estadoGeral === "Bom" && <span className="feliz1"><FontAwesomeIcon icon={feliz1} /></span>}
        {relatorio?.estadoGeral === "Regular" && <span className="neutro"><FontAwesomeIcon icon={neutro} /></span>}
        {relatorio?.estadoGeral === "Ruim" && <span className="triste"><FontAwesomeIcon icon={triste} /></span>}
        <p><strong>Estado Geral: </strong>{relatorio?.estadoGeral}</p>
        </div>
        <div className="Dados">
        <p>
        <span className={`bolinha ${getPropertyColorClass(relatorio?.nitrogenio)}`}></span>
        <strong>Nitrogênio: </strong>
        {relatorio?.nitrogenio}
      </p>
      <p>
        <span className={`bolinha ${getPropertyColorClass(relatorio?.fosforo)}`}></span>
        <strong>Fósforo: </strong>
        {relatorio?.fosforo}
      </p>
      <p>
        <span className={`bolinha ${getPropertyColorClass(relatorio?.potassio)}`}></span>
        <strong>Potássio: </strong>
        {relatorio?.potassio}
      </p>
      <p>
        <span className={`bolinha ${getPropertyColorClass(relatorio?.umidade)}`}></span>
        <strong>Umidade: </strong>
        {relatorio?.umidade}
      </p>
      <p>
        <span className={`bolinha ${getPropertyColorClass(relatorio?.temperatura)}`}></span>
        <strong>Temperatura: </strong>
        {relatorio?.temperatura}
      </p>
      <p>
        <span className={`bolinha ${getPropertyColorClass(relatorio?.pH)}`}></span>
        <strong>pH: </strong>
        {relatorio?.pH}
      </p>
        </div>
      </div>          
      </div>
      <div className="alertas">
        <h1>Alertas</h1>
        {relatorio?.alertas.length > 0 &&
        relatorio?.alertas.map((alerta) => <Alerta key={Math.random()} alerta={alerta}/>)}
        {relatorio?.alertas.length === 0 && <Alerta/>}
      </div>
      </div>
      <p><strong>Última atualização: </strong>{formatoDateBR(relatorio?.ultimaAtualizacao)}</p> 
      
    </RelatorioDeSaudeStyle>
  );
};
