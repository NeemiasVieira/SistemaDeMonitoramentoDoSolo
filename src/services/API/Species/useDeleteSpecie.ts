import { useMutation, useQueryClient } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import SMS_API, { GraphQLResponse } from '../sms-api';
import { MutationKeys, QueryKeys } from '../types';

interface DeleteSpecieResponse {
  deleteSpecie: string;
}

const request = async (id: string) => {
  const token = `Bearer ${localStorage.getItem('token')}`;
  const options = { headers: { Authorization: token } };
  const variables = { id };
  const query = `mutation DeleteSpecie($id: String!) {
    deleteSpecie(id: $id)
  }`;

  return await SMS_API.post<GraphQLResponse<DeleteSpecieResponse>>('', { query, variables }, options);
};

export const useDeleteSpecie = (id: string) => {
  const queryClient = useQueryClient();
  const { notificar } = useNotificacoes();

  const onSucesso = () => {
    queryClient.invalidateQueries(QueryKeys.ALL_SPECIES);
    queryClient.invalidateQueries(QueryKeys.SPECIE);
    notificar({ tipo: 'SUCESSO', mensagem: 'Espécie excluída com sucesso!' });
  };

  const {
    data,
    isLoading: deleteSpecieIsLoading,
    mutate: confirmDeleteSpecie,
    error,
  } = useMutation({
    mutationFn: () => request(id),
    mutationKey: [MutationKeys.DELETE_SPECIE],
    onSuccess: onSucesso,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO' }),
    retry: false,
  });

  const deleteSpecieData = data?.data?.data?.deleteSpecie;

  return {
    deleteSpecieData,
    deleteSpecieError: error as string,
    deleteSpecieIsLoading,
    confirmDeleteSpecie,
  };
};
