import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import { Loading } from '../Loading/Loading';
import { SecaoGraficoLinhas } from './GraficoLinhasStyle';
import {
  TipoGrafico,
  intervalChartOptions,
  selecionaGrafico,
  selecionaGraficoAvg,
  typeChartOptions,
  unidadeMedida,
} from './Services';
import { GraficoLinhasProps } from './Types';
import { Select } from '@components/Select/Select';
import { useGetRecordsPerMonthAvg } from '@services/API/Records/useGetRecordsPerMonthAvg';
import { useParams, useSearchParams } from 'react-router-dom';
import { ToggleButton } from '@components/Buttons/ToggleButton/ToggleButton';

const GraficoLinhas: React.FC<GraficoLinhasProps> = ({ records, params }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { intervaloDeBusca, setIntervaloDeBusca, allRecordsIsLoading } = params;

  const [tipoGrafico, setTipoGrafico] = useState<TipoGrafico>('NPK');
  const [data, setData] = useState([['Dia', 'Nitrogênio', 'Fósforo', 'Potássio']]);
  const { idPlanta } = useParams();
  const { recordsPerMonthAvg, avgRecordsIsLoading } = useGetRecordsPerMonthAvg(idPlanta);
  const [showAvg, setShowAvg] = useState<boolean>(searchParams.get('mostrar-media') === 'sim' ? true : false);

  const toggleShowAvg = () => {
    setShowAvg((prevValue) => {
      searchParams.set('mostrar-media', !prevValue ? 'sim' : 'nao');
      setSearchParams(searchParams);
      return !prevValue;
    });
  };

  useEffect(() => {
    if (intervaloDeBusca === 'Selecione') setIntervaloDeBusca(null);
    // eslint-disable-next-line
  }, [intervaloDeBusca]);

  useEffect(() => {
    setData([]);
    // Atualize o estado do data sempre que records for alterado
    let newData: any;
    if (records) {
      newData = showAvg ? selecionaGraficoAvg(tipoGrafico, recordsPerMonthAvg) : selecionaGrafico(tipoGrafico, records);
    }

    setData(newData);
  }, [records, tipoGrafico, showAvg]);

  const options: any = {
    chart: {
      title: unidadeMedida(tipoGrafico),
    },
    width: '100%',
    height: 'auto',
    curveType: 'function',
    legend: { position: 'none' },
  };

  return (
    <SecaoGraficoLinhas>
      <h2 className="titulo">Gráfico do Histórico da Planta</h2>

      <div className="filtros">
        <h3>Filtros</h3>
        <div className="selects">
          <div className="Select">
            <p className="tituloSelect">Gráfico</p>
            <Select
              options={typeChartOptions}
              setSelected={setTipoGrafico}
              defaultValue={typeChartOptions[0]}
              $width="180px"
            />
          </div>
          <div className="Select">
            <p className="tituloSelect">Intervalo de busca</p>
            <Select
              options={intervalChartOptions}
              setSelected={setIntervaloDeBusca}
              defaultValue={intervalChartOptions[0]}
              $width="180px"
              disabled={showAvg}
            />
          </div>
          <div className="Select">
            <p className="tituloSelect">Mostrar média mensal</p>
            <ToggleButton checked={showAvg} onChange={toggleShowAvg} />
          </div>
        </div>
      </div>

      {(allRecordsIsLoading || avgRecordsIsLoading) && <Loading minHeight={'55vh'} />}

      {data?.length <= 2 && !allRecordsIsLoading && (
        <p className="Aviso">Não há registros suficientes para formar um histórico, tente adicionar novos registros.</p>
      )}
      {data?.length > 2 && !allRecordsIsLoading && (
        <div className="graficoContainer">
          <Chart chartType="Line" width="100%" height="450px" data={data} options={options} />
        </div>
      )}
    </SecaoGraficoLinhas>
  );
};

export default GraficoLinhas;
