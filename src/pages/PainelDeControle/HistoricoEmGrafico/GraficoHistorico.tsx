import { BotaoVoltar } from '@components/Buttons/BotaoVoltar';
import GraficoLinhas from '@components/GraficoLinhas/GraficoLinhas';
import { useGetAllRecords } from '@services/API/Records/useGetAllRecords';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { PagGraficoHistoricoStyle } from './GraficoHistoricoStyle';

const PagGraficoHistorico = () => {
  //States
  const location = useLocation();
  const navigate = useNavigate();
  const paramsDeBusca = new URLSearchParams(location.search);
  const intBusca = Number(paramsDeBusca.get('intBusca'));
  const intDias = Number(paramsDeBusca.get('intDias'));
  const [intervaloDeBusca, setIntervaloDeBusca] = useState<string | number>(intBusca);

  const { idPlanta } = useParams();
  const { allRecords, errorAllRecords, allRecordsIsLoading } = useGetAllRecords({
    idPlanta,
    intervaloDeBusca,
  });
  const params = {
    intervaloDeBusca,
    setIntervaloDeBusca,
    allRecordsIsLoading,
  };

  useEffect(() => {
    navigate(location.pathname + intervaloDeBusca ? `?intBusca${intervaloDeBusca}` : '');
    // eslint-disable-next-line
  }, [intervaloDeBusca, intBusca, intDias]);

  return (
    <PagGraficoHistoricoStyle>
      <BotaoVoltar path={`/painel/plantas/${idPlanta}`} />
      <div className="GraficoDiv">{!errorAllRecords && <GraficoLinhas params={params} records={allRecords} />}</div>
    </PagGraficoHistoricoStyle>
  );
};

export default PagGraficoHistorico;
