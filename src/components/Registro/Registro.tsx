import { RegistroStyle } from './RegistroStyle';
import { Record } from '@services/API/Records/useGetAllRecordsPaginated';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { FormatarDatas } from '@assets/utils/FormatDate';
import { useMutateRecordContext } from '@contexts/MutateRecordContext';
import { DeleteButton } from '@components/Buttons/DeleteButton/DeleteButton';
import { useApplication } from '@contexts/ApplicationContext';
import { useDeleteRecord } from '@services/API/Records/useDeleteRecord';
import { UpdateButton } from '@components/Buttons/UpdateButton';

export interface RegistroProps {
  registro: Record;
}

export const Registro: React.FC<RegistroProps> = ({ registro }) => {
  const { setRecord } = useMutateRecordContext();
  const navigate = useNavigate();
  const { idPlanta } = useParams();
  const { simulationMode } = useApplication();
  const { deleteRecord } = useDeleteRecord();

  const handleUpdate = () => {
    setRecord(registro);
    navigate(`/painel/plantas/${idPlanta}/registros/${registro.id}/atualizar/imagem`);
  };

  return (
    <RegistroStyle>
      <div className="content">
        <h2>{registro.nuRegistro}</h2>
        <p>{FormatarDatas.dataHoraMinuto(registro.dataDeRegistro)}</p>
        {registro?.imagem ? (
          <FontAwesomeIcon icon={faImage} className="imageIcon" />
        ) : (
          <span className="imageSpan"></span>
        )}
      </div>

      <div className="actions">
        <button
          className="details"
          onClick={() => {
            setRecord(registro);
            navigate(`/painel/plantas/${idPlanta}/registros/${registro.id}`);
          }}
        >
          Detalhes
        </button>
        {registro.simulado && <UpdateButton disabled={!simulationMode} onCLick={handleUpdate} />}
        {registro.simulado && <DeleteButton disabled={!simulationMode} onDelete={() => deleteRecord(registro.id)} />}
      </div>
    </RegistroStyle>
  );
};
