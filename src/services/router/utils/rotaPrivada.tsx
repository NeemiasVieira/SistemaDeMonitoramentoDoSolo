import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useApplication } from "../../../contexts/ApplicationContext";

interface RotaPrivadaProps {
  children: React.JSX.Element;
}

export const RotaPrivada: React.FC<RotaPrivadaProps> = ({ children }) => {
  const { auth } = useApplication();
  const { pathname, search } = useLocation();

  if (!auth) {
    const path = `${pathname}${search}`;
    sessionStorage.setItem("redirectUrl", path);
  }

  return auth ? children : <Navigate to="/login" />;
};
