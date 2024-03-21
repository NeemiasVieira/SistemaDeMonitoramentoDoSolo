import React, { useState, useEffect } from "react";
import { MinhaPlantaMain } from "./MinhaPlantaStyle";
import { Navigation } from "../../../components/Navigation/Navigation";
import { Footer } from "../../../components/Footer/Footer";
import { PlantsService } from "../../../services/API/PlantsService";
import { RelatorioDeSaude } from "../../../components/RelatorioDeSaude/RelatorioDeSaude";
import GraficoLinhas from "../../../components/GraficoLinhas/GraficoLinhas";
import { UltimaAtualizacao } from "../../../components/UltimaAtualizacao/UltimaAtualizacao";
import { Planta, Saude } from "./minha-planta.types";
import { IRegistro } from "../../../interfaces/RecordsModule/registro.interface";
import { Loading } from "../../../components/Loading/Loading";

const MinhaPlanta = () => {
  //States
  const [response, setResponse] = useState<any>();
  const [error, setError] = useState<any>();
  const [responseRelatorio, setResponseRelatorio] = useState<Saude>();
  const [registroResponse, setRegistroResponse] = useState<IRegistro>();
  const [plants, setPlants] = useState([]);
  const [plantaSelecionada, setPlantaSelecionada] = useState<Planta>();
  
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
      relatorioService.getRelatorioDeSaude(plantaSelecionada?.id);
      registroService.getUltimoRegistro(plantaSelecionada?.id);
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
      setPlantaSelecionada(response[0]);
    }
  }, [response]);

  return (
    <>
      <Navigation auth={true} />
      <MinhaPlantaMain>
        {plants.length === 0 && <Loading minHeight={"80vh"}/>}
        {plants.length > 0 && <select
          value={plantaSelecionada?.id}
          onChange={(e) => {
            if (e.target.value && e.target.value !== "1") setError(null);
            const plantaEscolhida = plants.find((planta) => planta.id === e.target.value);
            setRegistroResponse(null);
            setResponseRelatorio(null);
            setPlantaSelecionada(plantaEscolhida);
            
            
          }}
        >
          <option value="1">Selecione uma planta</option>
          
          {plants?.length > 0 &&
            plants.map((planta) => (
              <option key={planta.id} value={planta.id}>
                {`${planta.nome} - (${planta.especie})`}
              </option>
            ))}
        </select> }  

       {plantaSelecionada && !registroResponse && !responseRelatorio && <Loading minHeight={"50vh"}/>}  

       {registroResponse && !error && <h2 className="nomeDaPlanta">{plantaSelecionada?.nome}</h2>}

        {registroResponse && !error && (
          <UltimaAtualizacao registro={registroResponse} />
        )}

        {responseRelatorio && !error && (
          <RelatorioDeSaude relatorio={responseRelatorio} />
        )}

        {responseRelatorio && !error && (
          <GraficoLinhas
            className="GraficoLinhas"
            idPlanta={plantaSelecionada?.id}
          />
        )}

        {error && plantaSelecionada?.id !== "1" && (
          <p>A Planta não possui nenhum registro</p>
        )}
      </MinhaPlantaMain>
      <Footer />
    </>
  );
};

export default MinhaPlanta;
