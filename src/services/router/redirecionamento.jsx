import React from "react";
import { Navigate } from "react-router-dom";

export const Redirect = ({children}) => {
    const token = localStorage.getItem("token");
    return token ? <Navigate to="/sistema/home"/> : children
}