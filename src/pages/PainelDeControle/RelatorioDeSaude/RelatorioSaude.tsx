import React, { useEffect, useState } from "react";
import { useGetRelatorioSaude } from "../../../services/API/Plants/useGetRelatorioSaude";
import { useGetAllPlants } from "../../../services/API/Plants/useGetAllPlants";
import { useParams } from "react-router-dom";
import { RelatorioDeSaude } from "../../../components/RelatorioDeSaude/RelatorioDeSaude";
import { Planta } from "../Resumo/Resumo.types";
import { useGetSpecie } from "../../../services/API/Species/useGetSpecie";
import { PagRelatorioDeSaudeStyle } from "./RelatorioSaudeStyle";
import { BotaoVoltar } from "../../../components/BotaoVoltar/BotaoVoltar";
import { Loading } from "../../../components/Loading/Loading";

const PagRelatorioSaude = () => {
  const { idPlanta } = useParams();
  const [plantaSelecionada, setPlantaSelecionada] = useState<Planta>();
  const { getSpecie, specieData, specieError, specieIsLoading } = useGetSpecie({
    nome: plantaSelecionada?.especie,
  });
  let { relatorioSaude, isLoadingSaude, erroRelatorioSaude, refetchRelatorioSaude } =
    useGetRelatorioSaude(idPlanta);
  const { plantas, isLoading: plantasLoading, erro: erroAllPlants, refetch: refetchAllPlants } = useGetAllPlants();

  useEffect(() => {
    if (plantas) {
      setPlantaSelecionada(plantas.find((planta) => planta.id === idPlanta));
    }
  }, [plantas]);

  useEffect(() => {
    if (plantaSelecionada) {
      getSpecie();
      refetchRelatorioSaude();
    }
  }, [plantaSelecionada]);

  return (
    <PagRelatorioDeSaudeStyle>
      <BotaoVoltar path={`/painel/plantas/${idPlanta}`} />
      <div className="relatorioSaudeDiv">
        {relatorioSaude && !erroRelatorioSaude && (
          <RelatorioDeSaude relatorio={relatorioSaude} especie={specieData} />
        )}
      </div>

      {!relatorioSaude && <Loading minHeight={"400px"} />}
    </PagRelatorioDeSaudeStyle>
  );
};

export default PagRelatorioSaude;
