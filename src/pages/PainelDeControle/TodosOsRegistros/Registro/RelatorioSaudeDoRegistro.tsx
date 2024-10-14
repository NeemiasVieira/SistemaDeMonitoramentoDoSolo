import { BotaoVoltar } from "@components/Buttons/BotaoVoltar";
import { Loading } from "@components/Loading/Loading";
import { RelatorioDeSaude } from "@components/RelatorioDeSaude/RelatorioDeSaude";
import { useGetRecord } from "@services/API/Records/useGetRecord";
import { useGetRelatorioSaudePorRegistro } from "@services/API/Records/useGetRelatorioSaudePorRegistro";
import { useGetSpecie } from "@services/API/Species/useGetSpecie";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PagRelatorioDeSaudeStyle } from "../../RelatorioDeSaude/RelatorioSaudeStyle";

const PagRelatorioSaudePorRegistro = () => {
  const { idRegistro } = useParams();
  const { record } = useGetRecord(idRegistro);
  const { getSpecie, specieData } = useGetSpecie({
    nome: record?.nomeEspecie,
  });
  const { relatorioSaude, erroRelatorioSaude, getRelatorioSaude } =
    useGetRelatorioSaudePorRegistro(idRegistro);

  useEffect(() => {
    if (record) {
      getSpecie();
      getRelatorioSaude();
    }
    // eslint-disable-next-line
  }, [record]);

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
