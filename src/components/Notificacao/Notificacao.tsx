import React, { useEffect } from "react";
import { NotificacaoStyle } from "./NotificacaoStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleExclamation, faSquareCheck, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useNotificacoes } from "../../contexts/NotificacoesProvider";

export const Notificacao = () => {

  const { notificacao, setMensagem } = useNotificacoes();

  useEffect(() => {
    setTimeout(() => {
      setMensagem(null)
    }, notificacao.tempoEmSeg*1000)
  }, [notificacao]);


  return (
    <NotificacaoStyle>
        <div className={`${notificacao.tipo} mensagemNotificacaoDiv`}>
         {notificacao.tipo === "ERRO" && <FontAwesomeIcon icon={faTriangleExclamation} className="icone" />}
         {notificacao.tipo === "SUCESSO" && <FontAwesomeIcon icon={faSquareCheck} className="icone" />}
         {notificacao.tipo === "ALERTA" && <FontAwesomeIcon icon={faCircleExclamation} className="icone" />}
         {notificacao.tipo === "NOTIFICACAO" && <FontAwesomeIcon icon={faBell} className="icone" />}
         <p>{notificacao.mensagem}</p>
        </div>
        {/* <button onClick={fecharNotificacao}>{mensagemBotao}</button> */}
    </NotificacaoStyle>
  );
};
