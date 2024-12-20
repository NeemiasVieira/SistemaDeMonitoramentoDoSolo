import { BotaoVoltar } from '@components/Buttons/BotaoVoltar';
import { Especie } from '@components/Especie/Especie';
import { Specie } from '@components/Especie/Types';
import { Loading } from '@components/Loading/Loading';
import { useDeleteSpecie } from '@services/API/Species/useDeleteSpecie';
import { useGetAllSpecies } from '@services/API/Species/useGetAllSpecies';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import { CreateEditEspecie } from './CreateEdit';
import { EspeciesStyle } from './EspeciesStyle';
import { CreateButton } from '@components/Buttons/CreateButton';
import { useApplication } from '@contexts/ApplicationContext';

const Especies = () => {
  const [action, setAction] = useState<'Create' | 'Update' | null>();
  const [especieEscolhidaParaAtualizacao, setEspecieEscolhidaParaAtualizacao] = useState<Specie>();
  const [deleteSpecieID, setDeleteSpecieID] = useState<string>('');

  const { confirmDeleteSpecie } = useDeleteSpecie(deleteSpecieID);
  const { notificar } = useNotificacoes();

  const handleCreate = () => {
    setAction('Create');
    setEspecieEscolhidaParaAtualizacao(null);
  };

  const handleUpdate = useCallback(
    (especie: Specie) => {
      setEspecieEscolhidaParaAtualizacao(especie);
      setAction('Update');
    },
    [setEspecieEscolhidaParaAtualizacao, setAction]
  );

  const showListSpecies = useMemo(() => {
    return !action;
  }, [action]);

  useEffect(() => {}, [especieEscolhidaParaAtualizacao]);

  const handleDelete = (id: string) => {
    setDeleteSpecieID(id);
    notificar({
      tipo: 'NOTIFICACAO',
      mensagem: 'Solicitação de exclusão concluída com sucesso!',
    });
  };

  useEffect(() => {
    if (deleteSpecieID.length > 10) confirmDeleteSpecie(); // eslint-disable-next-line
  }, [deleteSpecieID]);

  const { allSpeciesData, allSpeciesIsLoading } = useGetAllSpecies();
  const { simulationMode, isAdmin } = useApplication();

  return (
    <>
      {showListSpecies ? (
        <EspeciesStyle>
          <BotaoVoltar path="/painel/administrativo" />
          <h2 className="tituloDaPagina">Todas as Espécies ativas</h2>
          <CreateButton onCreate={handleCreate} title="Nova Espécie" disabled={!isAdmin && !simulationMode} />

          <div className="especies">
            {allSpeciesData &&
              allSpeciesData.map((especie) => (
                <Especie
                  especie={especie}
                  key={especie.id}
                  handleUpdate={handleUpdate}
                  confirmDeleteSpecie={() => handleDelete(especie.id)}
                />
              ))}
            {allSpeciesIsLoading && <Loading minHeight={'50vh'} />}
          </div>
        </EspeciesStyle>
      ) : (
        <CreateEditEspecie action={action} setAction={setAction} especie={especieEscolhidaParaAtualizacao} />
      )}
    </>
  );
};
export default Especies;
