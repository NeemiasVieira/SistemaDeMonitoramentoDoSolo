import { BotaoVoltar } from '@components/Buttons/BotaoVoltar';
import { Loading } from '@components/Loading/Loading';
import { RelatorioDeSaude } from '@components/RelatorioDeSaude/RelatorioDeSaude';
import { useGetPlant } from '@services/API/Plants/useGetPlant';
import { useGetRelatorioSaude } from '@services/API/Plants/useGetRelatorioSaude';
import { useGetSpecie } from '@services/API/Species/useGetSpecie';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PagRelatorioDeSaudeStyle } from './RelatorioSaudeStyle';

const PagRelatorioSaude = () => {
  const { idPlanta } = useParams();
  const { planta } = useGetPlant(idPlanta);
  const { getSpecie, specieData } = useGetSpecie({
    nome: planta?.especie,
  });
  const { relatorioSaude, erroRelatorioSaude, getRelatorioSaude } = useGetRelatorioSaude(idPlanta);

  useEffect(() => {
    if (planta) {
      getSpecie();
      getRelatorioSaude();
    }
    // eslint-disable-next-line
  }, [planta]);

  return (
    <PagRelatorioDeSaudeStyle>
      <BotaoVoltar path={`/painel/plantas/${idPlanta}`} />
      <div className="relatorioSaudeDiv">
        {relatorioSaude && !erroRelatorioSaude && <RelatorioDeSaude relatorio={relatorioSaude} especie={specieData} />}
      </div>

      {!relatorioSaude && <Loading minHeight={'70vh'} />}
    </PagRelatorioDeSaudeStyle>
  );
};

export default PagRelatorioSaude;
