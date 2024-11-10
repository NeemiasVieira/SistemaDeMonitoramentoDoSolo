import { useQuery } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import SMS_API, { GraphQLResponse } from '../sms-api';
import { QueryKeys } from '../types';

export interface RecordsPerMonthAvg {
  mesAno: string;
  medias: {
    nitrogenio: number;
    fosforo: number;
    potassio: number;
    umidade: number;
    temperatura: number;
    pH: number;
    luz: number;
    lux: number;
  };
}

interface GetRecordsPerMonthAvg {
  getRecordsPerMonthAvg: RecordsPerMonthAvg[];
}

const request = async (idPlanta: string) => {
  const token = `Bearer ${localStorage.getItem('token')}`;
  const options = { headers: { Authorization: token } };
  const variables = { idPlanta };
  const query = `query GetRecordsPerMonthAvg($idPlanta: String!) {
  getRecordsPerMonthAvg(idPlanta: $idPlanta) {
    mesAno
    medias {
      nitrogenio
      fosforo
      potassio
      umidade
      temperatura
      pH
      luz
      lux
    }
  }
}`;

  return await SMS_API.post<GraphQLResponse<GetRecordsPerMonthAvg>>('', { query, variables }, options);
};

export const useGetRecordsPerMonthAvg = (idPlanta: string) => {
  const { notificar } = useNotificacoes();

  const {
    data,
    isLoading: avgRecordsIsLoading,
    error,
  } = useQuery({
    queryFn: () => request(idPlanta),
    queryKey: [QueryKeys.RECORDS_PER_MONTH_AVG, idPlanta],
    cacheTime: 10 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
    staleTime: 10 * 60 * 1000,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO' }),
  });

  const recordsPerMonthAvg = data?.data?.data?.getRecordsPerMonthAvg;

  return {
    recordsPerMonthAvg,
    errorRecordsPerAvg: error as string,
    avgRecordsIsLoading,
  };
};
