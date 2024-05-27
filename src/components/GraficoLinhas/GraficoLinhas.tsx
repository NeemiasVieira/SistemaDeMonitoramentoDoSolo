import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import { SecaoGraficoLinhas } from "./GraficoLinhasStyle";
import { Loading } from "../Loading/Loading";
import { GraficoLinhasProps } from "./Types";
import { TipoGrafico, selecionaGrafico, unidadeMedida } from "./Services";

const GraficoLinhas: React.FC<GraficoLinhasProps> = ({records, params}) => {

  const { intervaloDeBusca, intervaloDeDias, setIntervaloDeBusca, setIntervaloDeDias, allRecordsIsLoading } = params

  const [tipoGrafico, setTipoGrafico] = useState<TipoGrafico>("NPK");
  const [data, setData] = useState([["Dia", "Nitrogênio", "Fósforo", "Potássio"]]);

  useEffect(() => {
    if (intervaloDeBusca === "Selecione") setIntervaloDeBusca(null);
    if (intervaloDeDias === "Selecione") setIntervaloDeDias(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervaloDeBusca, intervaloDeDias]);

  useEffect(() => {
    setData([]);
    // Atualize o estado do data sempre que records for alterado
    let newData: any;
    if(records){
      newData = selecionaGrafico(tipoGrafico, records);
    }
    
    setData(newData);
  }, [records, tipoGrafico]);

  const options: any = {
    chart: {
      title: unidadeMedida(tipoGrafico),
    },
    width: "100%",
    height: "auto",
    
    curveType: "function",
    legend: { position: "none" },
  };

  return (
    <SecaoGraficoLinhas>
      <h2 className="titulo">Gráfico do Histórico da Planta</h2>
      <div className="filtros">
        <h3>Filtros</h3>
        <div className="selects">
        <div className="Select">
          <p className="tituloSelect">Gráfico</p>
          <select
            value={tipoGrafico}
            className="selectFiltro"
            onChange={(e) => {
              setTipoGrafico(e.target.value as TipoGrafico);
            }}
          >
            <option value="NPK">Nutrientes</option>
            <option value="temperatura">Temperatura</option>
            <option value="umidade">Umidade</option>
            <option value="pH">pH</option>
            <option value="luz">Luz</option>
          </select>
        </div>
        <div className="Select">
          <p className="tituloSelect">Exibir um registro a cada</p>
          <select
            className="selectFiltro"
            value={intervaloDeDias}
            name=""
            id=""
            onChange={(e) => setIntervaloDeDias(e.target.value)}
          >
            <option value={null}>Selecione</option>
            <option value={1}>1 dia</option>
            <option value={3}>3 dias</option>
            <option value={5}>5 dias</option>
            <option value={7}>7 dias</option>
            <option value={10}>10 dias</option>
          </select>
        </div>
        <div className="Select">
          <p className="tituloSelect">Intervalo de busca</p>
          <select
            className="selectFiltro"
            name=""
            id=""
            value={intervaloDeBusca}
            onChange={(e) => setIntervaloDeBusca(e.target.value)}
          >
            <option value={null}>Selecione</option>
            <option value={7}>1 Semana</option>
            <option value={14}>2 Semanas</option>
            <option value={30}>1 Mês</option>
            <option value={90}>3 Meses</option>
            <option value={180}>6 Meses</option>
            <option value={365}>Último Ano</option>
          </select>
        </div>
        </div>
        
      </div>

      {allRecordsIsLoading && <Loading minHeight={"55vh"}/>}

      {data?.length <= 2 && !allRecordsIsLoading && (
        <p className="Aviso">
          Não há registros necessários para formar um histórico
        </p>
      )}
      {data?.length > 2 && !allRecordsIsLoading &&  (
        <div className="graficoContainer">
        <Chart
          chartType="Line"
          width="100%"
          height="450px"
          data={data}
          options={options}
        />
        </div>
      )}
    </SecaoGraficoLinhas>
  );
};

export default GraficoLinhas;
