import React from "react";
import { SolicitarNovoRegistroStyle } from "./SolicitarNovoRegistroStyle";
import { useParams } from "react-router-dom";
import { useGetPlant } from "../../services/API/Plants/useGetPlant";
import { useGetLastRecord } from "../../services/API/Records/useGetLastRecord";
import { FormatarDatas } from "../../assets/utils/FormatDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useCancelarSolicitacao } from "../../services/API/Plants/useCancelarSolicitacao";
import { useEnviarSolicitacao } from "../../services/API/Plants/useEnviarSolicitacao";
import { Loading } from "../Loading/Loading";
import { useNotificacoes } from "../../contexts/NotificacoesProvider";
import { BotaoAtualizar } from "../Buttons/BotaoAtualizar";
import { Tooltip } from "../Buttons/ToolTip";

const tip1 = "Nesta etapa, caso os sensores estejam ativos, o registro será processado em aproximadamente 40 segundos.";
const tip2 = "Caso os sensores estejam desligados não se preocupe, pois assim que forem ativados, a sua solicitação de registro será processada :)";

const mapearTitulo = (solicitacaoNovoRegistro: "nenhuma" | "aguardando" | "confirmado") => {
  switch (solicitacaoNovoRegistro) {
    case "nenhuma":
      return "Nenhuma Solicitação ";
    case "aguardando":
      return "Solicitação Enviada";
    case "confirmado":
      return "Solicitação Concluída";
  }
};

const mapearTituloBotao = (solicitacaoNovoRegistro: "nenhuma" | "aguardando" | "confirmado") => {
  switch (solicitacaoNovoRegistro) {
    case "nenhuma":
      return "Solicitar novo registro";
    case "aguardando":
      return "Cancelar solicitação";
    case "confirmado":
      return "";
  }
};

export const SolicitarNovoRegistro = () => {
  const { idPlanta } = useParams();
  const { planta, isLoading, isLoadingNoCache } = useGetPlant(idPlanta);
  const { lastRecord } = useGetLastRecord(idPlanta);
  const { notificar } = useNotificacoes();

  const { cancelarSolicitacao, isLoading: cancelLoading } = useCancelarSolicitacao(idPlanta);
  const { enviarSolicitacao, isLoading: sendLoading } = useEnviarSolicitacao(idPlanta);

  const handleClick = () => {
    if (planta?.solicitacaoNovoRegistro === "aguardando"){
      cancelarSolicitacao();
      notificar({tipo: "NOTIFICACAO", mensagem: "Enviando solicitação de cancelamento de novo registro", tempoEmSeg: 4});
    } 
    else if (planta?.solicitacaoNovoRegistro === "nenhuma"){
      enviarSolicitacao();
      notificar({tipo: "NOTIFICACAO", mensagem: "Enviando solicitação de novo registro", tempoEmSeg: 4});
    } 
  };

  return (
    <SolicitarNovoRegistroStyle>
      {isLoading && <Loading minHeight="50px" logoHeight="60px" logoWidth="60px" />}
      <div className="botaoAtualizar">
        <BotaoAtualizar isLoading={isLoading || isLoadingNoCache} queryKeys={['planta']}/>
      </div>
    

      <div className="plantaInfo">
        {planta && lastRecord && (
          <>
            <h3>Informações da Planta</h3>
            <p>
              <b>Nome: </b>
              {planta.nome}
            </p>

            <p>
              <b>Espécie: </b>
              {planta.especie}
            </p>

            <p>
              <b>Última atualização: </b>
              {FormatarDatas.dataHoraMinuto(lastRecord.dataDeRegistro)}
            </p>
          </>
        )}
      </div>

      {(planta?.solicitacaoNovoRegistro === "nenhuma" || planta?.solicitacaoNovoRegistro === "aguardando") && (
        <div className="Acoes">
          <h3>{mapearTitulo(planta.solicitacaoNovoRegistro)} {mapearTitulo(planta.solicitacaoNovoRegistro) === "Solicitação Enviada" && <Tooltip texts={[tip1, tip2]}/>}</h3>
          {(sendLoading || cancelLoading || isLoading || isLoadingNoCache) && (
            <Loading minHeight="20px" logoHeight="40px" logoWidth="40px" />
          )}
          {!sendLoading && !cancelLoading && !isLoadingNoCache && (
            <button onClick={handleClick}>{mapearTituloBotao(planta.solicitacaoNovoRegistro)}</button>
          )}
        </div>
      )}

      {planta?.solicitacaoNovoRegistro === "confirmado" && (
        <div className="Acoes">
          <h3>{mapearTitulo(planta.solicitacaoNovoRegistro)}</h3>
          <FontAwesomeIcon icon={faCircleCheck} className="svg" />
        </div>
      )}
    </SolicitarNovoRegistroStyle>
  );
};
