import { Specie } from '@components/Especie/Types';
import { Loading } from '@components/Loading/Loading';
import { useNotificacoes } from '@contexts/NotificacoesProvider';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCreateSpecie } from '@services/API/Species/useCreateSpecie';
import { useUpdateSpecie } from '@services/API/Species/useUpdateSpecie';
import { useEffect, useState } from 'react';
import { CreateEditStyle } from './CreateEditStyle';
import { ToggleButton } from '@components/Buttons/ToggleButton/ToggleButton';
import { isSpecieValid } from './Contract';

interface Parametro {
  min: string;
  max: string;
}

interface Parametros {
  nitrogenio: Parametro;
  fosforo: Parametro;
  potassio: Parametro;
  luz: Parametro;
  umidade: Parametro;
  temperatura: Parametro;
  pH: Parametro;
}

interface CreateEditEspecieProps {
  action: 'Create' | 'Update' | null;
  setAction: React.Dispatch<React.SetStateAction<'Create' | 'Update'>>;
  especie?: Specie;
}

export const CreateEditEspecie: React.FC<CreateEditEspecieProps> = ({ action, setAction, especie }) => {
  const defaultSpecie: Specie = {
    id: '',
    nome: '',
    descricao: '',
    parametros: {
      nitrogenio: { min: '', max: '' },
      fosforo: { min: '', max: '' },
      potassio: { min: '', max: '' },
      luz: { min: '', max: '' },
      umidade: { min: '', max: '' },
      temperatura: { min: '', max: '' },
      pH: { min: '', max: '' },
    },
    simulado: false,
  };

  const [especieI, setEspecieI] = useState<Specie>(especie ?? defaultSpecie);

  const { confirmCreateSpecie, createSpecieIsLoading, newSpecie } = useCreateSpecie(especieI);
  const { confirmUpdateSpecie, updateSpecieIsLoading, specie } = useUpdateSpecie(especieI);
  const { notificar } = useNotificacoes();

  useEffect(() => {
    if (newSpecie?.id || specie?.id) {
      setAction(null);
    }
  }, [newSpecie, specie]);

  const setNome = (nome: string) => {
    setEspecieI((prevState) => ({
      ...prevState,
      nome: nome,
    }));
  };

  const setDescricao = (descricao: string) => {
    setEspecieI((prevState) => ({
      ...prevState,
      descricao: descricao,
    }));
  };

  const setMinParametro = (parametro: keyof Parametros, min: string) => {
    setEspecieI((prevState) => ({
      ...prevState,
      parametros: {
        ...prevState.parametros,
        [parametro]: {
          ...prevState.parametros[parametro],
          min: min,
        },
      },
    }));
  };

  const setMaxParametro = (parametro: keyof Parametros, max: string) => {
    setEspecieI((prevState) => ({
      ...prevState,
      parametros: {
        ...prevState.parametros,
        [parametro]: {
          ...prevState.parametros[parametro],
          max: max,
        },
      },
    }));
  };

  const toggleSimulado = () => {
    setEspecieI((prevState) => ({
      ...prevState,
      simulado: !prevState.simulado,
    }));
  };

  useEffect(() => {
    if (!updateSpecieIsLoading && !createSpecieIsLoading) {
      // closeModal();
    } // eslint-disable-next-line
  }, [updateSpecieIsLoading, createSpecieIsLoading]);

  const handleChangeMin = (parametro: keyof Specie['parametros'], event: React.ChangeEvent<HTMLInputElement>) => {
    setMinParametro(parametro, event.target.value);
  };

  const handleChangeMax = (parametro: keyof Specie['parametros'], event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxParametro(parametro, event.target.value);
  };

  const handleCriarEspecie = () => {
    if (isSpecieValid(especieI, notificar)) confirmCreateSpecie();
  };

  const handleAtualizarEspecie = () => {
    if (isSpecieValid(especieI, notificar)) confirmUpdateSpecie();
  };

  return (
    <CreateEditStyle>
      {action === 'Create' && <h2>Criar Nova Espécie</h2>}
      {action === 'Update' && <h2>Atualizar Espécie</h2>}

      <div className="NomeEDescricao">
        <div className="DivInputNome">
          <p>Nome</p>
          <input value={especieI.nome} onChange={(event) => setNome(event.target.value)} />
        </div>
        <div className="DivInputDescricao">
          <p>Descrição</p>
          <textarea
            value={especieI.descricao}
            onChange={(event) => setDescricao(event.target.value)}
            cols={25}
            rows={4}
            maxLength={400}
          />
        </div>
        <div className="DivInputSimulado">
          <p>Simular Registro</p>
          <ToggleButton onChange={toggleSimulado} checked={especieI.simulado} />
        </div>
      </div>

      <div className="Parametros">
        <div className="LegendaParametros">
          <p className="leitura">Leitura</p>
          <p>Valor mínimo</p>
          <p>Valor máximo</p>
        </div>
        {Object.entries(especieI.parametros).map(([parametro, valor]) => (
          <div key={parametro} className="DivInputParametro">
            <p className="leitura">{parametro}</p>
            <input
              id={`${parametro}MinInput`}
              value={valor.min}
              onChange={(event) => handleChangeMin(parametro as keyof Specie['parametros'], event)}
            />

            <input
              id={`${parametro}MaxInput`}
              value={valor.max}
              onChange={(event) => handleChangeMax(parametro as keyof Specie['parametros'], event)}
            />
          </div>
        ))}
      </div>

      <div className="actions">
        <button className="backButton" onClick={() => setAction(null)}>
          <FontAwesomeIcon icon={faCircleLeft} /> Voltar
        </button>
        {action === 'Create' && !createSpecieIsLoading && (
          <button className="createButton" onClick={handleCriarEspecie}>
            Criar
          </button>
        )}
        {action === 'Update' && !updateSpecieIsLoading && (
          <button className="updateButton" onClick={handleAtualizarEspecie}>
            Atualizar
          </button>
        )}
        {updateSpecieIsLoading && <Loading minHeight={'50px'} logoHeight="40px" logoWidth="200px" fullWidth={false} />}
        {createSpecieIsLoading && <Loading minHeight={'50px'} logoHeight="40px" logoWidth="50px" fullWidth={false} />}
      </div>
    </CreateEditStyle>
  );
};
