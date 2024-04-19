import React, { useEffect, useState } from "react";
import { useGetRelatorioSaude } from "../../../../services/API/Plants/useGetRelatorioSaude";
import { useGetAllPlants } from "../../../../services/API/Plants/useGetAllPlants";
import { useParams } from "react-router-dom";
import { RelatorioDeSaude } from "../../../../components/RelatorioDeSaude/RelatorioDeSaude";
import { Planta } from "../../Resumo/Resumo.types";
import { useGetSpecie } from "../../../../services/API/Species/useGetSpecie";
import { BotaoVoltar } from "../../../../components/Buttons/BotaoVoltar";
import { Loading } from "../../../../components/Loading/Loading";
import { PagRelatorioDeSaudeStyle } from "../../RelatorioDeSaude/RelatorioSaudeStyle";
import { useRegistrosContext } from "../../../../contexts/RegistrosContext";
import { useGetRelatorioSaudePorRegistro } from "../../../../services/API/Records/useGetRelatorioSaudePorRegistro";

const PagRelatorioSaudePorRegistro = () => {
  const { idRegistro } = useParams();
  const { idPlanta } = useRegistrosContext();
  const [ plantaSelecionada, setPlantaSelecionada ] = useState<Planta>();
  const { getSpecie, specieData } = useGetSpecie({
    nome: plantaSelecionada?.especie,
  });
  let { relatorioSaude, erroRelatorioSaude, getRelatorioSaude } =
    useGetRelatorioSaudePorRegistro(idRegistro);
  const { plantas } = useGetAllPlants();

  useEffect(() => {
    if (plantas) {
      setPlantaSelecionada(plantas.find((planta) => planta.id === idPlanta));
    }
  // eslint-disable-next-line
  }, [plantas]);

  useEffect(() => {
    console.log(plantaSelecionada);
    if (plantaSelecionada) {
      getSpecie();
      getRelatorioSaude();
    }
    // eslint-disable-next-line
  }, [plantaSelecionada]);

  return (
    <PagRelatorioDeSaudeStyle>
      <BotaoVoltar path={`/painel/registros/${idRegistro}`} />
      <div className="relatorioSaudeDiv">
        {relatorioSaude && specieData && !erroRelatorioSaude && (
          <RelatorioDeSaude relatorio={relatorioSaude} especie={specieData} />
        )}
      </div>

      {!relatorioSaude && <Loading minHeight={"70vh"} />}
    </PagRelatorioDeSaudeStyle>
  );
};

export default PagRelatorioSaudePorRegistro;
