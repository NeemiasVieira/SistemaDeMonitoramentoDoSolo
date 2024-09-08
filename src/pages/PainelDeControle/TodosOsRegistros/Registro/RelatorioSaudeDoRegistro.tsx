import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RelatorioDeSaude } from "@components/RelatorioDeSaude/RelatorioDeSaude";
import { useGetSpecie } from "@services/API/Species/useGetSpecie";
import { BotaoVoltar } from "@components/Buttons/BotaoVoltar";
import { Loading } from "@components/Loading/Loading";
import { PagRelatorioDeSaudeStyle } from "../../RelatorioDeSaude/RelatorioSaudeStyle";
import { useRegistrosContext } from "../../../../contexts/RegistrosContext";
import { useGetRelatorioSaudePorRegistro } from "@services/API/Records/useGetRelatorioSaudePorRegistro";
import { useGetPlant } from "@services/API/Plants/useGetPlant";

const PagRelatorioSaudePorRegistro = () => {
  const { idRegistro } = useParams();
  const { idPlanta } = useRegistrosContext();
  const { planta } = useGetPlant(idPlanta);
  const { getSpecie, specieData } = useGetSpecie({
    nome: planta?.especie,
  });
  const { relatorioSaude, erroRelatorioSaude, getRelatorioSaude } = useGetRelatorioSaudePorRegistro(idRegistro);

  useEffect(() => {
    if (planta) {
      getSpecie();
      getRelatorioSaude();
    }
    // eslint-disable-next-line
  }, [planta]);

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
