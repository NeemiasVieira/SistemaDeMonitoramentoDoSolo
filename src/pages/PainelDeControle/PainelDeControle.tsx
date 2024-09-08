import { useEffect } from "react";
import { Planta } from "@components/Planta/Planta";
import { Loading } from "@components/Loading/Loading";
import { useGetAllPlants } from "@services/API/Plants/useGetAllPlants";
import { PainelDeControleStyle } from "./PainelDeControleStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const PainelDeControle = () => {
  const { plantas, refetch, isLoading } = useGetAllPlants();

  useEffect(() => {
    if (!plantas) refetch(); // eslint-disable-next-line
  }, [plantas]);

  if (isLoading)
    return (
      <PainelDeControleStyle>
        <h1>Seja bem vindo ao Sistema de Controle</h1>
        <h2>Por aqui você pode cuidar da sua plantinha, reportar problemas e aproveitar o uso da nossa aplicação</h2>
        <Loading minHeight="50vh" />
      </PainelDeControleStyle>
    );

  return (
    <PainelDeControleStyle>
      <h1>Seja bem vindo ao Sistema de Controle</h1>
      <h2 className="subTitulo">
        Por aqui você pode cuidar da sua plantinha, reportar problemas e aproveitar o uso da nossa aplicação
      </h2>
      <section className="Plantas">
        {plantas?.length > 0 && <h2 className="suasPlantas">Suas plantas</h2>}
        {plantas.length === 0 && (
          <div className="avisoSemPlantas">
            <FontAwesomeIcon icon={faCircleExclamation} />
            <p>Nenhuma planta cadastrada, contate o suporte para cadastrar sua plantinha.</p>
          </div>
        )}
        <div className="divPlantas">
          {plantas?.length > 0 && plantas?.map((planta) => <Planta key={planta.id} planta={planta} />)}
        </div>
      </section>
    </PainelDeControleStyle>
  );
};

export default PainelDeControle;
