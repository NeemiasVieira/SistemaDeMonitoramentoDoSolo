import React, { createContext, useContext, useReducer } from 'react';
import { Notificacoes } from '@components/Notificacao/Notificacoes';

export interface Notificacao {
  id: number;
  tipo: 'ALERTA' | 'SUCESSO' | 'ERRO' | 'NOTIFICACAO';
  mensagem: string;
  tempoEmSeg: number;
  fechar: () => void;
}

export type NotificarProps = Omit<Notificacao, 'id' | 'fechar' | 'tipo' | 'tempoEmSeg'> & {
  tipo?: Notificacao['tipo'];
  tempoEmSeg?: number;
};

export type Notificar = (notificacao: NotificarProps) => void;

interface AddAction {
  type: 'ADD';
  payload: Notificacao;
}

interface RemoveAction {
  type: 'REMOVE';
  id: number;
}

type NotificacoesAction = AddAction | RemoveAction;

interface INotificacoesContext {
  notificar: Notificar;
}

interface NotificacoesProviderProps {
  children: React.ReactNode;
}

const NotificacoesContext = createContext<INotificacoesContext>(null);

const notificacoesReducer = (state: Notificacao[], action: NotificacoesAction) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { ...action.payload }];
    case 'REMOVE':
      return state.filter((n) => n.id !== action.id);
    default:
      return state;
  }
};

export const NotificacoesProvider: React.FC<NotificacoesProviderProps> = ({ children }) => {
  const [notificacoes, dispatch] = useReducer(notificacoesReducer, []);

  const notificar: Notificar = (notificacao) => {
    const tempoEmSeg = notificacao.tempoEmSeg || 4;
    const id = Date.now();
    const tipo = notificacao.tipo || 'NOTIFICACAO';
    const timeOut = setTimeout(() => {
      dispatch({ type: 'REMOVE', id });
    }, tempoEmSeg * 1000);
    const fechar = () => {
      clearTimeout(timeOut);
      dispatch({ type: 'REMOVE', id });
    };
    dispatch({
      type: 'ADD',
      payload: { ...notificacao, tipo, tempoEmSeg, id, fechar },
    });
  };

  return (
    <NotificacoesContext.Provider value={{ notificar }}>
      {notificacoes.length > 0 && <Notificacoes notificacoes={notificacoes} />}
      {children}
    </NotificacoesContext.Provider>
  );
};

export const useNotificacoes = () => {
  const context = useContext(NotificacoesContext);
  if (!context) throw new Error('useNotificacoes deve ser usado dentro de um NotificacoesProvider');
  return context;
};
