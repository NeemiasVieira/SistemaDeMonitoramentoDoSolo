import { FormatarDatas } from '@assets/utils/FormatDate';
import { Option } from '@components/Select/Select';
import { Record } from '@services/API/Records/useGetAllRecordsPaginated';
import { RecordsPerMonthAvg } from '@services/API/Records/useGetRecordsPerMonthAvg';

const unidades = {
  NPK: 'Unidade de medida: mg/Kg',
  temperatura: 'Unidade de medida: ºC',
  pH: '',
  umidade: 'Unidade de medida: %',
  luz: 'Unidade de medida: %',
} as const;

export type TipoGrafico = keyof typeof unidades;

export const selecionaGrafico = (tipoGrafico: TipoGrafico, records: Record[]) => {
  const newDataValues = records
    ? ({
        NPK: [
          ['Dia', 'Nitrogênio', 'Fósforo', 'Potássio'],
          ...records.map((record) => [
            FormatarDatas.diaMes(record.dataDeRegistro),
            Number(record.nitrogenio),
            Number(record.fosforo),
            Number(record.potassio),
          ]),
        ],
        temperatura: [
          ['Dia', 'Temperatura'],
          ...records.map((record) => [FormatarDatas.diaMes(record.dataDeRegistro), Number(record.temperatura)]),
        ],
        umidade: [
          ['Dia', 'Umidade'],
          ...records.map((record) => [FormatarDatas.diaMes(record.dataDeRegistro), Number(record.umidade)]),
        ],
        pH: [
          ['Dia', 'pH'],
          ...records.map((record) => [FormatarDatas.diaMes(record.dataDeRegistro), Number(record.pH)]),
        ],
        luz: [
          ['Dia', 'Luz'],
          ...records.map((record) => [FormatarDatas.diaMes(record.dataDeRegistro), Number(record.luz)]),
        ],
      } as const)
    : undefined;

  return newDataValues[tipoGrafico] ?? 'Unidade de medida não especificada';
};

export const selecionaGraficoAvg = (tipoGrafico: TipoGrafico, recordsPerMonthAvg: RecordsPerMonthAvg[]) => {
  const newDataValues = recordsPerMonthAvg
    ? ({
        NPK: [
          ['Mês/Ano', 'Nitrogênio', 'Fósforo', 'Potássio'],
          ...recordsPerMonthAvg.map((month) => [
            month.mesAno,
            Number(month.medias.nitrogenio),
            Number(month.medias.fosforo),
            Number(month.medias.potassio),
          ]),
        ],
        temperatura: [
          ['Mês/Ano', 'Temperatura'],
          ...recordsPerMonthAvg.map((month) => [month.mesAno, month.medias.temperatura]),
        ],
        umidade: [['Mês/Ano', 'Umidade'], ...recordsPerMonthAvg.map((month) => [month.mesAno, month.medias.umidade])],
        pH: [['Mês/Ano', 'pH'], ...recordsPerMonthAvg.map((month) => [month.mesAno, month.medias.pH])],
        luz: [['Mês/Ano', 'Luz'], ...recordsPerMonthAvg.map((month) => [month.mesAno, month.medias.luz])],
      } as const)
    : undefined;

  return newDataValues[tipoGrafico] ?? 'Unidade de medida não especificada';
};

export const unidadeMedida = (tipoGrafico: TipoGrafico) => {
  return unidades[tipoGrafico] !== undefined ? unidades[tipoGrafico] : 'Unidade de medida não especificada';
};

export const typeChartOptions: Option[] = [
  {
    label: 'Nutrientes',
    id: 'NPK',
    description: 'mg/Kg',
  },
  {
    label: 'Temperatura',
    id: 'temperatura',
    description: '°C',
  },
  {
    label: 'Umidade',
    id: 'umidade',
    description: '%',
  },
  {
    label: 'pH',
    id: 'pH',
    description: '',
  },
  {
    label: 'Luz',
    id: 'luz',
    description: '%',
  },
];

export const intervalChartOptions: Option[] = [
  {
    label: 'Sem intervalo',
    id: '',
  },
  {
    label: '1 Dia',
    id: '1',
  },
  {
    label: '3 Dias',
    id: '3',
  },
  {
    label: '5 Dias',
    id: '5',
  },
  {
    label: '1 Semana',
    id: '7',
  },
  {
    label: '2 Semanas',
    id: '14',
  },
  {
    label: '1 Mês',
    id: '30',
  },
  {
    label: '3 Meses',
    id: '90',
  },
  {
    label: '6 Meses',
    id: '180',
  },
  {
    label: 'Último Ano',
    id: '365',
  },
];
