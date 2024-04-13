import { Routes, Route, BrowserRouter} from "react-router-dom";
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
import Aplicacao from "../../pages/Aplicacao/Aplicacao";
import PainelAdm from "../../pages/PainelAdm/PainelAdm";
import Especies from "../../pages/PainelAdm/Especies/Especies";
import PainelMenu from "../../pages/PainelDeControle/Menu/Menu";
import Resumo from "../../pages/PainelDeControle/Resumo/Resumo";
import PagRelatorioSaude from "../../pages/PainelDeControle/RelatorioDeSaude/RelatorioSaude";
import PagGraficoHistorico from "../../pages/PainelDeControle/HistoricoEmGrafico/GraficoHistorico";
import NotFound from "../../pages/404NotFound/NotFound";
import TodosOsRegistros from "../../pages/PainelDeControle/TodosOsRegistros/TodosOsRegistros";
import { RegistrosProvider } from "../../contexts/RegistrosContext";
import PagRegistro from "../../pages/Registro/PagRegistro";

const RouterDOM = () => {

    const profileIsAdmin = localStorage.getItem("profile") === "admin";

    return(
    <BrowserRouter>
        <NotificacoesProvider>
            <Routes>
                <Route index element={<Home/>} path="/"/>
                <Route element={<Redirect><Login/></Redirect>} path = "/login"/>
                <Route element={<Redirect><Cadastro/></Redirect>} path = "/cadastro"/>
                <Route element={<Faq/>} path = "/faq"/>
                <Route element={<Aplicacao/>} path ="/aplicacao"/>
                <Route element={<NotFound/>} path="*"/>

                {/* Rotas Privadas */}
                <Route element={<RotaPrivada><PainelDeControle/></RotaPrivada>} path="painel" />
                <Route element={<PainelMenu/>} path = "/painel/plantas/:idPlanta"/>
                <Route element={<RotaPrivada><Resumo/></RotaPrivada>} path = "/painel/plantas/:idPlanta/resumo"/>
                <Route element={<RotaPrivada><PagRelatorioSaude/></RotaPrivada>} path = "/painel/plantas/:idPlanta/relatorio-saude"/>
                <Route element={<RotaPrivada><PagGraficoHistorico/></RotaPrivada>} path = "/painel/plantas/:idPlanta/grafico-historico"/>

                <Route element={<RegistrosProvider><TodosOsRegistros/></RegistrosProvider>} path="/painel/plantas/:idPlanta/registros"/>
                <Route element={<RegistrosProvider><PagRegistro/></RegistrosProvider>} path="/painel/registros/:idRegistro" />
                
                
                
                <Route element={<RotaC condicao={profileIsAdmin}><PainelAdm/></RotaC>} path="/adm/painel"/>
                <Route element={<RotaC condicao={profileIsAdmin}><Especies/></RotaC>} path="/adm/especies"/>
            </Routes>
        </NotificacoesProvider>
    </BrowserRouter>
    )
}

export default RouterDOM;
