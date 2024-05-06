import React from "react";
import { Chart } from "react-google-charts";
import { SecaoGraficoBarras } from "./GraficoBarrasStyle";
import { FormatarDatas } from "../../assets/utils/FormatDate";
import { Record } from "../../services/API/Records/useGetAllRecordsPaginated";

interface GraficoBarrasProps{
  registro: Record
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
        FormatarDatas.atualizadoA(dataDeRegistro),
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
