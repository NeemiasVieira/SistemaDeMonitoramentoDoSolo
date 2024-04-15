import React, { useEffect, useState } from "react";
import { TodosOsRegistrosStyle } from "./TodosOsRegistrosStyle";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetAllRecordsPaginated } from "../../../services/API/Records/useGetAllRecordsPaginated";
import { Paginacao } from "../../../components/Paginacao/Paginacao";
import { Loading } from "../../../components/Loading/Loading";
import { Registro } from "../../../components/Registro/Registro";
import { BotaoVoltar } from "../../../components/Buttons/BotaoVoltar";
import { useRegistrosContext } from "../../../contexts/RegistrosContext";

const TodosOsRegistros = () => {

  //Params
  const { idPlanta } = useParams();
  const location = useLocation();
  const paramsDeBusca = new URLSearchParams(location.search);
  const rpp = Number(paramsDeBusca.get("rpp"));
  const pag = Number(paramsDeBusca.get("pag"));

  //States
  const [pagina, setPagina] = useState<number>(pag ?? 1);
  const [registrosPorPag, setRegistrosPorPag] = useState<number>(rpp ?? 10);

  //Hooks
  const { getAllRecordsPaginated, allRecordsPaginated, allRecordsPaginatedIsLoading } = useGetAllRecordsPaginated({idPlanta, pagina, registrosPorPag});
  const { setBackUrl } = useRegistrosContext();
  const navigate = useNavigate();
  
  
  useEffect(() => {
    setBackUrl(`${location.pathname}?rpp=${registrosPorPag ?? 10}&pag=${pagina ?? 1}`)
    getAllRecordsPaginated() // eslint-disable-next-line
  }, [registrosPorPag, pagina, idPlanta]);

  useEffect(() => {
    navigate(`${location.pathname}?rpp=${registrosPorPag ?? 10}&pag=${pagina ?? 1}`); // eslint-disable-next-line
  }, [pagina, registrosPorPag])

  return(
    <TodosOsRegistrosStyle>
      <BotaoVoltar path={`/painel/plantas/${idPlanta}`}/>
      <h1>Todos os Registros</h1>
      {allRecordsPaginatedIsLoading && <Loading minHeight={"70vh"}/>}
      {allRecordsPaginated && allRecordsPaginated.registros.map(registro => <Registro registro={registro} key={registro.id} />)}
      {allRecordsPaginated && <Paginacao setPagina={setPagina} pagina={pagina} totalPaginas={allRecordsPaginated.totalPaginas} registrosPorPag={registrosPorPag} SetRegistrosPorPag={setRegistrosPorPag}/>}
      

    </TodosOsRegistrosStyle>
  )
}

export default TodosOsRegistros;