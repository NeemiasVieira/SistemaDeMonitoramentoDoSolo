import { BotaoVoltar } from '@components/Buttons/BotaoVoltar';
import { DadosRegistro } from '@components/DadosRegistro/DadosRegistro';
import GraficoLinhas from '@components/GraficoLinhas/GraficoLinhas';
import { Loading } from '@components/Loading/Loading';
import { RelatorioDeSaude } from '@components/RelatorioDeSaude/RelatorioDeSaude';
import { useGetPlant } from '@services/API/Plants/useGetPlant';
import { useGetRelatorioSaude } from '@services/API/Plants/useGetRelatorioSaude';
import { useGetAllRecords } from '@services/API/Records/useGetAllRecords';
import { useGetLastRecord } from '@services/API/Records/useGetLastRecord';
import { useGetSpecie } from '@services/API/Species/useGetSpecie';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ResumoStyle } from './ResumoStyle';
import { NoResults } from '@components/NoResults/NoResults';

const Resumo = () => {
  const { idPlanta } = useParams();

  //States
  const [intervaloDeBusca, setIntervaloDeBusca] = useState(null);

  //Hooks
  const { planta } = useGetPlant(idPlanta);
  const { lastRecord, lastRecordIsLoading } = useGetLastRecord(idPlanta);
  const { relatorioSaude, isLoadingSaude } = useGetRelatorioSaude(idPlanta);
  const { allRecords, getAllRecords, allRecordsIsLoading } = useGetAllRecords({
    idPlanta,
    intervaloDeBusca,
  });
  const { getSpecie, specieData } = useGetSpecie({ id: planta?.idEspecie });
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

  const isAnyRequestLoading = useMemo(
    () => lastRecordIsLoading || isLoadingSaude || allRecordsIsLoading,
    [lastRecordIsLoading, isLoadingSaude, allRecordsIsLoading]
  );

  return (
    <ResumoStyle>
      <BotaoVoltar path={`/painel/plantas/${idPlanta}`} />
      {isAnyRequestLoading && <Loading minHeight={'70vh'} />}

      {!isAnyRequestLoading && lastRecord && (
        <div className="identificacaoDaPlanta">
          <h2 className="nomeDaPlanta">{planta?.nome}</h2>
          <h3 className="especieDaPlanta">{planta?.especie}</h3>
        </div>
      )}

      {relatorioSaude && !isAnyRequestLoading && (
        <DadosRegistro registro={lastRecord} especie={specieData} ultimaAtualizacao />
      )}

      {lastRecord && !isAnyRequestLoading && <RelatorioDeSaude relatorio={relatorioSaude} especie={specieData} />}

      {relatorioSaude && !isAnyRequestLoading && (
        <GraficoLinhas className="GraficoLinhas" records={allRecords} params={params} />
      )}

      {!isAnyRequestLoading && !relatorioSaude && planta?.id && <NoResults />}
    </ResumoStyle>
  );
};

export default Resumo;
