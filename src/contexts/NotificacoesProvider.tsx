import React, { createContext, useContext, useState } from "react";
import { Notificacoes } from "@components/Notificacao/Notificacao";
import { v4 as uuidv4 } from "uuid";

interface NotificacaoConstructor {
  tipo: "ALERTA" | "SUCESSO" | "ERRO" | "NOTIFICACAO" | null;
  mensagem?: string;
  tempoEmSeg?: number;
}

interface NotificacoesProviderProps {
  children: React.ReactNode;
}

interface INotificacoesContext {
  notificacoes: INotificacao[];
  notificar: (notificacao: NotificacaoConstructor) => void;
}

export class INotificacao {
  public mensagem: string;
  public tipo: "ALERTA" | "SUCESSO" | "ERRO" | "NOTIFICACAO";
  public visivel: boolean;
  public tempoEmSeg: number;
  public id: string;

  constructor(params: NotificacaoConstructor) {
    this.mensagem = params.mensagem;
    this.tipo = params.tipo;
    this.tempoEmSeg = params.tempoEmSeg;
    this.visivel = true;
    this.id = uuidv4();

    setTimeout(() => {
      this.matarNotificacao();
    }, this.tempoEmSeg * 1000);
  }

  matarNotificacao() {
    this.visivel = false;
  }
}

const mapearNotificacao = (mensagem: string): string => {
  switch (mensagem) {
  case "jwt expired":
    return "Sessão expirada, por favor faça login novamente";
  }
};

const NotificacoesContext = createContext<INotificacoesContext>({
  notificacoes: [],
  notificar: () => {},
});

export const NotificacoesProvider: React.FC<NotificacoesProviderProps> = ({ children }) => {
  const [notificacoes, setNotificacoes] = useState<INotificacao[]>([]);

  const notificar = async (params: NotificacaoConstructor) => {
    const notificacao = new INotificacao(params);
    setNotificacoes((valoresAnteriores) => {
      const mensagemMapeada = mapearNotificacao(notificacao.mensagem);

      if (!notificacao.mensagem || notificacao.mensagem?.length === 0) notificacao.tempoEmSeg = 0;

      if (mensagemMapeada && mensagemMapeada.length > 0) notificacao.mensagem = mensagemMapeada;
      return [...valoresAnteriores, notificacao];
    });
  };

  //  const notificar2 = () => notificar({tipo: "NOTIFICACAO", tempoEmSeg: 5, mensagem: "Mensagem de notificacao"});
  //  const alertar = () => notificar({tipo: "ALERTA", tempoEmSeg: 5, mensagem: "Mensagem de alerta"});
  //  const criarErro = () => notificar({tipo: "ERRO", tempoEmSeg: 5, mensagem: "Mensagem de erro"});
  //  const sucesso = () => notificar({tipo: "SUCESSO", tempoEmSeg: 5, mensagem: "Mensagem de sucesso"});

  return (
    <NotificacoesContext.Provider value={{ notificacoes, notificar }}>
      {/* <h1>Teste do sistema de notificacoes</h1>
      <button onClick={notificar2}>NOTIFICACAO</button>
      <button onClick={alertar}>ALERTA</button>
      <button onClick={criarErro}>ERRO</button>
      <button onClick={sucesso}>SUCESSO</button>  */}
      {notificacoes.length > 0 && <Notificacoes />}
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
