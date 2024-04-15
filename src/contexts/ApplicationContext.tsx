import React, { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";
import { limparLocalStorage } from "../components/Navigation/Services";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

const ApplicationBackgroundStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column wrap;
  min-height: 130vh;
  margin-top: 70px;
  max-width: 100vw;
  overflow-x: hidden;

  @media screen and (max-width: 480px) {
    min-height: 1650px;
  }
`;

interface ICreateContext{
  Logout: () => void;
  isAdmin: boolean;
  auth: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
}

interface IApplicationProvider{
  children: React.ReactNode;
}

const ApplicationContext = createContext<ICreateContext>({
  isAdmin: localStorage.getItem("profile") === "admin" ? true : false,
  auth: localStorage.getItem("token") ? true : false,
  Logout: () => {},
  setIsAdmin: () => {},
  setAuth: () => {},
})

export const ApplicationProvider: React.FC<IApplicationProvider> = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(localStorage.getItem("token") ? true : false);
  const [isAdmin, setIsAdmin] = useState<boolean>(localStorage.getItem("profile") === "admin" ? true : false);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const Logout = () => {
    setAuth(false);
    queryClient.removeQueries("login");
    queryClient.invalidateQueries("login");
    queryClient.clear();
    limparLocalStorage();
    navigate("/");
  }

  useEffect(() => {}, [auth]);

  return (
    <ApplicationContext.Provider value={{ Logout, auth, isAdmin, setIsAdmin, setAuth }}>
        <ApplicationBackgroundStyle>
          <Navigation/>
            {children}
          <Footer />
      </ApplicationBackgroundStyle>
    </ApplicationContext.Provider>
  );
};

export const useApplication = () => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error("useApplication deve ser usado dentro de um AppProvider");
  }
  return context;
};
