import { AplicacaoMain } from './AplicacaoStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { DetalhesTecnicosProjeto } from '@components/DetalhesTecnicosProjeto/DetalhesTecnicos';
import { Squad } from '@components/Squad/Squad';

const Aplicacao = () => {
  return (
    <AplicacaoMain>
      <h1>Objetivo</h1>
      <section className="SecaoIntroducao">
        <FontAwesomeIcon icon={faSeedling} />
        <div className="introducaoTexto">
          <p>
            O projeto Sistema de Monitoramento do Solo tem foco no desenvolvimento e cuidados com o crescimento de
            plantas.
          </p>
          <p>
            Nosso objetivo é trazer praticidade para o plantio domiciliar, através da implementação tecnólogica que
            auxiliará em todos os cuidados da sua plantinha.
          </p>
          <p>
            O sistema contará com controle em tempo real de onde estiver, monitorando a planta por imagens, que
            conseguirão detectar a presença de doenças e/ou anomalias, e também contará com o controle de nutrientes e
            estatísticas como: Nitrogênio, Fósforo, Potássio (NPK), umidade, temperatura, luminosiudade e pH.
          </p>
        </div>
      </section>
      <DetalhesTecnicosProjeto />
      <Squad />
    </AplicacaoMain>
  );
};

export default Aplicacao;
