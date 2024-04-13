import React from "react";
import { RegistroStyle } from "./RegistroStyle";
import { Record } from "../../services/API/Records/useGetAllRecordsPaginated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useRegistrosContext } from "../../contexts/RegistrosContext";
import { useNavigate } from "react-router-dom";

const formatarData = (data: string) => {
  const novaData = new Date(data);
  const dia = novaData.getDate().toString().padStart(2, '0');
  const mes = (novaData.getMonth() + 1).toString().padStart(2, '0'); // Os meses começam de 0, então é necessário adicionar 1
  const ano = novaData.getFullYear();
  const hora = novaData.getHours().toString().padStart(2, '0');
  const minuto = novaData.getMinutes().toString().padStart(2, '0');
  
  return `${dia}/${mes}/${ano} - ${hora}:${minuto}h`;
}

export interface RegistroProps{
  registro: Record;
}

export const Registro: React.FC<RegistroProps> = ({ registro }) => {

  const { registroEmMemoria, setRegistroEmMemoria } = useRegistrosContext();
  const navigate = useNavigate();

  return(
    <RegistroStyle>
      <h2>{registro.nuRegistro}</h2>
      <p>{formatarData(registro.dataDeRegistro)}</p>
      {registro?.imagem ? <FontAwesomeIcon icon={faImage}/> : <span></span>}
      <button onClick={() => {
        setRegistroEmMemoria(registro);
        navigate(`/painel/registros/${registro.id}`)
      }}>Ver detalhes</button>
    </RegistroStyle>
  )
}