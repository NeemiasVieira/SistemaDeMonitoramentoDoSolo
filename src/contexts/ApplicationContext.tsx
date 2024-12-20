import { limparLocalStorage } from '@assets/utils/limparLocalStorage';
import { Footer } from '@components/Footer/Footer';
import { Navigation } from '@components/Navigation/Navigation';
import { MutationKeys } from '@services/API/types';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ApplicationBackgroundStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column wrap;
  min-height: calc(100vh - 70px);
  margin-top: 70px;
  max-width: 100vw;
  overflow-x: hidden;

  @media screen and (max-width: 480px) {
    min-height: 1500px;
  }
`;

interface ICreateContext {
  Logout: () => void;
  isAdmin: boolean;
  simulationMode: boolean;
  auth: boolean;
  toggleSimulationMode: () => void;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IApplicationProvider {
  children: React.ReactNode;
}

const ApplicationContext = createContext<ICreateContext>({
  isAdmin: localStorage.getItem('profile') === 'admin' ? true : false,
  simulationMode: localStorage.getItem('simulationMode') === 'false' ? false : true,
  auth: localStorage.getItem('token') ? true : false,
  Logout: () => {},
  setIsAdmin: () => {},
  setAuth: () => {},
  toggleSimulationMode: () => {},
});

export const ApplicationProvider: React.FC<IApplicationProvider> = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(localStorage.getItem('token') ? true : false);
  const [simulationMode, setSimulationMode] = useState<boolean>(
    localStorage.getItem('simulationMode') === 'false' ? false : true
  );
  const [isAdmin, setIsAdmin] = useState<boolean>(localStorage.getItem('profile') === 'admin' ? true : false);
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const toggleSimulationMode = () => {
    setSimulationMode((prevValue) => {
      localStorage.setItem('simulationMode', String(!prevValue));
      return !prevValue;
    });
  };

  const Logout = () => {
    setAuth(false);
    setIsAdmin(false);
    queryClient.removeQueries(MutationKeys.LOGIN);
    queryClient.invalidateQueries(MutationKeys.LOGIN);
    queryClient.clear();
    limparLocalStorage();
    navigate('/');
  };

  useEffect(() => {}, [auth, simulationMode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ApplicationContext.Provider
      value={{
        Logout,
        auth,
        isAdmin,
        setIsAdmin,
        setAuth,
        simulationMode,
        toggleSimulationMode,
      }}
    >
      <ApplicationBackgroundStyle>
        <Navigation />
        {children}
        <Footer />
      </ApplicationBackgroundStyle>
    </ApplicationContext.Provider>
  );
};

export const useApplication = () => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error('useApplication deve ser usado dentro de um AppProvider');
  }
  return context;
};
