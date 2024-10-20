import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PaginaRegistroSucessoStyle } from './SucessoStyle';
import { faCheckCircle, faClipboard, faFileWaveform, faListUl, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { useMutateRecordContext } from '@contexts/MutateRecordContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useMemo } from 'react';

interface PaginaSucessoRegistroProps {
  update?: boolean;
}

const PaginaSucessoRegistro: React.FC<PaginaSucessoRegistroProps> = ({ update }) => {
  const { record, setRecord } = useMutateRecordContext();
  const { idPlanta, idRegistro } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!record?.id && !idRegistro) {
      navigate(`/painel/plantas/${idPlanta}/registros`);
    }
  }, []);

  const handleNavigate = useCallback(
    (to: string) => {
      setRecord(null);
      navigate(to);
    },
    [navigate]
  );

  const texts = useMemo(() => {
    return update
      ? {
          title: 'Registro atualizado com sucesso',
          recordDetailsDescription: 'Detalhes do registro atualizado',
          healthReordDescription: 'Saúde do registro atualizado',
        }
      : {
          title: 'Registro criado com sucesso',
          recordDetailsDescription: 'Detalhes do novo registro',
          healthReordDescription: 'Saúde do novo registro',
        };
  }, [update]);

  return (
    <PaginaRegistroSucessoStyle>
      <section>
        <div className="sucesso">
          <h2>
            {texts.title}
            <FontAwesomeIcon icon={faCheckCircle} />
          </h2>
          <p>Agora você pode escolher uma das opções abaixo</p>
        </div>
        <div className="menu">
          <button className="botaoMenu" onClick={() => handleNavigate(`/painel/plantas/${idPlanta}/registros`)}>
            <FontAwesomeIcon icon={faListUl} />
            <h3>Todos os registros</h3>
            <p>Voltar a página anterior</p>
          </button>
          <button
            className="botaoMenu"
            onClick={() => handleNavigate(`/painel/plantas/${idPlanta}/registros/${record?.id || idRegistro}`)}
          >
            <FontAwesomeIcon icon={faClipboard} />
            <h3>Visualizar registro</h3>
            <p>{texts.recordDetailsDescription}</p>
          </button>
          <button
            className="botaoMenu"
            onClick={() => handleNavigate(`/painel/plantas/${idPlanta}/registros/${record?.id || idRegistro}/saude`)}
          >
            <FontAwesomeIcon icon={faFileWaveform} />
            <h3>Relatório de Saúde</h3>
            <p>{texts.healthReordDescription}</p>
          </button>
          <button className="botaoMenu" onClick={() => handleNavigate(`/painel/plantas/${idPlanta}`)}>
            <FontAwesomeIcon icon={faSeedling} />
            <h3>Menu da planta</h3>
            <p>Volte ao menu inicial da planta</p>
          </button>
        </div>
      </section>
    </PaginaRegistroSucessoStyle>
  );
};

export default PaginaSucessoRegistro;
