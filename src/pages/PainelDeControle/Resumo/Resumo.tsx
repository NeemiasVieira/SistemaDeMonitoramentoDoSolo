import React, { useState, useEffect } from "react";
import { RelatorioDeSaude } from "../../../components/RelatorioDeSaude/RelatorioDeSaude";
import { DadosRegistro } from "../../../components/DadosRegistro/DadosRegistro";
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

  const { idPlanta } = useParams();

  //States
  const [plantaSelecionada, setPlantaSelecionada] = useState<Planta>();
  const [intervaloDeDias, setIntervaloDeDias] = useState(null);
  const [intervaloDeBusca, setIntervaloDeBusca] = useState(null);
  
  //Hooks
  const { plantas, isLoading: plantasLoading} = useGetAllPlants();
  let { lastRecord,  lastRecordIsLoading, errorLastRecord } = useGetLastRecord(idPlanta);
  let { relatorioSaude, erroRelatorioSaude } = useGetRelatorioSaude(idPlanta);
  let { allRecords, errorAllRecords, refetchAllRecords, allRecordsIsLoading } = useGetAllRecords({idPlanta, intervaloDeBusca, intervaloDeDias});
  const { getSpecie, specieData } = useGetSpecie({nome: plantaSelecionada?.especie});
  const params = { intervaloDeBusca, intervaloDeDias, setIntervaloDeBusca, setIntervaloDeDias, allRecordsIsLoading};
  

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

        {plantaSelecionada && lastRecord && !errorLastRecord && (
          <div className="identificacaoDaPlanta">
            <h2 className="nomeDaPlanta">{plantaSelecionada?.nome}</h2>
            <h3 className="especieDaPlanta">{plantaSelecionada?.especie}</h3>
          </div>
        )}
 

        {allRecords && relatorioSaude && lastRecord && !errorLastRecord && (
          <DadosRegistro registro={lastRecord} ultimaAtualizacao />
        )}

        {lastRecord && relatorioSaude && allRecords && plantaSelecionada?.especie && !erroRelatorioSaude && (
          <RelatorioDeSaude relatorio={relatorioSaude} especie={specieData} />
        )}

        {!errorAllRecords && relatorioSaude && allRecords && lastRecord && (
          <GraficoLinhas
            className="GraficoLinhas"
            records={allRecords}
            params={params}
          />
        )}

        {!lastRecord && !lastRecordIsLoading && !errorLastRecord && plantaSelecionada?.id && (
          <p>A Planta não possui nenhum registro</p>
        )}
      </ResumoStyle>
  );
};

export default Resumo;
