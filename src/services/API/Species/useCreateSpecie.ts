import { useMutation, useQueryClient } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import SMS_API, { GraphQLResponse } from '../sms-api';
import { MutationKeys, QueryKeys } from '../types';

interface Specie {
  id: string;
  nome: string;
  descricao: string;
  simulado: boolean;
  parametros?: {
    nitrogenio: { min: string; max: string };
    fosforo: { min: string; max: string };
    potassio: { min: string; max: string };
    luz: { min: string; max: string };
    umidade: { min: string; max: string };
    temperatura: { min: string; max: string };
    pH: { min: string; max: string };
  };
}

interface SpecieQuery {
  createSpecie: Specie;
}

const request = async (args: Specie) => {
  const { nome, descricao, parametros, simulado } = args;

  const token = `Bearer ${localStorage.getItem('token')}`;
  const options = { headers: { Authorization: token } };
  const variables = { nome, descricao, parametros, simulado };

  const query = `mutation CreateSpecie($nome: String!, $descricao: String!, $parametros: IParametros!, $simulado: Boolean) {
    createSpecie( nome: $nome, descricao: $descricao, parametros: $parametros, simulado: $simulado ) { id nome descricao }
  }`;

  return await SMS_API.post<GraphQLResponse<SpecieQuery>>('', { query, variables }, options);
};

export const useCreateSpecie = (args: Specie) => {
  const queryClient = useQueryClient();
  const { notificar } = useNotificacoes();

  const onSucesso = () => {
    queryClient.invalidateQueries(QueryKeys.ALL_SPECIES);
    queryClient.invalidateQueries(QueryKeys.SPECIE);
    notificar({ tipo: 'SUCESSO', mensagem: 'Espécie criada com sucesso' });
  };

  const {
    data,
    error,
    isLoading: createSpecieIsLoading,
    mutate: confirmCreateSpecie,
  } = useMutation({
    mutationFn: () => request(args),
    mutationKey: [MutationKeys.CREATE_SPECIE],
    onSuccess: onSucesso,
    retry: false,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO' }),
  });

  const newSpecie = data?.data?.data?.createSpecie;

  return {
    newSpecie,
    createSpecieError: error as string,
    createSpecieIsLoading,
    confirmCreateSpecie,
  };
};
