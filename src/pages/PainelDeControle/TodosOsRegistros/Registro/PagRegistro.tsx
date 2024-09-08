import { PagRegistroStyle } from "./PagRegistroStyle";
import { useRegistrosContext } from "../../../../contexts/RegistrosContext";
import { BotaoVoltar } from "@components/Buttons/BotaoVoltar";
import { DadosRegistro } from "@components/DadosRegistro/DadosRegistro";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileWaveform } from "@fortawesome/free-solid-svg-icons";
import { useGetRecord } from "@services/API/Records/useGetRecord";
import { Loading } from "@components/Loading/Loading";
import { useGeneratePdf } from "@services/API/Records/useGeneratePdf";

const PagRegistro = () => {
  const { registroEmMemoria: registro, backUrl } = useRegistrosContext();
  const { idRegistro } = useParams();
  const { record, recordIsLoading } = useGetRecord(idRegistro);
  const { generatePdf } = useGeneratePdf(idRegistro);

  return (
    <PagRegistroStyle>
      <BotaoVoltar path={backUrl ?? `/painel`} />
      <h1>Detalhes do Registro</h1>

      {!registro && recordIsLoading && <Loading minHeight="50vh" />}

      {(registro || record) && (
        <>
          <section className="informacoes">
            {registro && <h2 className="nuRegistro">Registro n° {registro?.nuRegistro}</h2>}
            <div className="botoesAcao">
              <Link to={`/painel/registros/${idRegistro}/saude`} className="botaoSaude">
                <FontAwesomeIcon icon={faFileWaveform} className="ico" /> Saúde do Relatório
              </Link>
              <button className="BotaoDownloadPDF" onClick={() => generatePdf()}>
                <FontAwesomeIcon icon={faFilePdf} className="ico" />
                Baixar Registro
              </button>
            </div>
          </section>

          <section className="DadosSensores">
            <DadosRegistro registro={registro ?? record} ultimaAtualizacao={false} />
          </section>

          {(registro?.imagem || record?.imagem) && (
            <div className="imagemEDiagnosticoDiv">
              <h3>Imagem e Diagnóstico</h3>
              <div className="imagemEDiagnostico">
                <img src={registro?.imagem ?? record?.imagem} alt="" />
                <p>
                  <b>Diagnóstico: </b>
                  {registro?.diagnostico ?? record?.diagnostico}
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
