import SMS_API, { GraphQLResponse } from '../sms-api';
import { useQuery } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import { useApplication } from '@contexts/ApplicationContext';
import { QueryKeys } from '../types';

interface Plantas {
  getPlantasByDonoId: {
    id: string;
    nome: string;
    especie: string;
    dataDaPlantacao: string;
    simulado: boolean;
    idEspecie: string;
  }[];
}

const request = async (comSimulados: boolean) => {
  const variables = { comSimulados };
  const token = `Bearer ${localStorage.getItem('token')}`;
  const query = `query GetPlantasByDonoId($comSimulados: Boolean) { getPlantasByDonoId(comSimulados: $comSimulados) { id nome especie dataDaPlantacao simulado } }`;
  const options = { headers: { Authorization: token } };
  return await SMS_API.post<GraphQLResponse<Plantas>>('', { query, variables }, options);
};

export const useGetAllPlants = () => {
  const { notificar } = useNotificacoes();
  const { simulationMode } = useApplication();

  const { isLoading, data, refetch, error } = useQuery({
    queryFn: () => request(simulationMode),
    queryKey: [QueryKeys.ALL_PLANTS, simulationMode],
    cacheTime: 30 * 60 * 1000,
    refetchInterval: false,
    staleTime: 30 * 60 * 1000,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO', tempoEmSeg: 4 }),
    retry: false,
  });

  const plantas = data?.data?.data?.getPlantasByDonoId ?? [];

  return {
    plantas,
    erro: error as string,
    isLoading,
    refetch,
  };
};
