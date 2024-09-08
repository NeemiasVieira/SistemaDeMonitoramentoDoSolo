import React from "react";
import { RegistroStyle } from "./RegistroStyle";
import { Record } from "@services/API/Records/useGetAllRecordsPaginated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useRegistrosContext } from "../../contexts/RegistrosContext";
import { useNavigate } from "react-router-dom";
import { FormatarDatas } from "@assets/utils/FormatDate";

export interface RegistroProps {
  registro: Record;
}

export const Registro: React.FC<RegistroProps> = ({ registro }) => {
  const { setRegistroEmMemoria } = useRegistrosContext();
  const navigate = useNavigate();

  return (
    <RegistroStyle>
      <h2>{registro.nuRegistro}</h2>
      <p>{FormatarDatas.dataHoraMinuto(registro.dataDeRegistro)}</p>
      {registro?.imagem ? <FontAwesomeIcon icon={faImage} /> : <span></span>}
      <button
        onClick={() => {
          setRegistroEmMemoria(registro);
          navigate(`/painel/registros/${registro.id}`);
        }}
      >
        Ver detalhes
      </button>
    </RegistroStyle>
  );
};
