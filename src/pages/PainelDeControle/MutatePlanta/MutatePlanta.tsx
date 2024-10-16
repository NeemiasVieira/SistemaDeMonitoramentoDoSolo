import { ToggleButton } from '@components/Buttons/ToggleButton/ToggleButton';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import { Planta } from '../Resumo/Resumo.types';
import { MutatePlantStyle } from './MutatePlantaStyle';
import { useSelectSpecies } from '@services/API/Species/useSelectSpecie';
import { Select } from '@components/Select/Select';
import { useNotificacoes } from '@contexts/NotificacoesProvider';
import { useCreatePlant } from '@services/API/Plants/useCreatePlant';
import { Loading } from '@components/Loading/Loading';
import { useUpdatePlant } from '@services/API/Plants/useUpdatePlant';

interface MutatePlantProps {
  handleBack: () => void;
  action: 'Create' | 'Update' | null;
  plantToUpdate?: Planta;
}

const camposVazios: Planta = {
  nome: '',
  simulado: false,
  especie: '',
  id: '',
  idEspecie: '',
  dataDaPlantacao: '',
};

export const MutatePlant: React.FC<MutatePlantProps> = ({ action, handleBack, plantToUpdate }) => {
  const [planta, setPlanta] = useState<Planta>(plantToUpdate?.id ? plantToUpdate : camposVazios);
  const { options, selectSpeciesIsLoading } = useSelectSpecies();
  const { notificar } = useNotificacoes();
  const { confirmCreatePlant, createPlantIsLoading, newPlant } = useCreatePlant(planta);
  const { confirmUpdatePlant, updatePlantIsLoading, updatedPlant } = useUpdatePlant();

  useEffect(() => {
    if (newPlant?.id || updatedPlant?.id) {
      handleBack();
    }
  }, [newPlant, updatedPlant]);

  const handleCreate = useCallback(() => {
    const tudoPrenchido = planta.nome && planta.idEspecie;

    if (!tudoPrenchido) {
      notificar({ tipo: 'ERRO', mensagem: 'Todos os campos são obrigatórios', tempoEmSeg: 3 });
      return;
    }

    notificar({ tipo: 'NOTIFICACAO', mensagem: 'Solicitação de criar planta enviada', tempoEmSeg: 2 });
    confirmCreatePlant();
  }, [planta, confirmCreatePlant, notificar]);

  const handleUpdate = useCallback(() => {
    if (!planta.nome || !planta.id) {
      notificar({ tipo: 'ERRO', mensagem: 'Todos os campos são obrigatórios', tempoEmSeg: 3 });
      return;
    }
    notificar({ tipo: 'NOTIFICACAO', mensagem: 'Solicitação de atualizar planta enviada', tempoEmSeg: 2 });
    confirmUpdatePlant(planta);
  }, [planta, confirmUpdatePlant, notificar]);

  const setNome = useCallback(
    (nome: string) => {
      setPlanta((prevState) => ({
        ...prevState,
        nome,
      }));
    },
    [setPlanta]
  );

  const setIdEspecie = useCallback(
    (idEspecie: string) => {
      setPlanta((prevState) => ({
        ...prevState,
        idEspecie,
      }));
    },
    [setPlanta]
  );

  const toggleSimulado = useCallback(() => {
    setPlanta((prevState) => ({
      ...prevState,
      simulado: !prevState.simulado,
    }));
  }, [setPlanta]);

  return (
    <MutatePlantStyle>
      {action === 'Create' && <h2>Adicionar Nova Planta</h2>}
      {action === 'Update' && <h2>Atualizar Planta</h2>}

      <div className="inputs">
        <div className="inputNome">
          <p>Nome</p>
          <input value={planta?.nome} onChange={(e) => setNome(e.target.value)} maxLength={20} />
        </div>

        {action === 'Create' && (
          <>
            <div className="inputEspecie">
              <p>Espécie</p>
              <Select options={options} setSelected={setIdEspecie} loading={selectSpeciesIsLoading} />
            </div>

            <div className="inputSimulado">
              <p>Simular Registro</p>
              <ToggleButton checked={planta.simulado} onChange={toggleSimulado} />
            </div>
          </>
        )}
      </div>

      <div className="actions">
        <button className="backButton" onClick={handleBack}>
          <FontAwesomeIcon icon={faCircleLeft} /> Voltar
        </button>
        {action === 'Create' && !createPlantIsLoading && (
          <button className="createButton" onClick={handleCreate}>
            Criar
          </button>
        )}
        {(createPlantIsLoading || updatePlantIsLoading) && (
          <Loading minHeight="50px" logoHeight="40px" logoWidth="200px" fullWidth={false} />
        )}
        {action === 'Update' && !updatePlantIsLoading && (
          <button className="updateButton" onClick={handleUpdate}>
            Atualizar
          </button>
        )}
      </div>
    </MutatePlantStyle>
  );
};
