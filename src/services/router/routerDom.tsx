import { HashRouter, Routes, Route} from "react-router-dom";
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
import { Redirect } from "./redirecionamento";
import { NotificacoesProvider } from "../../contexts/NotificacoesProvider";



const RouterDOM = () => {
    return(
    <HashRouter>
        <NotificacoesProvider>
            <Routes>
                <Route index element={<Home/>} path="/"/>
                <Route element={<QuemSomos/>} path="/quemsomos"/>
                <Route element={<Redirect><Login/></Redirect>} path = "/login"/>
                <Route element={<Redirect><Cadastro/></Redirect>} path = "/cadastro"/>
                <Route element={<Faq/>} path = "/faq"/>
                <Route element={<Aplicacao/>} path ="/aplicacao"/>

                {/* Rotas Privadas */}
                <Route element={<RotaPrivada><MinhaPlanta/></RotaPrivada>} path = "/sistema/controle"/>
                <Route element={<RotaPrivada><HomePrivate/></RotaPrivada>} path="/sistema/minhasplantas"/>
            </Routes>
        </NotificacoesProvider>
    </HashRouter>
    )
}

export default RouterDOM;