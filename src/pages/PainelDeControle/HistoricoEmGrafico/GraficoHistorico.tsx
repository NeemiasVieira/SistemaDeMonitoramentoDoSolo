import { BotaoVoltar } from "@components/Buttons/BotaoVoltar";
import GraficoLinhas from "@components/GraficoLinhas/GraficoLinhas";
import { Loading } from "@components/Loading/Loading";
import { useGetAllRecords } from "@services/API/Records/useGetAllRecords";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { PagGraficoHistoricoStyle } from "./GraficoHistoricoStyle";

const PagGraficoHistorico = () => {
  //States
  const location = useLocation();
  const navigate = useNavigate();
  const paramsDeBusca = new URLSearchParams(location.search);
  const intBusca = Number(paramsDeBusca.get("intBusca"));
  const intDias = Number(paramsDeBusca.get("intDias"));
  const [intervaloDeDias, setIntervaloDeDias] = useState<string | number>(
    intDias
  );
  const [intervaloDeBusca, setIntervaloDeBusca] = useState<string | number>(
    intBusca
  );

  const { idPlanta } = useParams();
  const { allRecords, errorAllRecords, allRecordsIsLoading } = useGetAllRecords(
    {
      idPlanta,
      intervaloDeBusca,
      intervaloDeDias,
    }
  );
  const params = {
    intervaloDeBusca,
    intervaloDeDias,
    setIntervaloDeBusca,
    setIntervaloDeDias,
    allRecordsIsLoading,
  };

  useEffect(() => {
    if (intervaloDeBusca || intervaloDeDias) {
      navigate(
        `${location.pathname}?intBusca=${intervaloDeBusca ?? 0}&intDias=${
          intervaloDeDias ?? 0
        }`
      );
    } else navigate(location.pathname); // eslint-disable-next-line
  }, [intervaloDeBusca, intervaloDeDias, intBusca, intDias]);

  return (
    <PagGraficoHistoricoStyle>
      <BotaoVoltar path={`/painel/plantas/${idPlanta}`} />
      <div className="GraficoDiv">
        {!errorAllRecords && (
          <GraficoLinhas params={params} records={allRecords} />
        )}
        {!allRecords && <Loading minHeight={"70vh"} />}
      </div>
    </PagGraficoHistoricoStyle>
  );
};

export default PagGraficoHistorico;
