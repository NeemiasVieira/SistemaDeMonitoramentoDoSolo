import React, { useState, useEffect } from "react";
import { MinhaPlantaMain } from "./MinhaPlantaStyle";
import { NavAutenticada } from "../../../components/NavAutenticada/NavAutenticada";
import { Footer } from "../../../components/Footer/Footer";
import { PlantsService } from "../../../services/API/PlantsService";
import { RelatorioDeSaude } from "../../../components/RelatorioDeSaude/RelatorioDeSaude";
import GraficoLinhas from "../../../components/GraficoLinhas/GraficoLinhas";
import { UltimaAtualizacao } from "../../../components/UltimaAtualizacao/UltimaAtualizacao";
import { Saude } from "./minha-planta.types";
import { IRegistro } from "../../../interfaces/RecordsModule/registro.interface";

const MinhaPlanta = () => {
  //States
  const [response, setResponse] = useState<any>();
  const [error, setError] = useState<any>();
  const [responseRelatorio, setResponseRelatorio] = useState<Saude>();
  const [registroResponse, setRegistroResponse] = useState<IRegistro>();
  const [plants, setPlants] = useState([]);
  const [plantaSelecionada, setPlantaSelecionada] = useState<any>();

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
    if (responseRelatorio) {
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
    if (responseRelatorio && responseRelatorio?.ultimaAtualizacao) {
    } else {
      setError(null);
    }
  }, [responseRelatorio]);

  useEffect(() => {
    if (response?.length > 0) {
      setPlants(response);
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
          
          {plants?.length > 0 &&
            plants.map((planta) => (
              <option key={planta.id} value={planta.id}>
                {`${planta.nome} - (${planta.especie})`}
              </option>
            ))}
        </select>     

        {plantaSelecionada && !error && (
          <UltimaAtualizacao registro={registroResponse} />
        )}

        {plantaSelecionada && !error && (
          <RelatorioDeSaude relatorio={responseRelatorio} />
        )}

        {plantaSelecionada && !error && (
          <GraficoLinhas
            className="GraficoLinhas"
            idPlanta={plantaSelecionada}
          />
        )}

        {error && plantaSelecionada !== "1" && (
          <p>A Planta não possui nenhum registro</p>
        )}
      </MinhaPlantaMain>
      <Footer />
    </>
  );
};

export default MinhaPlanta;
