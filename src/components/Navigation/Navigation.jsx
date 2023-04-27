import React from "react";
import { NavigationStyle } from "./NavigationStyle";
import { Link } from "react-router-dom";


export default function Navigation(){


    return(
    
        <NavigationStyle>
            <ul class="navegacao">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Aplicação</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li class="login"><Link to="/login">Login</Link></li>
            </ul>
        </NavigationStyle>
        
    )
}