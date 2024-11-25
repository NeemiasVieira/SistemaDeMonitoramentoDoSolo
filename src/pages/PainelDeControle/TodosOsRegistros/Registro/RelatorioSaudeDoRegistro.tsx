import { BotaoVoltar } from '@components/Buttons/BotaoVoltar';
import { Loading } from '@components/Loading/Loading';
import { RelatorioDeSaude } from '@components/RelatorioDeSaude/RelatorioDeSaude';
import { useGetRecord } from '@services/API/Records/useGetRecord';
import { useGetRelatorioSaudePorRegistro } from '@services/API/Records/useGetRelatorioSaudePorRegistro';
import { useGetSpecie } from '@services/API/Species/useGetSpecie';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { PagRelatorioDeSaudeStyle } from '../../RelatorioDeSaude/RelatorioSaudeStyle';
import { useMutateRecordContext } from '@contexts/MutateRecordContext';

const PagRelatorioSaudePorRegistro = () => {
  const { idRegistro, idPlanta } = useParams();
  const { record: recordMemo, especie: especieMemo } = useMutateRecordContext();
  const { record: recordRequest } = useGetRecord(idRegistro);

  const record = useMemo(() => {
    return recordMemo?.id ? recordMemo : recordRequest;
  }, [recordMemo, recordRequest]);

  const { getSpecie, specieData } = useGetSpecie({
    id: record?.idEspecie,
  });
  const { relatorioSaude, erroRelatorioSaude, getRelatorioSaude } = useGetRelatorioSaudePorRegistro(idRegistro);

  const especie = useMemo(() => {
    return especieMemo ? especieMemo : specieData;
  }, [especieMemo, specieData]);

  useEffect(() => {
    if (record) {
      getSpecie();
      getRelatorioSaude();
    }
    // eslint-disable-next-line
  }, [record]);

  return (
    <PagRelatorioDeSaudeStyle>
      <BotaoVoltar path={`/painel/plantas/${idPlanta}/registros/${idRegistro}`} />
      <div className="relatorioSaudeDiv">
        {relatorioSaude && especie && !erroRelatorioSaude && (
          <RelatorioDeSaude relatorio={relatorioSaude} especie={especie} />
        )}
      </div>

      {!relatorioSaude && <Loading minHeight={'70vh'} />}
    </PagRelatorioDeSaudeStyle>
  );
};

export default PagRelatorioSaudePorRegistro;
