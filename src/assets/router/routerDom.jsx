import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../../pages/Home/Home";
import QuemSomos from "../../pages/QuemSomos/Quemsomos";
import React from "react";
import Login from "../../pages/Login/Login";
import HomePrivate from "../../pages/privatePages/HomePrivate/HomePrivate";
import { RotaPrivada } from "./rotaPrivada";
import Cadastro from "../../pages/Cadastro/Cadastro";
import Faq from "../../pages/FAQ/Faq";
import MinhaPlanta from "../../pages/privatePages/MinhaPlanta/MinhaPlanta";
import Aplicacao from "../../pages/Aplicacao/Aplicacao";



export function RouterDOM(){
    return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
        <Route index element={<Home/>} path="/"/>
        <Route element={<QuemSomos/>} path="/quemsomos"/>
        <Route element={<Login/>} path = "/login"/>
        <Route element={<Cadastro/>} path = "/cadastro"/>
        <Route element={<Faq/>} path = "/faq"/>
        <Route element={<Aplicacao/>} path ="/aplicacao"/>

        {/* Rotas Privadas */}
        <Route element={<RotaPrivada><MinhaPlanta/></RotaPrivada>} path = "/sistema/minhaplanta"/>
        <Route element={<RotaPrivada><HomePrivate/></RotaPrivada>} path="/sistema/home"/>

    </Routes>
    </BrowserRouter>
    )
}