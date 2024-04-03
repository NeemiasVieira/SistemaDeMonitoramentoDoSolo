import React, { useEffect } from "react";
import { Navigation } from "../../../components/Navigation/Navigation";
import { Footer } from "../../../components/Footer/Footer";
import { HomePrivateMain } from "./HomePrivateStyle";
import { Planta } from "../../../components/Planta/Planta";
import { Loading } from "../../../components/Loading/Loading";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";
import { useGetAllPlants } from "../../../services/API/Plants/useGetAllPlants";

const HomePrivate = () => {
  const { notificar } = useNotificacoes();
  const { plantas, refetch, erro, isLoading } = useGetAllPlants();

  useEffect(() => {
    if (!plantas) refetch();
  }, [plantas]);

  useEffect(() => {
    if (erro) notificar({ tipo: "ERRO", mensagem: erro, tempoEmSeg: 3});
  }, [erro]);

  if (isLoading)
    return (
      <>
        <HomePrivateMain>
          <Navigation auth={true} />
          <main>
            <h1>Seja bem vindo ao Sistema de Controle</h1>
            <h2>
              Por aqui você pode cuidar da sua plantinha, reportar problemas e aproveitar o uso da nossa aplicação
            </h2>
            <Loading minHeight="70vh" />
          </main>
        </HomePrivateMain>
        <Footer />
      </>
    );

  return (
    <>
      <HomePrivateMain>
        <Navigation auth={true} />
        <main>
          <h1>Seja bem vindo ao Sistema de Controle</h1>
          <h2 className="subTitulo">
            Por aqui você pode cuidar da sua plantinha, reportar problemas e aproveitar o uso da nossa aplicação
          </h2>
          <section className="Plantas">
            {plantas?.length > 0 && <h2 className="suasPlantas">Suas plantas</h2>}
            {!plantas ||
              (plantas?.length === 0 && (
                <>
                  <h2>Suas plantas ficarão aqui</h2>
                  <p>Contate o suporte para cadastrar sua plantinha.</p>
                </>
              ))}
            <div className="divPlantas">
              {plantas?.length > 0 && plantas?.map((planta) => <Planta key={planta.id} planta={planta} />)}
            </div>
          </section>
        </main>
      </HomePrivateMain>
      <Footer />
    </>
  );
};

export default HomePrivate;
