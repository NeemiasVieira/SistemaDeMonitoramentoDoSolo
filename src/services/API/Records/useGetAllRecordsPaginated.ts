import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import SMS_API from '../sms-api';
import { QueryKeys } from '../types';

export interface Record {
  id: string;
  idPlanta: string;
  nitrogenio: string;
  fosforo: string;
  potassio: string;
  umidade: string;
  temperatura: string;
  pH: string;
  dataDeRegistro: string;
  luz?: string;
  lux: string;
  nomeEspecie?: string;
  nuRegistro?: number;
  idEspecie?: string;
  imagem?: string;
  diagnostico?: string;
}

interface getAllRecordsPaginated {
  registros: Record[];
  pagina: number;
  totalPaginas: number;
  totalResultados: number;
}

interface Error {
  message: string;
}

interface getAllRecordsPaginatedResponse {
  data?: {
    getAllRecordsPaginated: getAllRecordsPaginated;
  };
  errors?: Error[];
}

interface allRecordsPaginatedQueryParams {
  idPlanta: string;
  registrosPorPag: number;
  pagina: number;
  dataDeInicioBusca?: string;
  dataDeFimBusca?: string;
}

const getAllRecords = async (
  params?: allRecordsPaginatedQueryParams
): Promise<AxiosResponse<getAllRecordsPaginatedResponse>> => {
  const token = `Bearer ${localStorage.getItem('token')}`;

  const query = `query GetAllRecordsPaginated($idPlanta: String!, $registrosPorPag: Float!, $pagina: Float!, $dataDeInicioBusca: DateTime, $dataDeFimBusca: DateTime) { 
      getAllRecordsPaginated(idPlanta: $idPlanta, registrosPorPag: $registrosPorPag, pagina: $pagina, dataDeInicioBusca: $dataDeInicioBusca, dataDeFimBusca: $dataDeFimBusca) 
      { registros { id idPlanta nitrogenio fosforo potassio umidade temperatura pH luz lux dataDeRegistro imagem diagnostico nuRegistro idPlanta nomeEspecie } pagina totalPaginas totalResultados } }
    `;

  const options = { headers: { Authorization: token } };
  const variables = { ...params };

  const response = await SMS_API.post<getAllRecordsPaginatedResponse>('', { query, variables }, options);
  return response;
};

export const useGetAllRecordsPaginated = (params: allRecordsPaginatedQueryParams) => {
  const { notificar } = useNotificacoes();
  const { idPlanta, pagina, registrosPorPag } = params;
  let { dataDeInicioBusca, dataDeFimBusca } = params;

  if (dataDeInicioBusca === '1970-01-01T00:00:00.000Z') dataDeInicioBusca = null;
  if (dataDeFimBusca === '1970-01-01T00:00:00.000Z') dataDeFimBusca = null;

  const {
    data,
    refetch: getAllRecordsPaginated,
    isLoading: allRecordsPaginatedIsLoading,
    error,
  } = useQuery({
    queryFn: () => getAllRecords(params),
    queryKey: [QueryKeys.ALL_RECORDS_PAGINATED, idPlanta, pagina, registrosPorPag, dataDeInicioBusca, dataDeFimBusca],
    cacheTime: 10 * 60 * 1000,
    refetchInterval: false,
    staleTime: 10 * 60 * 1000,
    enabled: false,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO', tempoEmSeg: 4 }),
  });

  const allRecordsPaginated = data?.data?.data?.getAllRecordsPaginated;

  return {
    allRecordsPaginated,
    errorAllRecords: error as string,
    getAllRecordsPaginated,
    allRecordsPaginatedIsLoading,
  };
};
