import React from "react";
import { Navigate } from "react-router-dom";
import { useApplication } from "../../../contexts/ApplicationContext";

interface RotaCondicionadaProps {
  children: React.JSX.Element;
  condicao?: boolean;
  isAdm?: boolean;
}

export const RotaC: React.FC<RotaCondicionadaProps> = ({
  children,
  condicao,
  isAdm,
}) => {
  const { isAdmin, simulationMode } = useApplication();
  if (condicao) return condicao ? children : <Navigate to="/" />;
  if (isAdm)
    return isAdmin || simulationMode ? (
      children
    ) : (
      <Navigate to="/unauthorized" />
    );
};
