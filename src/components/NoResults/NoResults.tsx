import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NoResultsStyle } from './NoResultsStyle';
import { faComment } from '@fortawesome/free-solid-svg-icons';

export const NoResults = () => {
  return (
    <NoResultsStyle>
      <h3>Parece que não há nenhum resultado por aqui.</h3>
      <div className="mainMessage">
        <FontAwesomeIcon icon={faComment} />
        <p>
          Não se preocupe, nosso sistema possui o modo simulação integrado, e você pode navegar e testar tudo que quiser
        </p>
      </div>

      <span>Nossa equipe preparou um fluxo recomendado para você:</span>
      <ul>
        <li>Crie uma espécie simulada no painel administrativo ou utilize uma oficial;</li>
        <li>Adicione uma planta simulada ao sistema;</li>
        <li>Vá para todos os registros e crie um novo registro, ou quantos quiser :)</li>
        <li>Agora você já consegue aproveitar a maioria das funcionalidades</li>
      </ul>
      <span>Precisa de ajuda?</span>
    </NoResultsStyle>
  );
};
