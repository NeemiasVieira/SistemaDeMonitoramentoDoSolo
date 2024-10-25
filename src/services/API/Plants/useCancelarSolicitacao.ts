import { useMutation, useQueryClient } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import SMS_API, { GraphQLResponse } from '../sms-api';
import { MutationKeys, QueryKeys } from '../types';

interface updateSolicitacaoRegistro {
  updateSolicitacaoRegistro: 'nenhuma' | 'aguardando' | 'confirmado';
}

const request = async (idPlanta: string) => {
  const token = `Bearer ${localStorage.getItem('token')}`;
  const variables = { idPlanta, nenhuma: true };
  const query = `mutation cancelarSolicitacaoRegistro($idPlanta: String!, $nenhuma: Boolean) {
    updateSolicitacaoRegistro(idPlanta: $idPlanta, nenhuma: $nenhuma) {
      solicitacaoNovoRegistro
    }
  }`;

  const options = { headers: { Authorization: token } };

  const response = await SMS_API.post<GraphQLResponse<updateSolicitacaoRegistro>>('', { query, variables }, options);
  return response;
};

export const useCancelarSolicitacao = (idPlanta: string) => {
  const { notificar } = useNotificacoes();
  const queryClient = useQueryClient();

  const onSucesso = () => {
    queryClient.invalidateQueries(QueryKeys.PLANT);
    notificar({ tipo: 'SUCESSO', mensagem: 'Solicitação cancelada com sucesso!' });
  };

  const onErro = (e: string) => notificar({ mensagem: String(e), tipo: 'ERRO' });

  const {
    mutate: cancelarSolicitacao,
    isLoading,
    data,
    error,
  } = useMutation({
    mutationFn: () => request(idPlanta),
    mutationKey: MutationKeys.CANCELAR_SOLICITACAO,
    onError: (e) => onErro(String(e)),
    onSuccess: onSucesso,
    retry: false,
  });

  const response = data?.data?.data?.updateSolicitacaoRegistro;

  return {
    respostaCancelamento: response,
    erro: error as string,
    isLoading,
    cancelarSolicitacao,
  };
};
