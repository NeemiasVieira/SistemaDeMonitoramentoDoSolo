import React from "react";
import { Chart } from "react-google-charts";
import { SecaoGraficoBarras } from "./GraficoBarrasStyle";
import { IRegistro } from "../../interfaces/RecordsModule/registro.interface";

export const formatRelativeTime = (dateStr: string) => {
  const currentDate = new Date();
  const updatedDate = new Date(dateStr);
  const timeDiff:number = currentDate.getTime() - updatedDate.getTime();

  const minutes = Math.floor(timeDiff / 60000);
  if (minutes < 60) {
    return `Valores atualizados há ${minutes} minuto${minutes !== 1 ? "s" : ""}`;
  }

  const hours = Math.floor(timeDiff / 3600000);
  if (hours < 24) {
    return `Valores atualizados há ${hours} hora${hours !== 1 ? "s" : ""}`;
  }

  const days = Math.floor(timeDiff / 86400000);
  if (days < 7) {
    return `Valores atualizados há ${days} dia${days !== 1 ? "s" : ""}`;
  }

  const weeks = Math.floor(days / 7);
  if (weeks < 4) {
    return `Valores atualizados há ${weeks} semana${weeks !== 1 ? "s" : ""}`;
  }

  const months = Math.floor(days / 30);
  if(months !== 1) return `Valores atualizados há ${months} meses`;
  return `Atualizado há ${months} mês`;
  
};

interface GraficoBarrasProps{
  registro: IRegistro
}

const GraficoBarras: React.FC<GraficoBarrasProps> = ({registro}) => {
  let data = [];

  if (registro) {
    const { nitrogenio, fosforo, potassio, dataDeRegistro } = registro;

    const valores: { nome: string, valor: string}[] = [
      { nome: "Nitrogênio", valor: nitrogenio },
      { nome: "Fósforo", valor: fosforo },
      { nome: "Potássio", valor: potassio },
    ];

    valores.sort((a, b) => Number(a.valor) - Number(b.valor));

    data = [
      ["", valores[0].nome, valores[1].nome, valores[2].nome],
      [
        formatRelativeTime(dataDeRegistro),
        valores[0].valor,
        valores[1].valor,
        valores[2].valor,
      ],
    ];
    return (
      <SecaoGraficoBarras>
        <Chart
          chartType="Bar"
          width="350px"
          height="400px"
          data={data}
          className="GraficoNPKAtual"
        />
      </SecaoGraficoBarras>
    );
  }
};

export default GraficoBarras;
