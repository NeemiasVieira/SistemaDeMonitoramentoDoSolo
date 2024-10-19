import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SelecionarDadosRegistroStyle } from './SelecionarDadosStyle';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutateRecordContext } from '@contexts/MutateRecordContext';
import { isRecordValid } from './Contract';
import { useNotificacoes } from '@contexts/NotificacoesProvider';
import { useCreateRecord } from '@services/API/Records/useCreateRecord';
import { ParametrosDaEspecie } from '@components/ParametrosDaEspecie/ParametrosDaEspecie';

const SelecionarDadosRegistro = () => {
  const navigate = useNavigate();
  const { idPlanta } = useParams();
  const { record, especie, setNitrogenio, setFosforo, setPotassio, setLux, setUmidade, setTemperatura, setPh } =
    useMutateRecordContext();
  const { notificar } = useNotificacoes();
  const { createRecord } = useCreateRecord();

  const renderInput = (label: string, value: string, onChange: (value: string) => void, id: string) => (
    <label htmlFor={id}>
      <span>{label}</span>
      <input type="text" id={id} value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  );

  const handleNext = () => {
    if (isRecordValid(record, notificar)) {
      createRecord(record);
    }
  };

  return (
    <SelecionarDadosRegistroStyle>
      <h1>Dados do Registro</h1>
      <section>
        <div className="content">
          <div className="dataAndParams">
            <div className="data">
              {renderInput('Nitrogênio (mg/Kg)', record.nitrogenio, setNitrogenio, 'nitrogenio')}
              {renderInput('Fósforo (mg/Kg)', record.fosforo, setFosforo, 'fosforo')}
              {renderInput('Potássio (mg/Kg)', record.potassio, setPotassio, 'potassio')}
              {renderInput('Luminosidade (lux)', record.lux, setLux, 'luminosidade')}
              {renderInput('Umidade (%)', record.umidade, setUmidade, 'umidade')}
              {renderInput('Temperatura (°C)', record.temperatura, setTemperatura, 'temperatura')}
              {renderInput('PH', record.pH, setPh, 'ph')}
            </div>
            {especie && <ParametrosDaEspecie especie={especie} showHeader />}
          </div>
        </div>

        <div className="actions">
          <button onClick={() => navigate(`/painel/plantas/${idPlanta}/registros/novo/imagem`)}>
            <FontAwesomeIcon icon={faCircleLeft} />
            Cancelar
          </button>
          <button onClick={handleNext}>Avançar</button>
        </div>
      </section>
    </SelecionarDadosRegistroStyle>
  );
};

export default SelecionarDadosRegistro;
