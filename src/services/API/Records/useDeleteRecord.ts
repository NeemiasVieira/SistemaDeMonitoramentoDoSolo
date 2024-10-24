import { useMutation, useQueryClient } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import SMS_API from '../sms-api';
import { MutationKeys, QueryKeys } from '../types';

const request = async (deleteRecordId: string) => {
  const token = `Bearer ${localStorage.getItem('token')}`;
  const options = { headers: { Authorization: token } };
  const variables = { deleteRecordId };

  const query = `mutation DeleteRecord($deleteRecordId: String!) {
    deleteRecord(id: $deleteRecordId)
  }`;

  return await SMS_API.post('', { query, variables }, options);
};

export const useDeleteRecord = () => {
  const queryClient = useQueryClient();
  const { notificar } = useNotificacoes();

  const onSuccess = () => {
    queryClient.invalidateQueries(QueryKeys.ALL_RECORDS);
    queryClient.invalidateQueries(QueryKeys.RECORD);
    queryClient.invalidateQueries(QueryKeys.ALL_RECORDS_PAGINATED);
    notificar({ tipo: 'SUCESSO', mensagem: 'Registro excluído com sucesso' });
  };

  const {
    error,
    isLoading: deleteRecordIsLoading,
    mutate: deleteRecord,
  } = useMutation({
    mutationFn: (deleteRecordId: string) => request(deleteRecordId),
    mutationKey: MutationKeys.DELETE_PLANT,
    onSuccess,
    retry: false,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO' }),
  });

  return {
    deleteRecordError: error as string,
    deleteRecordIsLoading,
    deleteRecord,
  };
};
