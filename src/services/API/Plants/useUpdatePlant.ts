import { useMutation, useQueryClient } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import SMS_API, { GraphQLResponse } from '../sms-api';
import { Planta } from '@pages/PainelDeControle/Resumo/Resumo.types';
import { MutationKeys, QueryKeys } from '../types';

interface UpdatePlant {
  updatePlant: {
    id: string;
  };
}

const request = async (planta: Planta) => {
  const token = `Bearer ${localStorage.getItem('token')}`;
  const options = { headers: { Authorization: token } };
  const variables = {
    updatePlantId: planta.id,
    plantaAtualizada: {
      nome: planta.nome,
    },
  };

  const query = `mutation($updatePlantId: String!, $plantaAtualizada: IPlantaAtualizada!){
    updatePlant(id: $updatePlantId, plantaAtualizada: $plantaAtualizada) {
      id
    }
  }`;

  return await SMS_API.post<GraphQLResponse<UpdatePlant>>('', { query, variables }, options);
};

export const useUpdatePlant = () => {
  const queryClient = useQueryClient();
  const { notificar } = useNotificacoes();

  const onSucesso = () => {
    queryClient.invalidateQueries(QueryKeys.ALL_PLANTS);
    queryClient.invalidateQueries(QueryKeys.PLANT);
    notificar({ tipo: 'SUCESSO', mensagem: 'Planta atualizada com sucesso', tempoEmSeg: 4 });
  };

  const {
    data,
    error,
    isLoading: updatePlantIsLoading,
    mutate: confirmUpdatePlant,
  } = useMutation({
    mutationFn: (planta: Planta) => request(planta),
    mutationKey: [MutationKeys.UPDATE_PLANT],
    onSuccess: onSucesso,
    retry: false,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO', tempoEmSeg: 4 }),
  });

  const updatedPlant = data?.data?.data?.updatePlant;

  return {
    updatedPlant,
    updatePlantError: error as string,
    updatePlantIsLoading,
    confirmUpdatePlant,
  };
};
