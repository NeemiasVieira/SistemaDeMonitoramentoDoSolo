import { Specie } from '@components/Especie/Types';
import { ParametrosDaEspecieStyle } from './ParametrosDaEspecieStyle';
import { useMemo } from 'react';
import { formatarNumeroComPontos } from '@components/PopUps/SaudeParamsModal/SaudeParamsModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

interface ParametrosDaEspecieProps {
  especie: Specie;
  showHeader?: boolean;
}

export const ParametrosDaEspecie: React.FC<ParametrosDaEspecieProps> = ({ especie, showHeader = false }) => {
  const { nitrogenio, fosforo, potassio, luz, umidade, temperatura, pH } = especie.parametros;

  const data = useMemo(
    () => [
      {
        propriedade: 'Nitrogênio',
        unidade: 'mg/Kg',
        valorMinimo: nitrogenio?.min,
        valorMaximo: nitrogenio?.max,
      },
      {
        propriedade: 'Fósforo',
        unidade: 'mg/Kg',
        valorMinimo: fosforo?.min,
        valorMaximo: fosforo?.max,
      },
      {
        propriedade: 'Potássio',
        unidade: 'mg/Kg',
        valorMinimo: potassio?.min,
        valorMaximo: potassio?.max,
      },
      {
        propriedade: 'Luz',
        unidade: 'lx (lux)',
        valorMinimo: formatarNumeroComPontos(luz?.min),
        valorMaximo: formatarNumeroComPontos(luz?.max),
      },
      {
        propriedade: 'Umidade',
        unidade: '%',
        valorMinimo: umidade?.min,
        valorMaximo: umidade?.max,
      },
      {
        propriedade: 'Temperatura',
        unidade: 'ºC',
        valorMinimo: temperatura?.min,
        valorMaximo: temperatura?.max,
      },
      {
        propriedade: 'pH',
        unidade: '',
        valorMinimo: pH?.min,
        valorMaximo: pH?.max,
      },
    ], // eslint-disable-next-line
    [especie]
  );

  return (
    <ParametrosDaEspecieStyle>
      {showHeader && (
        <div className="header">
          <h3>
            <FontAwesomeIcon icon={faCircleQuestion} />
            Parâmetros da espécie {especie.nome}
          </h3>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Propriedade</th>
            <th>Valor Mínimo</th>
            <th>Valor Máximo</th>
            <th>Unidade</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.propriedade}</td>
              <td>{item.valorMinimo}</td>
              <td>{item.valorMaximo}</td>
              <td>{item.unidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ParametrosDaEspecieStyle>
  );
};
