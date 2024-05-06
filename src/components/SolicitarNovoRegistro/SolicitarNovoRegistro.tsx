import React, { useEffect } from "react";
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
import { useQueryClient } from "react-query";

const mapearTitulo = (solicitacaoNovoRegistro: "nenhuma" | "aguardando" | "confirmado") => {
  switch (solicitacaoNovoRegistro) {
    case "nenhuma":
      return "Você pode: ";
    case "aguardando":
      return "Solicitação enviada";
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
  const { planta, isLoading } = useGetPlant(idPlanta);
  const { lastRecord } = useGetLastRecord(idPlanta);
  const { notificar } = useNotificacoes();
  const queryClient = useQueryClient();

  const { cancelarSolicitacao, isLoading: cancelLoading } = useCancelarSolicitacao(idPlanta);
  const { enviarSolicitacao, isLoading: sendLoading } = useEnviarSolicitacao(idPlanta);

  const handleClick = () => {
    if (planta?.solicitacaoNovoRegistro === "aguardando"){
      cancelarSolicitacao();
      notificar({tipo: "NOTIFICACAO", mensagem: "Solicitação de cancelamento enviada", tempoEmSeg: 4});
    } 
    else if (planta?.solicitacaoNovoRegistro === "nenhuma"){
      enviarSolicitacao();
      notificar({tipo: "NOTIFICACAO", mensagem: "Solicitação enviada", tempoEmSeg: 4});
    } 

    setTimeout(() => {
      queryClient.invalidateQueries("planta");
    }, 1500)
  };

  return (
    <SolicitarNovoRegistroStyle>
      {isLoading && <Loading minHeight="50px" logoHeight="60px" logoWidth="60px" />}

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
          <h3>{mapearTitulo(planta.solicitacaoNovoRegistro)}</h3>
          {(sendLoading || cancelLoading || isLoading) && (
            <Loading minHeight="20px" logoHeight="40px" logoWidth="40px" />
          )}
          {!sendLoading && !cancelLoading && (
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
