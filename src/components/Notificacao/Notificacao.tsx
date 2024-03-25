import React, { useEffect, useState } from "react";
import { NotificacaoStyle } from "./NotificacaoStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBell, faCircleExclamation, faCircleXmark, faSquareCheck, faTriangleExclamation,} from "@fortawesome/free-solid-svg-icons";
import { INotificacao, useNotificacoes } from "../../contexts/NotificacoesProvider";

interface NotificacaoProps {
  notificacao: INotificacao;
}

export const Notificacoes = () => {
  const { notificacoes } = useNotificacoes();
  const [notificacoesFiltradas, setNotificacoesFiltradas] = useState(notificacoes);

  useEffect(() => {
    setNotificacoesFiltradas(notificacoes.filter((notificacao) => notificacao.visivel));
  }, [notificacoes]);

  return (
    <NotificacaoStyle>
      {notificacoesFiltradas.map((notificacao) => (
        <Notificacao notificacao={notificacao} key={notificacao.id} />
      ))}
    </NotificacaoStyle>
  );
};

const Notificacao: React.FC<NotificacaoProps> = ({ notificacao }) => {
  const [visivel, setVisivel] = useState<boolean>(true);

  const destruirNotificacao = () => {
    notificacao.matarNotificacao();
    setVisivel(false);
  };

  useEffect(() => {
    setTimeout(() => {
      destruirNotificacao();
    }, notificacao.tempoEmSeg * 1000);
  }, []);

  return (
    <>
      {visivel && (
        <div className={`${notificacao.tipo} mensagemNotificacaoDiv`}>
          {notificacao.tipo === "ERRO" && <FontAwesomeIcon icon={faTriangleExclamation} className="icone" />}
          {notificacao.tipo === "SUCESSO" && <FontAwesomeIcon icon={faSquareCheck} className="icone" />}
          {notificacao.tipo === "ALERTA" && <FontAwesomeIcon icon={faCircleExclamation} className="icone" />}
          {notificacao.tipo === "NOTIFICACAO" && <FontAwesomeIcon icon={faBell} className="icone" />}
          <p>{notificacao.mensagem}</p>
          <button onClick={destruirNotificacao}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
      )}
    </>
  );
};
