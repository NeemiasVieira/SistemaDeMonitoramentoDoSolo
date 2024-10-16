import { useMutation, useQueryClient } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import SMS_API, { GraphQLResponse } from '../sms-api';
import { Planta } from '@pages/PainelDeControle/Resumo/Resumo.types';

interface CreatePlant {
  createPlant: {
    id: string;
  };
}

const request = async (args: Planta) => {
  const { nome, idEspecie, simulado } = args;

  const token = `Bearer ${localStorage.getItem('token')}`;
  const options = { headers: { Authorization: token } };
  const variables = { nome, idEspecie, simulado };

  const query = `mutation CreatePlant($nome: String!, $idEspecie: String!, $simulado: Boolean!) {
    createPlant(nome: $nome, idEspecie: $idEspecie, simulado: $simulado) {
      id
    }
  }`;

  return await SMS_API.post<GraphQLResponse<CreatePlant>>('', { query, variables }, options);
};

export const useCreatePlant = (args: Planta) => {
  const queryClient = useQueryClient();
  const { notificar } = useNotificacoes();

  const onSucesso = () => {
    queryClient.invalidateQueries('plantsByOwner');
    queryClient.invalidateQueries('planta');
    notificar({ tipo: 'SUCESSO', mensagem: 'Planta criada com sucesso', tempoEmSeg: 4 });
  };

  const {
    data,
    error,
    isLoading: createPlantIsLoading,
    mutate: confirmCreatePlant,
  } = useMutation({
    mutationFn: () => request(args),
    mutationKey: ['createPlanta'],
    onSuccess: onSucesso,
    retry: false,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO', tempoEmSeg: 4 }),
  });

  const newPlant = data?.data?.data?.createPlant;

  return {
    newPlant,
    createPlantError: error as string,
    createPlantIsLoading,
    confirmCreatePlant,
  };
};
