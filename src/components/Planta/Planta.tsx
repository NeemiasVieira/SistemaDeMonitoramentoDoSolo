import React, { useCallback } from 'react';
import { PlantaStyle } from './PlantaStyle';
import { useNavigate } from 'react-router-dom';
import { FormatarDatas } from '@assets/utils/FormatDate';
import { Planta as IPlanta } from '@pages/PainelDeControle/Resumo/Resumo.types';
import manjericao from '@assets/img/manjericao2.png';
import plantagenerica from '@assets/img/plantagenerica.png';
import { useNotificacoes } from '../../contexts/NotificacoesProvider';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TagSimulado } from '@components/TagSimulado/TagSimulado';
import { useApplication } from '@contexts/ApplicationContext';
import { DeleteButton } from '@components/Buttons/DeleteButton/DeleteButton';
import { useDeletePlant } from '@services/API/Plants/useDeletePlant';
import { UpdateButton } from '@components/Buttons/UpdateButton';

interface PlantaProps {
  planta: IPlanta;
  handleUpdate: (idPlanta?: string) => void;
}

export const Planta: React.FC<PlantaProps> = ({ planta, handleUpdate }) => {
  const navigate = useNavigate();
  const { notificar } = useNotificacoes();
  const { simulationMode } = useApplication();
  const { confirmDeletePlant } = useDeletePlant();

  const handleDelete = () => {
    notificar({ tipo: 'NOTIFICACAO', mensagem: 'Solicitação de exclusão enviada', tempoEmSeg: 3 });
    confirmDeletePlant(planta.id);
  };

  const navegarParaControle = (idPlanta: string) => {
    navigate(`/painel/plantas/${idPlanta}`);
  };

  const copiarIDPlanta = useCallback(() => {
    navigator.clipboard
      .writeText(planta.id)
      .then(() => {
        notificar({
          tipo: 'NOTIFICACAO',
          mensagem: 'ID da planta copiado com sucesso para área de transferência.',
          tempoEmSeg: 3,
        });
      })
      .catch(() => {
        notificar({ tipo: 'ERRO', mensagem: 'Falha ao copiar ID da plana para área de transferência', tempoEmSeg: 3 });
      });
  }, [planta.id, notificar]);

  return (
    <PlantaStyle>
      <h2 className="nomeDaPlanta">{planta?.nome}</h2>

      <div className="Planta">
        {planta?.especie === 'Manjericão' && (
          <img src={manjericao} className="imagemPlanta" alt="Imagem representativa do Manjericão"></img>
        )}
        {planta?.especie !== 'Manjericão' && (
          <img src={plantagenerica} className="imagemPlanta" alt="Imagem representativa de uma planta genérica"></img>
        )}
        <div className="infoPlanta">
          <h3>Informações da Planta</h3>
          <p>
            <strong>Espécie: </strong>
            {planta?.especie}
          </p>
          <p>
            <strong>Data da plantação: </strong>
            {FormatarDatas.diaMesAno(planta?.dataDaPlantacao)}
          </p>
          <p>
            <strong>Identificador:</strong>
            <button onClick={copiarIDPlanta} className="copyId">
              {planta.id.slice(-7)} <FontAwesomeIcon icon={faCopy} />
            </button>
          </p>
          {simulationMode && <TagSimulado simulado={planta?.simulado} />}
          <div className="actions">
            <button className="manageButton" onClick={() => navegarParaControle(planta.id)}>
              Monitorar
            </button>
            <UpdateButton onCLick={() => handleUpdate(planta?.id)} />
            <DeleteButton onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </PlantaStyle>
  );
};
