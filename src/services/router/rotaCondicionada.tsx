import React from "react";
import { Navigate } from "react-router-dom";

interface RotaCondicionadaProps{
    children: any
    condicao: boolean;
}

export const RotaC: React.FC<RotaCondicionadaProps> = ({children, condicao}) => {
    return condicao ? children : <Navigate to="/"/>

}