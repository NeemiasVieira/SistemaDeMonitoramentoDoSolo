import React, { useState, useEffect } from "react";
import { MinhaPlantaMain } from "./MinhaPlantaStyle";
import { Navigation } from "../../../components/Navigation/Navigation";
import { Footer } from "../../../components/Footer/Footer";
import { RelatorioDeSaude } from "../../../components/RelatorioDeSaude/RelatorioDeSaude";
import GraficoLinhas from "../../../components/GraficoLinhas/GraficoLinhas";
import { UltimaAtualizacao } from "../../../components/UltimaAtualizacao/UltimaAtualizacao";
import { Planta } from "./minha-planta.types";
import { Loading } from "../../../components/Loading/Loading";
import { useGetAllPlants } from "../../../services/API/Plants/useGetAllPlants";
import { useGetLastRecord } from "../../../services/API/Records/useGetLastRecord";
import { useGetRelatorioSaude } from "../../../services/API/Plants/useGetRelatorioSaude";
import { useGetAllRecords } from "../../../services/API/Records/useGetAllRecords";

const MinhaPlanta = () => {
  //States
  const [plantaSelecionada, setPlantaSelecionada] = useState<Planta>();
  const [intervaloDeDias, setIntervaloDeDias] = useState(null);
  const [intervaloDeBusca, setIntervaloDeBusca] = useState(null);
  
  //Hooks
  const { plantas, isLoading: plantasLoading, erro: erroAllPlants, refetch: refetchAllPlants} = useGetAllPlants();
  let { lastRecord,  lastRecordIsLoading, errorLastRecord, refetchLastRecord } = useGetLastRecord(plantaSelecionada?.id);
  let { relatorioSaude, isLoadingSaude, erroRelatorioSaude, refetchRelatorioSaude } = useGetRelatorioSaude(plantaSelecionada?.id);
  let { allRecords, errorAllRecords, refetchAllRecords, allRecordsIsLoading } = useGetAllRecords({idPlanta: plantaSelecionada?.id, intervaloDeBusca, intervaloDeDias});

  const params = { intervaloDeBusca, intervaloDeDias, setIntervaloDeBusca, setIntervaloDeDias, allRecordsIsLoading};

  //useEffects
  useEffect(() => {
    if(plantas) setPlantaSelecionada(plantas[0]);
  }, [plantas])

  useEffect(() => {
    if(allRecordsIsLoading === null) allRecordsIsLoading = true;
  }, [allRecordsIsLoading])

  useEffect(() => {
    if(plantaSelecionada){
      refetchAllRecords();
    }
  }, [intervaloDeBusca, intervaloDeDias]);

  useEffect(() => {
    if (relatorioSaude) {
      erroRelatorioSaude = null;
    }
  }, [erroRelatorioSaude]);

  useEffect(() => {
    if (plantaSelecionada) {
      refetchRelatorioSaude();
      refetchLastRecord();
      refetchAllRecords();
    }
  }, [plantaSelecionada]);

  useEffect(() => {
    if (relatorioSaude && relatorioSaude?.ultimaAtualizacao) {
    } else {
      erroRelatorioSaude = null;
    }
  }, [relatorioSaude]);

  useEffect(() => {
  }, [allRecords])

  return (
    <>
      <Navigation auth={true} />
      <MinhaPlantaMain>
        {plantasLoading && <Loading minHeight={"80vh"}/>}
        {plantas?.length > 0 && <select
          value={plantaSelecionada?.id}
          onChange={(e) => {
            const plantaEscolhida = plantas?.find((planta) => planta.id === e.target.value);
            lastRecord = null;
            relatorioSaude = null;
            setPlantaSelecionada(plantaEscolhida);
          }}
        >
          <option value="1">Selecione uma planta</option>
          
          {plantas?.length > 0 &&
            plantas?.map((planta) => (
              <option key={planta.id} value={planta.id}>
                {`${planta.nome} - (${planta.especie})`}
              </option>
            ))}
        </select> }  

       {plantaSelecionada && lastRecordIsLoading && <Loading minHeight={"50vh"}/>}  

       {lastRecord && !errorLastRecord && <h2 className="nomeDaPlanta">{plantaSelecionada?.nome}</h2>}

        {allRecords && relatorioSaude && lastRecord && !errorLastRecord && (
          <UltimaAtualizacao registro={lastRecord} />
        )}

        {lastRecord && relatorioSaude && allRecords && !erroRelatorioSaude && (
          <RelatorioDeSaude relatorio={relatorioSaude} />
        )}

        {!errorAllRecords && relatorioSaude && allRecords && lastRecord && (
          <GraficoLinhas
            className="GraficoLinhas"
            records={allRecords}
            params={params}
          />
        )}

        {!lastRecord && !lastRecordIsLoading && plantaSelecionada?.id && (
          <p>A Planta não possui nenhum registro</p>
        )}
      </MinhaPlantaMain>
      <Footer />
    </>
  );
};

export default MinhaPlanta;
