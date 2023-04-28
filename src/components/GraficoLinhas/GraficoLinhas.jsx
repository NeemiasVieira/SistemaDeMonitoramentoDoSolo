import React from "react";
import { SecaoGraficoLinhas } from "./GraficoLinhasStyle";
import { Chart } from "react-google-charts";

const GraficoLinhas = () => {

  const data = [
    [
      "Dia",
      "Nitrogênio",
      "Fósforo",
      "Potássio",
    ],
    [23 +"/04", 0.2,0.3,0.1],
    [24 +"/04", 0.3,0.5,0.2],
    [25 +"/04", 0.5,0.4,0.1],
    [26 +"/04", 0.5,0.3,0],
    [27 +"/04", 0.5,0.4,0.1],
    [28 +"/04", 0.6,0.3,0.4],
    [29 +"/04", 0.5,0.2,0.4],
  ];
  
  const options = {
    chart: {
      title: "Histórico de nutrientes da planta",
      subtitle: "em gramas (g)",
    },
  };

  return(
    <SecaoGraficoLinhas>
      <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </SecaoGraficoLinhas>
  )
}

export default GraficoLinhas;