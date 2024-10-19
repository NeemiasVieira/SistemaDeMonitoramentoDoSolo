import { FormatarDatas } from '@assets/utils/FormatDate';
import { BotaoVoltar } from '@components/Buttons/BotaoVoltar';
import { Loading } from '@components/Loading/Loading';
import { Paginacao } from '@components/Paginacao/Paginacao';
import { IntervaloDatasInput } from '@components/PopUps/IntervaloDatasInputModal/IntervaloDatasInputModal';
import { Registro } from '@components/Registro/Registro';
import { useGetAllRecordsPaginated } from '@services/API/Records/useGetAllRecordsPaginated';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { TodosOsRegistrosStyle } from './TodosOsRegistrosStyle';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetPlant } from '@services/API/Plants/useGetPlant';
import { useApplication } from '@contexts/ApplicationContext';

const TodosOsRegistros = () => {
  //Params
  const { idPlanta } = useParams();
  const { planta } = useGetPlant(idPlanta);
  const location = useLocation();
  const paramsDeBusca = new URLSearchParams(location.search);
  const rpp = Number(paramsDeBusca.get('rpp'));
  const pag = Number(paramsDeBusca.get('pag'));

  //States
  const [pagina, setPagina] = useState<number>(pag || Number(sessionStorage.getItem('pagina')) || 1);
  const [registrosPorPag, setRegistrosPorPag] = useState<number>(
    rpp || Number(sessionStorage.getItem('registrosPorPag')) || 10
  );
  const [dataDeInicioBusca, setDataDeInicioBusca] = useState<string>();
  const [dataDeFimBusca, setDataDeFimBusca] = useState<string>();

  //Hooks
  const { getAllRecordsPaginated, allRecordsPaginated, allRecordsPaginatedIsLoading } = useGetAllRecordsPaginated({
    idPlanta,
    pagina,
    registrosPorPag,
    dataDeInicioBusca: FormatarDatas.inputDateToIso(dataDeInicioBusca),
    dataDeFimBusca: FormatarDatas.inputDateToIso(dataDeFimBusca),
  });
  const navigate = useNavigate();
  const { simulationMode } = useApplication();

  useEffect(() => {
    getAllRecordsPaginated(); // eslint-disable-next-line
  }, [registrosPorPag, pagina, idPlanta, dataDeInicioBusca, dataDeFimBusca]);

  useEffect(() => {
    sessionStorage.setItem('pagina', String(pagina));
    sessionStorage.setItem('registrosPorPag', String(registrosPorPag));
    navigate(`${location.pathname}?rpp=${registrosPorPag}&pag=${pagina}`); // eslint-disable-next-line
  }, [pagina, registrosPorPag]);

  return (
    <TodosOsRegistrosStyle>
      <BotaoVoltar path={`/painel/plantas/${idPlanta}`} />
      <h1>Todos os Registros</h1>
      {planta?.simulado && simulationMode && (
        <button className="newRecordButton" onClick={() => navigate('novo/imagem')}>
          <FontAwesomeIcon icon={faSquarePlus} /> Adicionar Novo Registro
        </button>
      )}

      <IntervaloDatasInput
        params={{
          dataDeInicioBusca,
          dataDeFimBusca,
          setDataDeInicioBusca,
          setDataDeFimBusca,
        }}
      />
      {allRecordsPaginatedIsLoading && <Loading minHeight={'70vh'} />}
      {allRecordsPaginated &&
        allRecordsPaginated.registros.map((registro) => <Registro registro={registro} key={registro.id} />)}
      {allRecordsPaginated && (
        <Paginacao
          setPagina={setPagina}
          pagina={pagina}
          totalPaginas={allRecordsPaginated.totalPaginas}
          registrosPorPag={registrosPorPag}
          setRegistrosPorPag={setRegistrosPorPag}
        />
      )}
    </TodosOsRegistrosStyle>
  );
};

export default TodosOsRegistros;
