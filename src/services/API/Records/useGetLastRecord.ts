import { useQuery } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import SMS_API, { GraphQLResponse } from '../sms-api';
import { QueryKeys } from '../types';
import { Record } from './useGetAllRecordsPaginated';

interface LastRecord {
  getLastRecordByPlant: Record;
}

const getUltimoRegistro = async (idPlanta: string) => {
  const token = `Bearer ${localStorage.getItem('token')}`;
  const options = { headers: { Authorization: token } };
  const variables = { idPlanta };
  const query = `query GetLastRecordByPlant($idPlanta: String!) {
        getLastRecordByPlant(idPlanta: $idPlanta) { nitrogenio fosforo potassio umidade temperatura pH dataDeRegistro luz lux idPlanta nomeEspecie}}`;

  return await SMS_API.post<GraphQLResponse<LastRecord>>('', { query, variables }, options);
};

export const useGetLastRecord = (idPlanta: string) => {
  const { notificar } = useNotificacoes();

  const {
    data,
    refetch: getLastRecord,
    isLoading: lastRecordIsLoading,
    error,
  } = useQuery({
    queryFn: () => getUltimoRegistro(idPlanta),
    queryKey: [QueryKeys.LAST_RECORD, idPlanta],
    cacheTime: 10 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
    staleTime: 10 * 60 * 1000,
    retry: false,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO' }),
  });

  const lastRecord = data?.data?.data?.getLastRecordByPlant;

  return {
    lastRecord,
    errorLastRecord: error as string,
    lastRecordIsLoading,
    getLastRecord,
  };
};
