import React from 'react';
import { RegistroStyle } from './RegistroStyle';
import { Record } from '@services/API/Records/useGetAllRecordsPaginated';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { FormatarDatas } from '@assets/utils/FormatDate';
import { useMutateRecordContext } from '@contexts/MutateRecordContext';

export interface RegistroProps {
  registro: Record;
}

export const Registro: React.FC<RegistroProps> = ({ registro }) => {
  const { setRecord } = useMutateRecordContext();
  const navigate = useNavigate();
  const { idPlanta } = useParams();

  return (
    <RegistroStyle>
      <h2>{registro.nuRegistro}</h2>
      <p>{FormatarDatas.dataHoraMinuto(registro.dataDeRegistro)}</p>
      {registro?.imagem ? <FontAwesomeIcon icon={faImage} /> : <span></span>}
      <button
        onClick={() => {
          setRecord(registro);
          navigate(`/painel/plantas/${idPlanta}/registros/${registro.id}`);
        }}
      >
        Ver detalhes
      </button>
    </RegistroStyle>
  );
};
