import React, { useState, useEffect } from "react";
import { MinhaPlantaMain } from "./MinhaPlantaStyle";
import { NavAutenticada } from "../../../components/NavAutenticada/NavAutenticada";
import { Footer } from "../../../components/Footer/Footer";
import { PlantsService } from "../../../services/API/use-cases/plantas/PlantsService";
import { RelatorioDeSaude } from "../../../components/RelatorioDeSaude/RelatorioDeSaude";
import GraficoLinhas from "../../../components/GraficoLinhas/GraficoLinhas";
import { UltimaAtualizacao } from "../../../components/UltimaAtualizacao/UltimaAtualizacao";

const MinhaPlanta = () => {

  //States
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [responseRelatorio, setResponseRelatorio] = useState();
  const [registroResponse, setRegistroResponse] = useState();
  const [plants, setPlants] = useState([]);
  const [plantaSelecionada, setPlantaSelecionada] = useState();

  //Services
  const plantsService = new PlantsService(setResponse, setError);
  const relatorioService = new PlantsService(setResponseRelatorio, setError);
  const registroService = new PlantsService(setRegistroResponse, setError);

  //Others
  const ownerID = localStorage.getItem("userID");

  //useEffects
  useEffect(() => {
    plantsService.getPlantsByOwnerID(ownerID);
  }, []);

  useEffect(() => {
    if (responseRelatorio?.data.length > 0) {
      setError(null);
    }
  }, [error]);

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
    <>
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

        {plantaSelecionada && !error && <UltimaAtualizacao registro={registroResponse} /> }          
        
        {plantaSelecionada && !error &&  <RelatorioDeSaude relatorio={responseRelatorio?.data} /> }
         
        {error && plantaSelecionada !== "1" && <p>A Planta não possui nenhum registro</p> }

        <GraficoLinhas className="GraficoLinhas" />
      </MinhaPlantaMain>
      <Footer />
    </>
  );
};

export default MinhaPlanta;
