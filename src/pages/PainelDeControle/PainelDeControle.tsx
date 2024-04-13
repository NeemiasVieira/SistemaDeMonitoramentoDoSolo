import React, { useEffect } from "react";
import { Planta } from "../../components/Planta/Planta";
import { Loading } from "../../components/Loading/Loading";
import { useNotificacoes } from "../../contexts/NotificacoesProvider";
import { useGetAllPlants } from "../../services/API/Plants/useGetAllPlants";
import { PainelDeControleStyle } from "./PainelDeControleStyle";

const PainelDeControle = () => {
  const { notificar } = useNotificacoes();
  const { plantas, refetch, erro, isLoading } = useGetAllPlants();

  useEffect(() => {
    if (!plantas) refetch(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plantas]);

  useEffect(() => {
    if (erro) notificar({ tipo: "ERRO", mensagem: erro, tempoEmSeg: 3}); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [erro]);

  if (isLoading)
    return (
        <PainelDeControleStyle>
            <h1>Seja bem vindo ao Sistema de Controle</h1>
            <h2>
              Por aqui você pode cuidar da sua plantinha, reportar problemas e aproveitar o uso da nossa aplicação
            </h2>
            <Loading minHeight="50vh" />
        </PainelDeControleStyle>
    );

  return (
      <PainelDeControleStyle>
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
      </PainelDeControleStyle>
  );
};

export default PainelDeControle;
