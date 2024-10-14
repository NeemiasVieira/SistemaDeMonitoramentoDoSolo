import { BotaoVoltar } from "@components/Buttons/BotaoVoltar";
import { DadosRegistro } from "@components/DadosRegistro/DadosRegistro";
import GraficoLinhas from "@components/GraficoLinhas/GraficoLinhas";
import { Loading } from "@components/Loading/Loading";
import { RelatorioDeSaude } from "@components/RelatorioDeSaude/RelatorioDeSaude";
import { useGetPlant } from "@services/API/Plants/useGetPlant";
import { useGetRelatorioSaude } from "@services/API/Plants/useGetRelatorioSaude";
import { useGetAllRecords } from "@services/API/Records/useGetAllRecords";
import { useGetLastRecord } from "@services/API/Records/useGetLastRecord";
import { useGetSpecie } from "@services/API/Species/useGetSpecie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ResumoStyle } from "./ResumoStyle";

const Resumo = () => {
  const { idPlanta } = useParams();

  //States
  const [intervaloDeBusca, setIntervaloDeBusca] = useState(null);

  //Hooks
  const { planta } = useGetPlant(idPlanta);
  const { lastRecord, lastRecordIsLoading, errorLastRecord } =
    useGetLastRecord(idPlanta);
  const { relatorioSaude, erroRelatorioSaude, isLoadingSaude } =
    useGetRelatorioSaude(idPlanta);
  const { allRecords, errorAllRecords, getAllRecords, allRecordsIsLoading } =
    useGetAllRecords({
      idPlanta,
      intervaloDeBusca,
    });
  const { getSpecie, specieData } = useGetSpecie({ nome: planta?.especie });
  const params = {
    intervaloDeBusca,
    setIntervaloDeBusca,
    allRecordsIsLoading,
  };

  useEffect(() => {
    if (planta) {
      getAllRecords();
    }
    // eslint-disable-next-line
  }, [intervaloDeBusca]);

  useEffect(() => {
    if (planta) {
      getSpecie();
    }
    // eslint-disable-next-line
  }, [planta]);

  useEffect(() => {}, [allRecords]);

  return (
    <ResumoStyle>
      <BotaoVoltar path={`/painel/plantas/${idPlanta}`} />
      {(lastRecordIsLoading || isLoadingSaude) && (
        <Loading minHeight={"70vh"} />
      )}

      {planta &&
        lastRecord &&
        !isLoadingSaude &&
        !lastRecordIsLoading &&
        !errorLastRecord && (
          <div className="identificacaoDaPlanta">
            <h2 className="nomeDaPlanta">{planta?.nome}</h2>
            <h3 className="especieDaPlanta">{planta?.especie}</h3>
          </div>
        )}

      {relatorioSaude && lastRecord && !errorLastRecord && (
        <DadosRegistro registro={lastRecord} ultimaAtualizacao />
      )}

      {lastRecord &&
        relatorioSaude &&
        planta?.especie &&
        !erroRelatorioSaude && (
          <RelatorioDeSaude relatorio={relatorioSaude} especie={specieData} />
        )}

      {!errorAllRecords && relatorioSaude && lastRecord && (
        <GraficoLinhas
          className="GraficoLinhas"
          records={allRecords}
          params={params}
        />
      )}

      {!lastRecord &&
        !lastRecordIsLoading &&
        !errorLastRecord &&
        planta?.id && <p>A Planta não possui nenhum registro</p>}
    </ResumoStyle>
  );
};

export default Resumo;
