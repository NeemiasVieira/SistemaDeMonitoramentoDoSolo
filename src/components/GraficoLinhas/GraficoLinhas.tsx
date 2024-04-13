import React, { useState, useEffect } from "react";
import { SecaoGraficoLinhas } from "./GraficoLinhasStyle";
import Chart from "react-google-charts";
import { IRegistro } from "../../interfaces/RecordsModule/registro.interface";
import { RecordQuery } from "../../services/API/Records/useGetAllRecords";
import { Loading } from "../Loading/Loading";

const selecionaGrafico = (tipoGrafico: string, records: IRegistro[]) => {
  let newData: any = [];

  switch (tipoGrafico) {
    case "NPK":
      newData = [
        ["Dia", "Nitrogênio", "Fósforo", "Potássio"],
        ...records?.map((record) => [
          formatDate(record.dataDeRegistro),
          Number(record.nitrogenio),
          Number(record.fosforo),
          Number(record.potassio),
        ]),
      ];
      break;
    case "temperatura":
      newData = [
        ["Dia", "Temperatura"],
        ...records?.map((record) => [
          formatDate(record.dataDeRegistro),
          Number(record.temperatura),
        ]),
      ];
      break;
    case "pH":
      newData = [
        ["Dia", "pH"],
        ...records?.map((record) => [
          formatDate(record.dataDeRegistro),
          Number(record.pH),
        ]),
      ];
      break;
    case "umidade":
      newData = [
        ["Dia", "Umidade"],
        ...records?.map((record) => [
          formatDate(record.dataDeRegistro),
          Number(record.umidade),
        ]),
      ];
      break;
    case "luz":
      newData = [
        ["Dia", "Luz"],
        ...records?.map((record) => [
          formatDate(record.dataDeRegistro),
          Number(record.luz),
        ]),
      ];
      break;
  }
  return newData;
};

const unidadeMedida = (tipoGrafico: string) => {
  let unidadeMedida;
  switch(tipoGrafico){
    case "NPK":
      unidadeMedida = "Unidade de medida: mg/Kg";
      break;
    case "temperatura":
      unidadeMedida = "Unidade de medida: ºC"
      break;
    case "pH":
      unidadeMedida = ""
      break;
    case "umidade":
      unidadeMedida = "Unidade de medida: %"
      break;
  }
  return unidadeMedida
}


const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
  return `${day}/${month}`;
};

interface StatesParams{
  setIntervaloDeDias: React.Dispatch<number | string>;
  setIntervaloDeBusca: React.Dispatch<number | string>;
  intervaloDeDias: number | string,
  intervaloDeBusca: number | string;
  allRecordsIsLoading: boolean;
}

interface GraficoLinhasProps{
  records: RecordQuery[];
  params: StatesParams;

  className?: string;
}

const GraficoLinhas: React.FC<GraficoLinhasProps> = ({records, params}) => {

  const { intervaloDeBusca, intervaloDeDias, setIntervaloDeBusca, setIntervaloDeDias, allRecordsIsLoading } = params

  const [tipoGrafico, setTipoGrafico] = useState("NPK");
  const [data, setData] = useState([
    ["Dia", "Nitrogênio", "Fósforo", "Potássio"],
  ]);

  useEffect(() => {
    if (intervaloDeBusca === "Selecione") setIntervaloDeBusca(null);
    if (intervaloDeDias === "Selecione") setIntervaloDeDias(null);
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervaloDeBusca, intervaloDeDias]);

  useEffect(() => {
    setData([]);
    // Atualize o estado do data sempre que records for alterado
    let newData = [];
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
              setTipoGrafico(e.target.value);
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

      {data.length <= 2 && !allRecordsIsLoading && (
        <p className="Aviso">
          Não há registros necessários para formar um histórico
        </p>
      )}
      {data.length > 2 && !allRecordsIsLoading &&  (
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
