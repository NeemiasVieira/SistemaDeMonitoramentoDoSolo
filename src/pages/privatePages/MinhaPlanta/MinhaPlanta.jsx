import React, { useState, useEffect } from "react";
import { MinhaPlantaMain } from "./MinhaPlantaStyle";
import { NavAutenticada } from "../../../components/NavAutenticada/NavAutenticada";
import { Footer } from "../../../components/Footer/Footer";
import GraficoBarras from "../../../components/GraficoBarras/GraficoBarras";
import GraficoLinhas from "../../../components/GraficoLinhas/GraficoLinhas";
import { PlantsService } from "../../../services/API/use-cases/plantas/PlantsService";
import { RelatorioDeSaude } from "../../../components/RelatorioDeSaude/RelatorioDeSaude";
import { formatRelativeTime } from "../../../components/GraficoBarras/GraficoBarras";

const MinhaPlanta = () => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [responseRelatorio, setResponseRelatorio] = useState();
  const [registroResponse, setRegistroResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [plants, setPlants] = useState([]);
  const [plantaSelecionada, setPlantaSelecionada] = useState();
  const plantsService = new PlantsService(setResponse, setError);
  const relatorioService = new PlantsService(setResponseRelatorio, setError);
  const registroService = new PlantsService(setRegistroResponse, setError);
  const ownerID = localStorage.getItem("userID");


  useEffect(() => {
    plantsService.getPlantsByOwnerID(ownerID);
  }, []);

  useEffect(() => {
    if(responseRelatorio?.data.length > 0){
      setError(null);
    }
  }, [error])

  useEffect(() => {
    if (plantaSelecionada) {
      relatorioService.getRelatorioDeSaude(plantaSelecionada);
      registroService.getUltimoRegistro(plantaSelecionada);
      setError(null);
    }
  }, [plantaSelecionada]);

  useEffect(() => {
    if (responseRelatorio && responseRelatorio.data.length === 0) {
    } else {
      setError(null);
    }
  }, [responseRelatorio]);

  useEffect(() => {
    if (response) {
      setPlants(response.data);
    }
  }, [response]);

  return (
    <div>
      <NavAutenticada />
      <MinhaPlantaMain>
        <h1>Painel de Controle</h1>
        <select
          value={plantaSelecionada}
          onChange={(e) => {
            if (e.target.value && e.target.value !== "1") setError(null);
            setPlantaSelecionada(e.target.value);
          }}
        >
          <option value="1">Selecione uma planta</option>
          {plants.length > 0 &&
            plants.map((planta) => (
              <option key={planta.id} value={planta.id}>
                {`${planta.nome} - (${planta.especie})`}
              </option>
            ))}
        </select>
        <br />
        <br />
        <br />
        {plantaSelecionada && !error && (
          <RelatorioDeSaude relatorio={responseRelatorio?.data} />
        )}
        {error && plantaSelecionada !== "1" && (
          <p>{`A Planta não possui nenhum registro`}</p>
        )}
        <br />
        <br />
        <br />
        {plantaSelecionada && !error && (
          <div className="DadosAtuais">
            <GraficoBarras registro={registroResponse?.data} />
            <div className="DivTempUmidPH">
              <h3>Outras informações</h3>
              <h4>Dados Atuais</h4>
              <div className="dados">
                {registroResponse?.data && (
                  <>
                    <p>{`Temperatura: ${registroResponse.data.temperatura}°C`}</p>
                    <p>{`Umidade: ${registroResponse.data.umidade}%`}</p>
                    <p>{`pH: ${registroResponse.data.pH}`}</p>
                  </>
                )}
              </div>
              {registroResponse?.data && (
                <p className="UltimaAtualizacao">
                  {formatRelativeTime(registroResponse.data.dataDeRegistro)}
                </p>
              )}
            </div>
          </div>
        )}

        <GraficoLinhas className="GraficoLinhas" />
      </MinhaPlantaMain>
      <Footer />
    </div>
  );
};

export default MinhaPlanta;
