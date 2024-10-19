import { useQuery } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import SMS_API, { GraphQLResponse } from '../sms-api';
import { QueryKeys } from '../types';

interface getAllRecords {
  getAllRecordsByPlant: {
    id: string;
    nitrogenio: string;
    fosforo: string;
    potassio: string;
    umidade: string;
    temperatura: string;
    pH: string;
    dataDeRegistro: string;
    luz: string;
    lux: string;
    idPlanta: string;
    nomeEspecie: string;
    nuRegistro: number;
  }[];
}

interface allRecordsQueryParams {
  idPlanta: string;
  intervaloDeBusca?: number | string;
}

const request = async (params?: allRecordsQueryParams) => {
  const { idPlanta } = params;
  let { intervaloDeBusca } = params;

  const token = `Bearer ${localStorage.getItem('token')}`;

  intervaloDeBusca = intervaloDeBusca === 'Selecione' ? null : Number(intervaloDeBusca);

  const query = `query GetAllRecordsByPlant($idPlanta: String!, $intervaloDeBusca: Float ) {
        getAllRecordsByPlant( idPlanta: $idPlanta, intervaloDeBusca: $intervaloDeBusca )   
        { nitrogenio fosforo potassio umidade temperatura pH dataDeRegistro luz lux idPlanta nomeEspecie nuRegistro } }`;

  const options = { headers: { Authorization: token } };
  const variables = { idPlanta, intervaloDeBusca };

  return await SMS_API.post<GraphQLResponse<getAllRecords>>('', { query, variables }, options);
};

export const useGetAllRecords = (params: allRecordsQueryParams) => {
  const { notificar } = useNotificacoes();
  const { idPlanta, intervaloDeBusca } = params;

  const {
    data,
    refetch: getAllRecords,
    isLoading: allRecordsIsLoading,
    error,
  } = useQuery({
    queryFn: () => request({ idPlanta, intervaloDeBusca }),
    queryKey: [QueryKeys.ALL_RECORDS, idPlanta, intervaloDeBusca],
    cacheTime: 10 * 60 * 1000,
    refetchInterval: false,
    staleTime: 10 * 60 * 1000,
    retry: false,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO', tempoEmSeg: 4 }),
  });

  const allRecords = data?.data?.data?.getAllRecordsByPlant;

  return {
    allRecords,
    errorAllRecords: error as string,
    getAllRecords,
    allRecordsIsLoading,
  };
};
