import Unauthorized from "@pages/401Unauthorized/Unauthorized";
import NotFound from "@pages/404NotFound/NotFound";
import Aplicacao from "@pages/Aplicacao/Aplicacao";
import Cadastro from "@pages/Cadastro/Cadastro";
import Faq from "@pages/FAQ/Faq";
import Home from "@pages/Home/Home";
import Login from "@pages/Login/Login";
import Especies from "@pages/PainelAdm/Especies/Especies";
import PainelAdm from "@pages/PainelAdm/PainelAdm";
import PagGraficoHistorico from "@pages/PainelDeControle/HistoricoEmGrafico/GraficoHistorico";
import PainelMenu from "@pages/PainelDeControle/Menu/Menu";
import PainelDeControle from "@pages/PainelDeControle/PainelDeControle";
import PagRelatorioSaude from "@pages/PainelDeControle/RelatorioDeSaude/RelatorioSaude";
import Resumo from "@pages/PainelDeControle/Resumo/Resumo";
import PagRegistro from "@pages/PainelDeControle/TodosOsRegistros/Registro/PagRegistro";
import PagRelatorioSaudePorRegistro from "@pages/PainelDeControle/TodosOsRegistros/Registro/RelatorioSaudeDoRegistro";
import TodosOsRegistros from "@pages/PainelDeControle/TodosOsRegistros/TodosOsRegistros";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApplicationProvider } from "../../contexts/ApplicationContext";
import { NotificacoesProvider } from "../../contexts/NotificacoesProvider";
import { RegistrosProvider } from "../../contexts/RegistrosContext";
import { Redirect } from "./utils/redirecionamento";
import { RotaC } from "./utils/rotaCondicionada";
import { RotaPrivada } from "./utils/rotaPrivada";

const Router = () => {
  return (
    <BrowserRouter>
      <NotificacoesProvider>
        <ApplicationProvider>
          <Routes>
            <Route index element={<Home />} path="/" />
            <Route
              element={
                <Redirect>
                  <Login />
                </Redirect>
              }
              path="/login"
            />
            <Route
              element={
                <Redirect>
                  <Cadastro />
                </Redirect>
              }
              path="/cadastro"
            />
            <Route element={<Faq />} path="/faq" />
            <Route element={<Aplicacao />} path="/aplicacao" />
            <Route element={<NotFound />} path="*" />
            <Route element={<Unauthorized />} path="unauthorized" />

            {/* Rotas Privadas */}
            <Route
              element={
                <RotaPrivada>
                  <PainelDeControle />
                </RotaPrivada>
              }
              path="painel"
            />
            <Route
              element={
                <RotaPrivada>
                  <PainelMenu />
                </RotaPrivada>
              }
              path="/painel/plantas/:idPlanta"
            />
            <Route
              element={
                <RotaPrivada>
                  <Resumo />
                </RotaPrivada>
              }
              path="/painel/plantas/:idPlanta/resumo"
            />
            <Route
              element={
                <RotaPrivada>
                  <PagRelatorioSaude />
                </RotaPrivada>
              }
              path="/painel/plantas/:idPlanta/relatorio-saude"
            />
            <Route
              element={
                <RotaPrivada>
                  <PagGraficoHistorico />
                </RotaPrivada>
              }
              path="/painel/plantas/:idPlanta/grafico-historico"
            />

            <Route
              element={
                <RotaPrivada>
                  <RegistrosProvider>
                    <TodosOsRegistros />
                  </RegistrosProvider>
                </RotaPrivada>
              }
              path="/painel/plantas/:idPlanta/registros"
            />
            <Route
              element={
                <RotaPrivada>
                  <RegistrosProvider>
                    <PagRegistro />
                  </RegistrosProvider>
                </RotaPrivada>
              }
              path="/painel/registros/:idRegistro"
            />
            <Route
              element={
                <RotaPrivada>
                  <RegistrosProvider>
                    <PagRelatorioSaudePorRegistro />
                  </RegistrosProvider>
                </RotaPrivada>
              }
              path="/painel/registros/:idRegistro/saude"
            />

            <Route
              element={
                <RotaC isAdm>
                  <PainelAdm />
                </RotaC>
              }
              path="/adm/painel"
            />
            <Route
              element={
                <RotaC isAdm>
                  <Especies />
                </RotaC>
              }
              path="/adm/especies"
            />
          </Routes>
        </ApplicationProvider>
      </NotificacoesProvider>
    </BrowserRouter>
  );
};

export default Router;
