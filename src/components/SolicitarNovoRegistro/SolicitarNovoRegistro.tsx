import { FormatarDatas } from '@assets/utils/FormatDate';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCancelarSolicitacao } from '@services/API/Plants/useCancelarSolicitacao';
import { useEnviarSolicitacao } from '@services/API/Plants/useEnviarSolicitacao';
import { useGetPlant } from '@services/API/Plants/useGetPlant';
import { useGetLastRecord } from '@services/API/Records/useGetLastRecord';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useNotificacoes } from '../../contexts/NotificacoesProvider';
import { RefreshQueryButton } from '../Buttons/RefreshQueryButton';
import { Tooltip } from '../Buttons/ToolTip';
import { Loading } from '../Loading/Loading';
import { ESolicitacaoNovoRegistro, mapearTitulo, mapearTituloBotao, tip1, tip2 } from './Contrato';
import { SolicitarNovoRegistroStyle } from './SolicitarNovoRegistroStyle';

export const SolicitarNovoRegistro = () => {
  const { idPlanta } = useParams();
  const { planta, isLoading, isLoadingNoCache } = useGetPlant(idPlanta, true);
  const { lastRecord } = useGetLastRecord(idPlanta);
  const { notificar } = useNotificacoes();

  const { cancelarSolicitacao, isLoading: cancelLoading } = useCancelarSolicitacao(idPlanta);
  const { enviarSolicitacao, isLoading: sendLoading } = useEnviarSolicitacao(idPlanta);

  const { titulo, tituloBotao, nenhuma, aguardando, confirmado } = useMemo(() => {
    return {
      titulo: mapearTitulo(planta?.solicitacaoNovoRegistro),
      tituloBotao: mapearTituloBotao(planta?.solicitacaoNovoRegistro),
      nenhuma: planta?.solicitacaoNovoRegistro === ESolicitacaoNovoRegistro.NENHUMA,
      aguardando: planta?.solicitacaoNovoRegistro === ESolicitacaoNovoRegistro.AGUARDANDO,
      confirmado: planta?.solicitacaoNovoRegistro === ESolicitacaoNovoRegistro.CONFIRMADO,
    };
  }, [planta?.solicitacaoNovoRegistro]);

  const isActionLoading = useMemo(
    () => (sendLoading || cancelLoading) && !isLoading,
    [sendLoading, cancelLoading, isLoadingNoCache]
  );

  const handleClick = () => {
    if (aguardando) {
      cancelarSolicitacao();
      notificar({
        tipo: 'NOTIFICACAO',
        mensagem: 'Enviando solicitação de cancelamento de novo registro',
        tempoEmSeg: 4,
      });
    } else if (nenhuma) {
      enviarSolicitacao();
      notificar({
        tipo: 'NOTIFICACAO',
        mensagem: 'Enviando solicitação de novo registro',
        tempoEmSeg: 4,
      });
    }
  };

  return (
    <SolicitarNovoRegistroStyle>
      {isLoading && <Loading minHeight="100%" logoHeight="60px" logoWidth="60px" />}

      <div className="plantaInfo">
        {planta && (
          <>
            <h3>Informações da Planta</h3>
            <p>
              <b>Nome: </b>
              {planta.nome}
            </p>

            <p>
              <b>Espécie: </b>
              {planta.especie}
            </p>

            {lastRecord && (
              <p>
                <b>Último Registro: </b>
                {FormatarDatas.dataHoraMinuto(lastRecord.dataDeRegistro)}
              </p>
            )}
            <p>
              <b>Última Atualização: </b>
              {FormatarDatas.horaMinutoSegundo(planta?.ultimaAtualizacao)}
            </p>
          </>
        )}
      </div>

      {isActionLoading ? (
        <div className="Acoes">
          <Loading minHeight="100px" logoHeight="50px" logoWidth="100%" />
        </div>
      ) : (
        <div className="Acoes">
          {(nenhuma || aguardando) && (
            <>
              <RefreshQueryButton
                queryKeys={['planta']}
                className="refreshButton"
                observeVariable={planta?.ultimaAtualizacao}
              />
              <h3>
                {titulo}
                {aguardando && <Tooltip texts={[tip1, tip2]} />}
              </h3>
              <button onClick={handleClick} className="action">
                {tituloBotao}
              </button>
            </>
          )}

          {confirmado && (
            <>
              <h3>{titulo}</h3>
              <FontAwesomeIcon icon={faCircleCheck} className="svg" />
            </>
          )}
        </div>
      )}
    </SolicitarNovoRegistroStyle>
  );
};
