import React, { useState, useEffect } from "react";
import { SecaoGraficoLinhas } from "./GraficoLinhasStyle";
import Chart from "react-google-charts";
import { RecordsService } from "../../services/API/RecordsService";

const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adicionamos 1 porque os meses em JavaScript começam em 0 (janeiro) e terminam em 11 (dezembro).
  return `${day}/${month}`;
};

const GraficoLinhas = ({ idPlanta }) => {
  const [records, setRecords] = useState([]);
  const [intervaloDeDias, setIntervaloDeDias] = useState(null);
  const [intervaloDeBusca, setIntervaloDeBusca] = useState(null);
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
  }, [idPlanta, intervaloDeBusca, intervaloDeDias]);

  useEffect(() => {
    setData(null)
    // Atualize o estado do data sempre que records for alterado
    const newData = [
      ["Dia", "Nitrogênio", "Fósforo", "Potássio"],
      ...records.map((record) => [
        formatDate(record.dataDeRegistro),
        Number(record.nitrogenio),
        Number(record.fosforo),
        Number(record.potassio),
      ]),
    ];
    setData(newData);
    console.log(data)
  }, [records]);

  const options = {
    chart: {
      title: "Medidas em mg/Kg",
    },
    width: "100%",
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  return (
    <SecaoGraficoLinhas>
      <h2>Histórico de Nutrientes da Planta</h2>
      <div className="selects">
        <div className="Select">
          <p>Exibir um registro a cada</p>
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
          <p>Intervalo de busca</p>
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
      {data.length <= 2 && <p className="Aviso">Não há registros necessários para formar um histórico</p>}
      {data.length > 2 && <Chart
        chartType="Line"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />}
      
    </SecaoGraficoLinhas>
  );
};

export default GraficoLinhas;
