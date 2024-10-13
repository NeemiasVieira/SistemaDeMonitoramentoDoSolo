import { BotaoVoltar } from "@components/Buttons/BotaoVoltar";
import { Loading } from "@components/Loading/Loading";
import { RelatorioDeSaude } from "@components/RelatorioDeSaude/RelatorioDeSaude";
import { useGetPlant } from "@services/API/Plants/useGetPlant";
import { useGetRelatorioSaudePorRegistro } from "@services/API/Records/useGetRelatorioSaudePorRegistro";
import { useGetSpecie } from "@services/API/Species/useGetSpecie";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRegistrosContext } from "../../../../contexts/RegistrosContext";
import { PagRelatorioDeSaudeStyle } from "../../RelatorioDeSaude/RelatorioSaudeStyle";

const PagRelatorioSaudePorRegistro = () => {
  const { idRegistro } = useParams();
  const { idPlanta } = useRegistrosContext();
  const { planta } = useGetPlant(idPlanta);
  const { getSpecie, specieData } = useGetSpecie({
    nome: planta?.especie,
  });
  const { relatorioSaude, erroRelatorioSaude, getRelatorioSaude } =
    useGetRelatorioSaudePorRegistro(idRegistro);

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
