import { useQuery } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import SMS_API, { GraphQLResponse } from '../sms-api';
import { QueryKeys } from '../types';
import { Record } from './useGetAllRecordsPaginated';

interface GetRecordResponse {
  getRecord: Record;
}

const request = async (idRegistro: string) => {
  const token = `Bearer ${localStorage.getItem('token')}`;
  const options = { headers: { Authorization: token } };
  const variables = { idRecord: idRegistro };
  const query = `query GetRecord($idRecord: String!) {
      getRecord(idRecord: $idRecord) { nitrogenio fosforo potassio umidade temperatura pH dataDeRegistro luz lux imagem diagnostico idPlanta nomeEspecie nuRegistro idEspecie }}`;

  return await SMS_API.post<GraphQLResponse<GetRecordResponse>>('', { query, variables }, options);
};

export const useGetRecord = (idRegistro: string) => {
  const { notificar } = useNotificacoes();

  const {
    data,
    refetch: getRecord,
    isLoading: recordIsLoading,
    error,
  } = useQuery({
    queryFn: () => request(idRegistro),
    queryKey: [QueryKeys.RECORD, idRegistro],
    cacheTime: 10 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
    staleTime: 10 * 60 * 1000,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO' }),
  });

  const record = data?.data?.data?.getRecord;

  return {
    record,
    errorLastRecord: error as string,
    recordIsLoading,
    getRecord,
  };
};
