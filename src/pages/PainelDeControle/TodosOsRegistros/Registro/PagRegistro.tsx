import { BotaoVoltar } from '@components/Buttons/BotaoVoltar';
import { DadosRegistro } from '@components/DadosRegistro/DadosRegistro';
import { Loading } from '@components/Loading/Loading';
import { faFilePdf, faFileWaveform } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGeneratePdf } from '@services/API/Records/useGeneratePdf';
import { useGetRecord } from '@services/API/Records/useGetRecord';
import { Link, useParams } from 'react-router-dom';
import { PagRegistroStyle } from './PagRegistroStyle';
import { useMutateRecordContext } from '@contexts/MutateRecordContext';
import { useMemo } from 'react';

const PagRegistro = () => {
  const { record: recordMemo } = useMutateRecordContext();
  const { idRegistro, idPlanta } = useParams();
  const { record: recordRequest, recordIsLoading } = useGetRecord(idRegistro);
  const { generatePdf } = useGeneratePdf(idRegistro);

  const record = useMemo(() => {
    return recordMemo?.id ? recordMemo : recordRequest;
  }, [recordMemo, recordRequest]);

  return (
    <PagRegistroStyle>
      <BotaoVoltar path={`/painel/plantas/${idPlanta}/registros`} />
      <h1>Detalhes do Registro</h1>

      {!record?.id && recordIsLoading && <Loading minHeight="50vh" />}

      {record && (
        <>
          <section className="informacoes">
            <h2 className="nuRegistro">Registro n° {record.nuRegistro}</h2>

            <div className="botoesAcao">
              <Link to={`/painel/plantas/${idPlanta}/registros/${idRegistro}/saude`} className="botaoSaude">
                <FontAwesomeIcon icon={faFileWaveform} className="ico" /> Saúde do Relatório
              </Link>
              <button className="BotaoDownloadPDF" onClick={() => generatePdf()}>
                <FontAwesomeIcon icon={faFilePdf} className="ico" />
                Baixar Registro
              </button>
            </div>
          </section>

          <section className="DadosSensores">
            <DadosRegistro registro={record} ultimaAtualizacao={false} />
          </section>

          {record?.imagem && (
            <div className="imagemEDiagnosticoDiv">
              <h3>Imagem e Diagnóstico</h3>
              <div className="imagemEDiagnostico">
                <img src={record?.imagem} alt="" />
                <p>
                  <b>Diagnóstico: </b>
                  {record?.diagnostico}
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </PagRegistroStyle>
  );
};

export default PagRegistro;
