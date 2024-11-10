import { faLaptop, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIsMobile } from '@services/hooks/useIsMobile';
import React from 'react';
import { Link } from 'react-router-dom';
import { useApplication } from '../../contexts/ApplicationContext';
import { useThemes } from '../../contexts/ThemeProvider';
import { IconeLogoSms } from '../Icones/sms-logo';
import { ToggleButton } from '@components/Buttons/ToggleButton/ToggleButton';

interface ListaNavegacaoProps {
  closeModal?: () => void;
}

export const ListaNavegacao: React.FC<ListaNavegacaoProps> = ({ closeModal }) => {
  const urlCompleta = window.location.href;
  const caminhoAtual = String(new URL(urlCompleta).pathname);
  const { theme, toggleTheme } = useThemes();
  const { Logout, isAdmin, auth, simulationMode, toggleSimulationMode } = useApplication();
  const isMobile = useIsMobile();

  const handleLogout = () => {
    closeModal();
    Logout();
  };

  return (
    <ul className="navegacao">
      <li className="logo">
        <IconeLogoSms path={'/'} />
      </li>

      <li className={caminhoAtual === '/aplicacao' ? 'selecionado' : 'naoSelecionado'}>
        <Link to="/aplicacao" onClick={closeModal}>
          Aplicação
        </Link>
      </li>

      <li className={caminhoAtual === '/faq' ? 'selecionado' : 'naoSelecionado'}>
        <Link to="/faq" onClick={closeModal}>
          FAQ
        </Link>
      </li>

      {auth && (
        <li className={caminhoAtual.includes('/painel') ? 'selecionado' : 'naoSelecionado'}>
          <Link to="/painel" onClick={closeModal}>
            Painel de Controle
          </Link>
        </li>
      )}

      {(isAdmin || simulationMode) && isMobile && (
        <li>
          <Link to="/painel/administrativo" onClick={closeModal}>
            Painel Administrativo
          </Link>
        </li>
      )}

      {(isMobile || (!isMobile && !auth)) && (
        <li className="switchTheme">
          <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} />
          {isMobile && <span className="texto">Tema {theme === 'light' ? 'claro' : 'escuro'}</span>}
          <label className="switch">
            <input type="checkbox" onChange={toggleTheme} checked={theme === 'light' ? false : true} />
            <span className="slider round"></span>
          </label>
        </li>
      )}

      {isMobile && (
        <li className="switchSimulationMode">
          <FontAwesomeIcon icon={faLaptop} /> <span className="texto">Modo simulação</span>
          <ToggleButton checked={simulationMode} onChange={toggleSimulationMode} />
        </li>
      )}

      {isMobile && auth && (
        <>
          <li>
            <Link to="/" onClick={handleLogout} className="logoutMobileButton">
              Logout
            </Link>
          </li>
        </>
      )}

      {!auth && (
        <li className="botaoLogin">
          <Link to="/login" onClick={closeModal}>
            Login
          </Link>
        </li>
      )}
    </ul>
  );
};
