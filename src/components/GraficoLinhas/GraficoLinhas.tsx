import React, { useState, useEffect } from "react";
import { SecaoGraficoLinhas } from "./GraficoLinhasStyle";
import Chart, { ReactGoogleChartProps } from "react-google-charts";
import { RecordsService } from "../../services/API/RecordsService";
import { IRegistro } from "../../interfaces/RecordsModule/registro.interface";

const selecionaGrafico = (tipoGrafico: string, records: IRegistro[]) => {
  let newData: any = [];

  switch (tipoGrafico) {
    case "NPK":
      newData = [
        ["Dia", "Nitrogênio", "Fósforo", "Potássio"],
        ...records.map((record) => [
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
        ...records.map((record) => [
          formatDate(record.dataDeRegistro),
          Number(record.temperatura),
        ]),
      ];
      break;
    case "pH":
      newData = [
        ["Dia", "pH"],
        ...records.map((record) => [
          formatDate(record.dataDeRegistro),
          Number(record.pH),
        ]),
      ];
      break;
    case "umidade":
      newData = [
        ["Dia", "Umidade"],
        ...records.map((record) => [
          formatDate(record.dataDeRegistro),
          Number(record.umidade),
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

interface GraficoLinhasProps{
  idPlanta: string
  className?: string
}

const GraficoLinhas: React.FC<GraficoLinhasProps> = ({idPlanta}) => {
  const [records, setRecords] = useState([]);
  const [intervaloDeDias, setIntervaloDeDias] = useState(null);
  const [intervaloDeBusca, setIntervaloDeBusca] = useState(null);
  const [tipoGrafico, setTipoGrafico] = useState("NPK");
  const [data, setData] = useState([
    ["Dia", "Nitrogênio", "Fósforo", "Potássio"],
  ]);
  const [error, setError] = useState();
  const recordsService = new RecordsService(setRecords, setError);

  useEffect(() => {
    if (intervaloDeBusca === "Selecione") setIntervaloDeBusca(null);
    if (intervaloDeDias === "Selecione") setIntervaloDeDias(null);

    recordsService.getRecordsByPlantID(
      idPlanta,
      intervaloDeDias,
      intervaloDeBusca
    );
  }, [idPlanta, intervaloDeBusca, intervaloDeDias, tipoGrafico]);

  useEffect(() => {
    setData(null);
    // Atualize o estado do data sempre que records for alterado
    const newData = selecionaGrafico(tipoGrafico, records);
    setData(newData);
  }, [records]);

  const options: any = {
    chart: {
      title: unidadeMedida(tipoGrafico),
    },
    width: "100%",
    curveType: "function",
    legend: { position: "bottom" },
  };

  return (
    <SecaoGraficoLinhas>
      <h2>Histórico da Planta</h2>
      <div className="selects">
        <div className="Select">
          <p className="tituloSelect">Gráfico</p>
          <select
            value={tipoGrafico}
            onChange={(e) => {
              setTipoGrafico(e.target.value);
            }}
          >
            <option value="NPK">Nutrientes</option>
            <option value="temperatura">Temperatura</option>
            <option value="umidade">Umidade</option>
            <option value="pH">pH</option>
          </select>
        </div>
        <div className="Select">
          <p className="tituloSelect">Exibir um registro a cada</p>
          <select
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
            name=""
            id=""
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
      {data.length <= 2 && (
        <p className="Aviso">
          Não há registros necessários para formar um histórico
        </p>
      )}
      {data.length > 2 && (
        <Chart
          chartType="Line"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      )}
    </SecaoGraficoLinhas>
  );
};

export default GraficoLinhas;
