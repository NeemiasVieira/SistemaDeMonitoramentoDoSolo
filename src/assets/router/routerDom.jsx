import { BrowserRouter, Routes, Route, Pri } from "react-router-dom";
import Home from "../../pages/Home/Home";
import QuemSomos from "../../pages/QuemSomos/Quemsomos";
import React from "react";
import Login from "../../pages/Login/Login";
import HomePrivate from "../../pages/privatePages/HomePrivate/HomePrivate";
import { RotaPrivada } from "./rotaPrivada";
import Cadastro from "../../pages/Cadastro/Cadastro";
import Faq from "../../pages/FAQ/Faq";



export function RouterDOM(){
    return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
        <Route index element={<Home/>}/>
        <Route element={<QuemSomos/>} path="/quemsomos"/>
        <Route element={<Login/>} path = "/login"/>
        <Route element={<Cadastro/>} path = "/cadastro"/>
        <Route element={<Faq/>} path = "/faq"/>

        <Route element={<RotaPrivada><HomePrivate/></RotaPrivada>} path="/sistema/home"/>

    </Routes>
    </BrowserRouter>
    )
}