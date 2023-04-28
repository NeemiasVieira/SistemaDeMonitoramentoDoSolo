import React from "react";
import { Chart } from "react-google-charts";
import { SecaoGraficoBarras } from "./GraficoBarrasStyle";

const GraficoBarras = () => {

  const data = [
    ["", "Nitrogênio", "Fósforo", "Potássio"],
    ["Hoje - Atualizado há 5 minutos", 0.5 +"g", 1 +"g", 2 +"g"]
    
  ];
  
  const options = {
    chart: {
      title: "Nutrientes da Planta",
      subtitle: "Dados Atuais",
    },
  };

  return(
    <SecaoGraficoBarras>
      <Chart
      chartType="Bar"
      width="350px"
      height="400px"
      data={data}
      options={options}
      className="GraficoNPKAtual"
    />
    </SecaoGraficoBarras>
  )
}

export default GraficoBarras;