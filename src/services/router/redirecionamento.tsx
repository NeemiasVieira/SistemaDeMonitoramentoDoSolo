import React from "react";
import { Navigate } from "react-router-dom";
import { useApplication } from "../../contexts/ApplicationContext";

interface RedirectProps{
    children: any
}

export const Redirect: React.FC<RedirectProps> = ({children}) => {
    const { auth } = useApplication();
    return auth ? <Navigate to="/painel"/> : children
}