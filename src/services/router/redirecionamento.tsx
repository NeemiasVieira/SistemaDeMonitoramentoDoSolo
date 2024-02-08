import React from "react";
import { Navigate } from "react-router-dom";

interface RedirectProps{
    children: any
}

export const Redirect: React.FC<RedirectProps> = ({children}) => {
    const token = localStorage.getItem("token");
    return token ? <Navigate to="/sistema/home"/> : children
}