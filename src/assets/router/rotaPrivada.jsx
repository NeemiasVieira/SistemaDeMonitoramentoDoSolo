import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../services/firebaseConfig";

export const RotaPrivada = ({children}) => {
    const [user] = useAuthState(auth);
    return user ? children : <Navigate to="/login"/>

}