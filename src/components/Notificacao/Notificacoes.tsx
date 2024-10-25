import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faCircleExclamation,
  faCircleXmark,
  faSquareCheck,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { Notificacao } from '../../contexts/NotificacoesProvider';
import { NotificacoesStyle } from './NotificacoesStyle';

interface NotificacoesProps {
  notificacoes: Notificacao[];
}

const icones = {
  ERRO: faCircleExclamation,
  SUCESSO: faSquareCheck,
  ALERTA: faTriangleExclamation,
  NOTIFICACAO: faBell,
} as const;

export const Notificacoes: React.FC<NotificacoesProps> = ({ notificacoes }) => {
  return (
    <NotificacoesStyle>
      {notificacoes.map((notificacao) => (
        <div className={`${notificacao.tipo} notificacao`} key={notificacao.id}>
          <FontAwesomeIcon icon={icones[notificacao.tipo]} className="icone" />
          <p>{notificacao.mensagem}</p>
          <button onClick={() => notificacao.fechar()}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
      ))}
    </NotificacoesStyle>
  );
};
