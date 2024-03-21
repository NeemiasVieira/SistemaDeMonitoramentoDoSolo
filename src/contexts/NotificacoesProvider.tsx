// Em um novo arquivo, por exemplo, StateContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Notificacao } from '../components/Notificacao/Notificacao';

interface INotificacao{
    tipo: "ALERTA" | "SUCESSO" | "ERRO" | "NOTIFICACAO" | null
    mensagem?: string
    tempoEmSeg?: number
}

const notificacaoInicial: INotificacao = {
    tipo: null,
}

const NotificacoesContext = createContext({
    notificacao: notificacaoInicial,
    setTipoMensagem: (tipoMensagem: "ALERTA" | "SUCESSO" | "ERRO" | "NOTIFICACAO") => null,
    setMensagem: (mensagem: string) => null,
    setTempoEmSeg: (tempoEmSeg: number) => null
})

interface NotificacoesProviderProps{
    children: any
}

export const NotificacoesProvider: React.FC<NotificacoesProviderProps> = ({ children }) => {
    
    const [notificacao, setNotificacao] = useState<INotificacao>(notificacaoInicial);

    useEffect(() => {
    },[notificacao])

    const setTipoMensagem = (tipo: "ALERTA" | "SUCESSO" | "ERRO" | "NOTIFICACAO") => {

        setNotificacao(estadoAnterior => {
           return {...estadoAnterior, tipo}
        })
    }

    const setMensagem = (mensagem: string) => {
        setNotificacao(estadoAnterior => {
            return {...estadoAnterior, mensagem};
        })
    } 

    const setTempoEmSeg = (tempoEmSeg: number) => {
        setNotificacao(estadoAnterior => {
            return {...estadoAnterior, tempoEmSeg}
        })
    }

    const contexto = {
        notificacao,
        setTipoMensagem,
        setMensagem,
        setTempoEmSeg
    }
  

  return (
    <NotificacoesContext.Provider value={contexto}>
        <h1>opaaaa</h1>
        <button onClick={() => {
            contexto.setMensagem("Mensagem de sucesso");
            contexto.setTempoEmSeg(3);
            contexto.setTipoMensagem("SUCESSO");
        }}>SUCESSO</button>
        <button onClick={() => {
            contexto.setMensagem("Mensagem de alerta");
            contexto.setTempoEmSeg(3);
            contexto.setTipoMensagem("ALERTA");
        }}>ALERTA</button>
        <button onClick={() => {
            contexto.setMensagem("Mensagem de Notificacao");
            contexto.setTempoEmSeg(3);
            contexto.setTipoMensagem("NOTIFICACAO");
        }}>NOTIFICACAO</button>
        <button onClick={() => {
            contexto.setMensagem("Mensagem de erro");
            contexto.setTempoEmSeg(3);
            contexto.setTipoMensagem("ERRO");
        }}>ERRO</button>
        {notificacao.mensagem && <Notificacao/>}
      {children}
    </NotificacoesContext.Provider>
  );
};

export const useNotificacoes = () => {
  const context = useContext(NotificacoesContext);
  if (!context) {
    throw new Error('useNotificacoes deve ser usado dentro de um NotificacoesProvider');
  }
  return context;
};