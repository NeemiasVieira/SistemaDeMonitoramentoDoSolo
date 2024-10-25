import { useMutation, useQueryClient } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import SMS_API from '../sms-api';
import { MutationKeys, QueryKeys } from '../types';

const request = async (deletePlantId: string) => {
  const token = `Bearer ${localStorage.getItem('token')}`;
  const options = { headers: { Authorization: token } };
  const variables = { deletePlantId };

  const query = `mutation DeletePlant($deletePlantId: String!) {
    deletePlant(id: $deletePlantId)
  }`;

  return await SMS_API.post('', { query, variables }, options);
};

export const useDeletePlant = () => {
  const queryClient = useQueryClient();
  const { notificar } = useNotificacoes();

  const onSucesso = () => {
    queryClient.invalidateQueries(QueryKeys.ALL_PLANTS);
    queryClient.invalidateQueries(QueryKeys.PLANT);
    notificar({ tipo: 'SUCESSO', mensagem: 'Planta excluída com sucesso' });
  };

  const {
    error,
    isLoading: deletePlantIsLoading,
    mutate: confirmDeletePlant,
  } = useMutation({
    mutationFn: (deletePlantId: string) => request(deletePlantId),
    mutationKey: MutationKeys.DELETE_PLANT,
    onSuccess: onSucesso,
    retry: false,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO' }),
  });

  return {
    deletePlantError: error as string,
    deletePlantIsLoading,
    confirmDeletePlant,
  };
};
