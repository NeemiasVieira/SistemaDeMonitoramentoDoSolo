import React from "react";
import { NavAutenticadaStyle } from "./NavAutenticadaStyle";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConfig"; 
import { useAuthState } from 'react-firebase-hooks/auth';


export const NavAutenticada = () => {

    const [user] = useAuthState(auth);

    const Logout = () => {
        signOut(auth);
        <useNavigate to="/"/>
    }

    return(
        <NavAutenticadaStyle>
            <ul className="navegacao">
                <li><Link to="/sistema/home">Início</Link></li>
                <li><Link to="/sistema/home">Minha Planta</Link></li>
                <li><Link to="/sistema/home">Reportar Problema</Link></li>
                <li className="usuario">{user.email}</li>
                <li><Link to="/" className="logout"><button onClick={Logout}>Sair</button></Link></li>
            </ul>
        </NavAutenticadaStyle>
    )
}