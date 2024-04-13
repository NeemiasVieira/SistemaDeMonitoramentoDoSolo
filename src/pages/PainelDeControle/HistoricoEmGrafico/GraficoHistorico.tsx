import React, { useEffect, useState } from "react";
import { useGetAllPlants } from "../../../services/API/Plants/useGetAllPlants";
import { useNavigate, useParams } from "react-router-dom";
import { Planta } from "../Resumo/Resumo.types";
import { BotaoVoltar } from "../../../components/Buttons/BotaoVoltar";
import { Loading } from "../../../components/Loading/Loading";
import { PagGraficoHistoricoStyle } from "./GraficoHistoricoStyle";
import { useGetAllRecords } from "../../../services/API/Records/useGetAllRecords";
import { useLocation } from "react-router-dom";
import GraficoLinhas from "../../../components/GraficoLinhas/GraficoLinhas";

const PagGraficoHistorico = () => {
  //States
  const location = useLocation();
  const navigate = useNavigate();
  const paramsDeBusca = new URLSearchParams(location.search);
  const intBusca = Number(paramsDeBusca.get("intBusca"));
  const intDias = Number(paramsDeBusca.get("intDias"));
  const [intervaloDeDias, setIntervaloDeDias] = useState<string | number>(intDias);
  const [intervaloDeBusca, setIntervaloDeBusca] = useState<string | number>(intBusca);

  const { idPlanta } = useParams();
  const [plantaSelecionada, setPlantaSelecionada] = useState<Planta>();
  const { plantas } = useGetAllPlants();
  const { allRecords, errorAllRecords, refetchAllRecords, allRecordsIsLoading } = useGetAllRecords({
    idPlanta: plantaSelecionada?.id,
    intervaloDeBusca,
    intervaloDeDias,
  });
  const params = {
    intervaloDeBusca,
    intervaloDeDias,
    setIntervaloDeBusca,
    setIntervaloDeDias,
    allRecordsIsLoading,
  };

  useEffect(() => {
    if (plantas) {
      setPlantaSelecionada(plantas.find((planta) => planta.id === idPlanta));
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plantas]);

  useEffect(() => {
    if (plantaSelecionada) {
      refetchAllRecords();
    }
    if (intervaloDeBusca || intervaloDeDias) {
      navigate(`${location.pathname}?intBusca=${intervaloDeBusca ?? 0}&intDias=${intervaloDeDias ?? 0}`);
    } else navigate(location.pathname); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plantaSelecionada, intervaloDeBusca, intervaloDeDias, intBusca, intDias]);

  return (
    <PagGraficoHistoricoStyle>
      <BotaoVoltar path={`/painel/plantas/${idPlanta}`} />
      <div className="GraficoDiv">
        {allRecords && !errorAllRecords && <GraficoLinhas params={params} records={allRecords} />}
        {!allRecords && <Loading minHeight={"70vh"} />}
      </div>
    </PagGraficoHistoricoStyle>
  );
};

export default PagGraficoHistorico;
