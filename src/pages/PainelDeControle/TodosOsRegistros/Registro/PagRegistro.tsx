import { BotaoVoltar } from "@components/Buttons/BotaoVoltar";
import { DadosRegistro } from "@components/DadosRegistro/DadosRegistro";
import { Loading } from "@components/Loading/Loading";
import { faFilePdf, faFileWaveform } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGeneratePdf } from "@services/API/Records/useGeneratePdf";
import { useGetRecord } from "@services/API/Records/useGetRecord";
import { Link, useParams } from "react-router-dom";
import { useRegistrosContext } from "../../../../contexts/RegistrosContext";
import { PagRegistroStyle } from "./PagRegistroStyle";

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
            <h2 className="nuRegistro">
              Registro n° {registro?.nuRegistro || record?.nuRegistro}
            </h2>

            <div className="botoesAcao">
              <Link
                to={`/painel/registros/${idRegistro}/saude`}
                className="botaoSaude"
              >
                <FontAwesomeIcon icon={faFileWaveform} className="ico" /> Saúde
                do Relatório
              </Link>
              <button
                className="BotaoDownloadPDF"
                onClick={() => generatePdf()}
              >
                <FontAwesomeIcon icon={faFilePdf} className="ico" />
                Baixar Registro
              </button>
            </div>
          </section>

          <section className="DadosSensores">
            <DadosRegistro
              registro={registro ?? record}
              ultimaAtualizacao={false}
            />
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
