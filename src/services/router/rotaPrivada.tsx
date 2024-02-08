import React from "react";
import { Navigate } from "react-router-dom";

interface RotaPrivadaProps{
    children: any
}

export const RotaPrivada: React.FC<RotaPrivadaProps> = ({children}) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login"/>

}