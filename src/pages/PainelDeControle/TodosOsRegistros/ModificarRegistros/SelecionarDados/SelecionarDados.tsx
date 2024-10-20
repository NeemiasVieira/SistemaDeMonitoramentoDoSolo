import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SelecionarDadosRegistroStyle } from './SelecionarDadosStyle';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutateRecordContext } from '@contexts/MutateRecordContext';
import { isRecordValid } from './Contract';
import { useNotificacoes } from '@contexts/NotificacoesProvider';
import { useCreateRecord } from '@services/API/Records/useCreateRecord';
import { ParametrosDaEspecie } from '@components/ParametrosDaEspecie/ParametrosDaEspecie';
import { Loading } from '@components/Loading/Loading';
import { useEffect, useMemo } from 'react';
import { useUpdateRecord } from '@services/API/Records/useUpdateRecord';

interface SelecionarDadosRegistroProps {
  update?: boolean;
}

const SelecionarDadosRegistro: React.FC<SelecionarDadosRegistroProps> = ({ update }) => {
  const navigate = useNavigate();
  const { idPlanta } = useParams();
  const { record, especie, setNitrogenio, setFosforo, setPotassio, setLux, setUmidade, setTemperatura, setPh } =
    useMutateRecordContext();
  const { notificar } = useNotificacoes();
  const { createRecord, createErrorIsLoading } = useCreateRecord();
  const { updateRecord, updateRecordIsLoading } = useUpdateRecord();

  useEffect(() => {
    if (update && !record) {
      navigate(`/painel/plantas/${idPlanta}/registros`);
    }
    if (!especie) {
      navigate(`/painel/plantas/${idPlanta}/registros/novo/imagem`);
    }
  }, []);

  const renderInput = (label: string, value: string, onChange: (value: string) => void, id: string) => (
    <label htmlFor={id}>
      <span>{label}</span>
      <input type="text" id={id} value={value} maxLength={6} onChange={(e) => onChange(e.target.value)} />
    </label>
  );

  const handleNext = () => {
    if (isRecordValid(record, notificar)) {
      if (!update) {
        createRecord(record);
        return;
      }
      updateRecord(record);
    }
  };

  const texts = useMemo(() => {
    return update
      ? {
          title: 'Atualize os dados do seu registro',
          button: 'Atualizar',
        }
      : {
          title: 'Simule os dados do seu registro',
          button: 'Registrar',
        };
  }, [update]);

  return (
    <SelecionarDadosRegistroStyle>
      <section>
        <div className="content">
          <h2>{texts.title}</h2>
          <p>
            Nessa etapa você irá determinar os dados do seu registro, prenchendo os valores dos nutrientes,
            luminosidade, umidade, temperatura e pH, simulando um registro real
          </p>
          <p>
            Você também pode consultar os parâmetros da espécie ao lado direito para ajudar no preenchimento do seu
            registro.
          </p>
          <div className="dataAndParams">
            <div className="data">
              {renderInput('Nitrogênio', record?.nitrogenio, setNitrogenio, 'nitrogenio')}
              {renderInput('Fósforo', record?.fosforo, setFosforo, 'fosforo')}
              {renderInput('Potássio', record?.potassio, setPotassio, 'potassio')}
              {renderInput('Luminosidade', record?.lux, setLux, 'luminosidade')}
              {renderInput('Temperatura', record?.temperatura, setTemperatura, 'temperatura')}
              {renderInput('Umidade', record?.umidade, setUmidade, 'umidade')}
              {renderInput('pH', record?.pH, setPh, 'ph')}
            </div>
            <div className="params">{especie && <ParametrosDaEspecie especie={especie} showHeader />}</div>
          </div>
        </div>

        <div className="actions">
          <button onClick={() => navigate(`/painel/plantas/${idPlanta}/registros/novo/imagem`)}>
            <FontAwesomeIcon icon={faCircleLeft} />
            Voltar
          </button>
          {createErrorIsLoading || updateRecordIsLoading ? (
            <Loading fullWidth={false} logoHeight="50px" logoWidth="220px" />
          ) : (
            <button onClick={handleNext}>{texts.button}</button>
          )}
        </div>
      </section>
    </SelecionarDadosRegistroStyle>
  );
};

export default SelecionarDadosRegistro;
