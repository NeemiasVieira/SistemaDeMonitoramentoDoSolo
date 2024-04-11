import { HashRouter, Routes, Route} from "react-router-dom";
import { RotaPrivada } from "./rotaPrivada";
import { Redirect } from "./redirecionamento";
import { NotificacoesProvider } from "../../contexts/NotificacoesProvider";
import { RotaC } from "./rotaCondicionada";
import Home from "../../pages/Home/Home";
import React from "react";
import Login from "../../pages/Login/Login";
import PainelDeControle from "../../pages/PainelDeControle/PainelDeControle";
import Cadastro from "../../pages/Cadastro/Cadastro";
import Faq from "../../pages/FAQ/Faq";
import MinhaPlanta from "../../pages/MinhaPlanta/MinhaPlanta";
import Aplicacao from "../../pages/Aplicacao/Aplicacao";
import PainelAdm from "../../pages/PainelAdm/PainelAdm";
import Especies from "../../pages/PainelAdm/Especies/Especies";
import PainelMenu from "../../pages/PainelDeControle/Menu/Menu";



const RouterDOM = () => {

    const profileIsAdmin = localStorage.getItem("profile") === "admin";

    return(
    <HashRouter>
        <NotificacoesProvider>
            <Routes>
                <Route index element={<Home/>} path="/"/>
                <Route element={<Redirect><Login/></Redirect>} path = "/login"/>
                <Route element={<Redirect><Cadastro/></Redirect>} path = "/cadastro"/>
                <Route element={<Faq/>} path = "/faq"/>
                <Route element={<Aplicacao/>} path ="/aplicacao"/>

                {/* Rotas Privadas */}
                <Route element={<RotaPrivada><PainelDeControle/></RotaPrivada>} path="painel" />
                <Route element={<PainelMenu/>} path = "/painel/plantas/:idPlanta"/>
                <Route element={<RotaPrivada><MinhaPlanta/></RotaPrivada>} path = "/painel/plantas/:idPlanta/resumo"/>

                <Route element={<RotaC condicao={profileIsAdmin}><PainelAdm/></RotaC>} path="/adm/painel"/>
                <Route element={<RotaC condicao={profileIsAdmin}><Especies/></RotaC>} path="/adm/especies"/>
            </Routes>
        </NotificacoesProvider>
    </HashRouter>
    )
}

export default RouterDOM;