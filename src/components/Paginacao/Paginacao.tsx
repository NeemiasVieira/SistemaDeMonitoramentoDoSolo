import React from "react";
import { PaginacaoStyle } from "./PaginacaoStyle";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PaginacaoProps{
  pagina: number;
  totalPaginas: number;
  registrosPorPag: number;
  setPagina: React.Dispatch<React.SetStateAction<number>>;
  SetRegistrosPorPag: React.Dispatch<React.SetStateAction<number>>;
}

export const Paginacao: React.FC<PaginacaoProps> = ({pagina, setPagina, totalPaginas, registrosPorPag, SetRegistrosPorPag}) => {

  const voltarPagina = () => {
    if(pagina >= 2) setPagina(pagina - 1);
  }

  const avancarPagina = () => {
    if(pagina + 1 <= totalPaginas) setPagina(pagina + 1);
  }

  return(
    <PaginacaoStyle>
      <select onChange={(e) => SetRegistrosPorPag(Number(e.target.value))} value={registrosPorPag}>
        <option value={5}>5 registros por página</option>
        <option value={10}>10 registros por página</option>
        <option value={25}>25 registros por página</option>
        <option value={50}>50 registros por página</option>
        <option value={75}>75 registros por página</option>
        <option value={100}>100 registros por página</option>
      </select>
      <span>Página {pagina} de  {totalPaginas}</span>
      <button onClick={voltarPagina}><FontAwesomeIcon icon={faCaretLeft} /></button>
      <button onClick={avancarPagina}><FontAwesomeIcon icon={faCaretRight} /></button>
    </PaginacaoStyle>
  )
}