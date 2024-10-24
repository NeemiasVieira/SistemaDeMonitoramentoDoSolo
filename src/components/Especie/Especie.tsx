import React, { useMemo } from 'react';
import { EspecieStyle } from './EspecieStyle';
import { EspecieProps } from './Types';
import { DeleteButton } from '../Buttons/DeleteButton/DeleteButton';
import { UpdateButton } from '../Buttons/UpdateButton';
import { useNotificacoes } from '../../contexts/NotificacoesProvider';
import { formatarNumeroComPontos } from '../PopUps/SaudeParamsModal/SaudeParamsModal';
import { useApplication } from '@contexts/ApplicationContext';
import { TagSimulado } from '@components/TagSimulado/TagSimulado';
import { useIsMobile } from '@services/hooks/useIsMobile';

export const Especie: React.FC<EspecieProps> = ({ especie, handleUpdate, confirmDeleteSpecie }) => {
  const { notificar } = useNotificacoes();
  const { isAdmin } = useApplication();
  const { simulationMode } = useApplication();
  const isMobile = useIsMobile();

  const handleDelete = () => {
    notificar({ tipo: 'NOTIFICACAO', mensagem: 'Solicitação de exclusão enviada', tempoEmSeg: 4 });
    confirmDeleteSpecie(especie.id);
  };

  const disableMutation = useMemo(() => {
    return !isAdmin && !especie.simulado;
  }, [isAdmin, especie.simulado]);

  return (
    <EspecieStyle>
      {simulationMode && !isMobile && (
        <div className="tagSimulado">
          <TagSimulado simulado={especie.simulado} />
        </div>
      )}
      <div className="titleAndButtons">
        <h3>{especie.nome}</h3>

        <div className="buttonActions">
          <UpdateButton onCLick={() => handleUpdate(especie)} disabled={disableMutation} />
          <DeleteButton onDelete={handleDelete} disabled={disableMutation} />
        </div>
      </div>
      {simulationMode && isMobile && (
        <span className="tagSimuladoMobile">
          <TagSimulado simulado={especie.simulado} />
        </span>
      )}
      <p className="descricao">{especie.descricao}</p>
      <table>
        <thead>
          <tr>
            <th>Parâmetro</th>
            <th>Valor mínimo</th>
            <th>Valor máximo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nitrogênio</td>
            <td>{especie.parametros.nitrogenio.min} mg/Kg</td>
            <td>{especie.parametros.nitrogenio.max} mg/Kg</td>
          </tr>
          <tr>
            <td>Fósforo</td>
            <td>{especie.parametros.fosforo.min} mg/Kg</td>
            <td>{especie.parametros.fosforo.max} mg/Kg</td>
          </tr>
          <tr>
            <td>Potássio</td>
            <td>{especie.parametros.potassio.min} mg/Kg</td>
            <td>{especie.parametros.potassio.max} mg/Kg</td>
          </tr>
          <tr>
            <td>Luz</td>
            <td>{formatarNumeroComPontos(especie.parametros.luz.min)} lx (lux)</td>
            <td>{formatarNumeroComPontos(especie.parametros.luz.max)} lx (lux)</td>
          </tr>
          <tr>
            <td>Umidade</td>
            <td>{especie.parametros.umidade.min} %</td>
            <td>{especie.parametros.umidade.max} %</td>
          </tr>
          <tr>
            <td>Temperatura</td>
            <td>{especie.parametros.temperatura.min} ºC</td>
            <td>{especie.parametros.temperatura.max} ºC</td>
          </tr>
          <tr>
            <td>pH</td>
            <td>{especie.parametros.pH.min}</td>
            <td>{especie.parametros.pH.max}</td>
          </tr>
        </tbody>
      </table>
    </EspecieStyle>
  );
};
