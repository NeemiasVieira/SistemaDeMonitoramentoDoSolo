import { Loading } from '@components/Loading/Loading';
import { Planta } from '@components/Planta/Planta';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetAllPlants } from '@services/API/Plants/useGetAllPlants';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { MutatePlant } from './MutatePlanta/MutatePlanta';
import { PainelDeControleStyle } from './PainelDeControleStyle';
import { CreateButton } from '@components/Buttons/CreateButton';

const PainelDeControle = () => {
  const { plantas, refetch, isLoading } = useGetAllPlants();
  const [action, setAction] = useState<'Create' | 'Update' | null>();
  const [plantIdToUpdate, setPlantIdToUpdate] = useState<string>();

  const handleCriate = useCallback(() => {
    setAction('Create');
  }, [setAction]);

  const handleUpdate = useCallback(
    (idPlanta?: string) => {
      setPlantIdToUpdate(idPlanta);
      setAction('Update');
    },
    [setPlantIdToUpdate, setAction]
  );

  const plantToUpdate = useMemo(() => {
    return plantas.find((planta) => planta.id === plantIdToUpdate);
  }, [plantas, plantIdToUpdate]);

  const clearAction = useCallback(() => {
    setAction(null);
  }, [setAction]);

  useEffect(() => {
    if (!plantas) refetch(); // eslint-disable-next-line
  }, [plantas]);

  if (action === 'Create' || action === 'Update') {
    return <MutatePlant handleBack={clearAction} action={action} plantToUpdate={plantToUpdate} />;
  }

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
      <CreateButton onCreate={handleCriate} title="Adicionar Planta" />
      <section className="Plantas">
        {plantas?.length > 0 && <h2 className="suasPlantas">Suas plantas</h2>}
        {plantas.length === 0 && (
          <div className="avisoSemPlantas">
            <FontAwesomeIcon icon={faCircleExclamation} />
            <p>Nenhuma planta cadastrada, contate o suporte para cadastrar sua plantinha.</p>
          </div>
        )}
        <div className="divPlantas">
          {plantas?.length > 0 &&
            plantas?.map((planta) => <Planta key={planta.id} planta={planta} handleUpdate={handleUpdate} />)}
        </div>
      </section>
    </PainelDeControleStyle>
  );
};

export default PainelDeControle;
