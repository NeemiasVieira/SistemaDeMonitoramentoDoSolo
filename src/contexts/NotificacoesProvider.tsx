// Em um novo arquivo, por exemplo, StateContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { Notificacao } from "../components/Notificacao/Notificacao";

interface IExibirNotificaoProps {
  tipo: "ALERTA" | "SUCESSO" | "ERRO" | "NOTIFICACAO" | null;
  mensagem?: string;
  tempoEmSeg?: number;
}

interface INotificacao {
  exibirNotificacao?: (params: IExibirNotificaoProps) => void;
  matarNotificacao?: () => void;
  visivel: boolean;
  tipo?: "ALERTA" | "SUCESSO" | "ERRO" | "NOTIFICACAO" | null;
  mensagem?: string;
  tempoEmSeg?: number;
}

const notificacaoInicial: INotificacao = {
  visivel: false,
  exibirNotificacao: () => {},
  matarNotificacao: () => {},
};

const NotificacoesContext = createContext<{
  notificacao: INotificacao;
  matarNotificacao: () => void;
}>({
  notificacao: notificacaoInicial,
  matarNotificacao: () => {},
});

interface NotificacoesProviderProps {
  children: React.ReactNode;
}

export const NotificacoesProvider: React.FC<NotificacoesProviderProps> = ({ children }) => {
  const [notificacao, setNotificacao] = useState<INotificacao>(notificacaoInicial);

  useEffect(() => {
    setNotificacao({ visivel: false, exibirNotificacao, matarNotificacao });
  }, []);

  useEffect(() => {
    console.log(notificacao);
  }, [notificacao]);

  const exibirNotificacao = (params: IExibirNotificaoProps) => {
    setNotificacao({
      visivel: true,
      ...params,
      exibirNotificacao,
      matarNotificacao,
    });
  };

  const matarNotificacao = () => {
    setNotificacao((estadoAnterior) => {
      return { ...estadoAnterior, visivel: false };
    });
  };

  return (
    <NotificacoesContext.Provider value={{ notificacao, matarNotificacao }}>
      {notificacao.visivel && <Notificacao />}
      {children}
    </NotificacoesContext.Provider>
  );
};

export const useNotificacoes = () => {
    const context = useContext(NotificacoesContext);
    if (!context) {
        throw new Error("useNotificacoes deve ser usado dentro de um NotificacoesProvider");
    }
    return context;
};

// Descomentar para habilitar testes de notificacoes
{/* <h1>opaaaa</h1>
<button
  onClick={() => {
    console.log();
    notificacao.exibirNotificacao({
      tipo: "SUCESSO",
      mensagem: "Mensagem de sucesso",
      tempoEmSeg: 3,
    });
  }}
>
  SUCESSO
</button>
<button
  onClick={() => {
    notificacao.exibirNotificacao({
      tipo: "ALERTA",
      mensagem: "Mensagem de alerta",
      tempoEmSeg: 3,
    });
  }}
>
  ALERTA
</button>
<button
  onClick={() => {
    notificacao.exibirNotificacao({
      tipo: "NOTIFICACAO",
      mensagem: "Mensagem de Notificacao",
      tempoEmSeg: 3,
    });
  }}
>
  NOTIFICACAO
</button>
<button
  onClick={() => {
    notificacao.exibirNotificacao({
      tipo: "ERRO",
      mensagem: "Mensagem de erro",
      tempoEmSeg: 3,
    });
  }}
>
  ERRO
</button> */}