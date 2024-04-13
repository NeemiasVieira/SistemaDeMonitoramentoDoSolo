import React, { useState, useEffect } from "react";
import { RelatorioDeSaude } from "../../../components/RelatorioDeSaude/RelatorioDeSaude";
import { UltimaAtualizacao } from "../../../components/UltimaAtualizacao/UltimaAtualizacao";
import { Planta } from "./Resumo.types";
import { Loading } from "../../../components/Loading/Loading";
import { useGetAllPlants } from "../../../services/API/Plants/useGetAllPlants";
import { useGetLastRecord } from "../../../services/API/Records/useGetLastRecord";
import { useGetRelatorioSaude } from "../../../services/API/Plants/useGetRelatorioSaude";
import { useGetAllRecords } from "../../../services/API/Records/useGetAllRecords";
import { useGetSpecie } from "../../../services/API/Species/useGetSpecie";
import { useParams } from "react-router-dom";
import { BotaoVoltar } from "../../../components/Buttons/BotaoVoltar";
import { ResumoStyle } from "./ResumoStyle";
import GraficoLinhas from "../../../components/GraficoLinhas/GraficoLinhas";


const Resumo = () => {
  //States
  const [plantaSelecionada, setPlantaSelecionada] = useState<Planta>();
  const [intervaloDeDias, setIntervaloDeDias] = useState(null);
  const [intervaloDeBusca, setIntervaloDeBusca] = useState(null);
  
  //Hooks
  const { plantas, isLoading: plantasLoading} = useGetAllPlants();
  let { lastRecord,  lastRecordIsLoading, errorLastRecord, refetchLastRecord } = useGetLastRecord(plantaSelecionada?.id);
  let { relatorioSaude, erroRelatorioSaude, refetchRelatorioSaude } = useGetRelatorioSaude(plantaSelecionada?.id);
  let { allRecords, errorAllRecords, refetchAllRecords, allRecordsIsLoading } = useGetAllRecords({idPlanta: plantaSelecionada?.id, intervaloDeBusca, intervaloDeDias});
  const { getSpecie, specieData } = useGetSpecie({nome: plantaSelecionada?.especie});
  const params = { intervaloDeBusca, intervaloDeDias, setIntervaloDeBusca, setIntervaloDeDias, allRecordsIsLoading};
  const { idPlanta } = useParams();

  //useEffects
  useEffect(() => {
    if(plantas) setPlantaSelecionada(plantas.find((planta) => planta.id === idPlanta));
    // eslint-disable-next-line
  }, [plantas])

  useEffect(() => {
    if(plantaSelecionada){
      refetchAllRecords();
    }
    // eslint-disable-next-line
  }, [intervaloDeBusca, intervaloDeDias]);

  useEffect(() => {
    if (plantaSelecionada) {
      refetchRelatorioSaude();
      refetchLastRecord();
      refetchAllRecords();
      getSpecie();
    }
    // eslint-disable-next-line
  }, [plantaSelecionada]);

  useEffect(() => {
  }, [allRecords]);

  return (
      <ResumoStyle>
        <BotaoVoltar path={`/painel/plantas/${idPlanta}`} />
        {plantaSelecionada && lastRecordIsLoading && <Loading minHeight={"70vh"}/>}
        {plantasLoading  && <Loading minHeight={"70vh"}/>}

        {lastRecord && !errorLastRecord && (
          <div className="identificacaoDaPlanta">
            <h2 className="nomeDaPlanta">{plantaSelecionada?.nome}</h2>
            <h3 className="especieDaPlanta">{plantaSelecionada?.especie}</h3>
          </div>
        )}
 

        {allRecords && relatorioSaude && lastRecord && !errorLastRecord && (
          <UltimaAtualizacao registro={lastRecord} />
        )}

        {lastRecord && relatorioSaude && allRecords && !erroRelatorioSaude && (
          <RelatorioDeSaude relatorio={relatorioSaude} especie={specieData} />
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
      </ResumoStyle>
  );
};

export default Resumo;
