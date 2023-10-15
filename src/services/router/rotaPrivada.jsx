import React from "react";
import { Navigate } from "react-router-dom";

export const RotaPrivada = ({children}) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login"/>

}