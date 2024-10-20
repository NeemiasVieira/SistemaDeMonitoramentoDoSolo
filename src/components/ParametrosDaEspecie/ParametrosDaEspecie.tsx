import { Specie } from '@components/Especie/Types';
import { ParametrosDaEspecieStyle } from './ParametrosDaEspecieStyle';
import { Column, useTable } from 'react-table';
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
  const columns: Column<{
    propriedade: string;
    valorMinimo: string;
    valorMaximo: string;
    unidade: string;
  }>[] = useMemo(
    () => [
      { Header: 'Propriedade', accessor: 'propriedade' },
      { Header: 'Valor Mínimo', accessor: 'valorMinimo' },
      { Header: 'Valor Máximo', accessor: 'valorMaximo' },
      { Header: 'Unidade', accessor: 'unidade' },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
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

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={Math.random()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} key={Math.random()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={Math.random()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={Math.random()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </ParametrosDaEspecieStyle>
  );
};
