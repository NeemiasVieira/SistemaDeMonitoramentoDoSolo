import { useQuery } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import SMS_API, { GraphQLResponse } from '../sms-api';
import { QueryKeys } from '../types';

interface Specie {
  id: string;
  nome: string;
  descricao: string;
  simulado: boolean;
  parametros: {
    nitrogenio: { min: string; max: string };
    fosforo: { min: string; max: string };
    potassio: { min: string; max: string };
    luz: { min: string; max: string };
    umidade: { min: string; max: string };
    temperatura: { min: string; max: string };
    pH: { min: string; max: string };
  };
}

interface GetSpecieByPlantIdQuery {
  getSpecieByPlantId?: Specie;
}

const request = async (idPlanta: string) => {
  const token = `Bearer ${localStorage.getItem('token')}`;
  const options = { headers: { Authorization: token } };
  const variables = { idPlanta };
  const query = `query GetSpecieByPlantId($idPlanta: String!) {
    getSpecieByPlantId(idPlanta: $idPlanta) { 
        id 
        nome 
        descricao 
        simulado
        parametros { 
            nitrogenio { min max } 
            fosforo { min max }
            potassio { min max }
            luz { min max }
            umidade { min max }
            temperatura { min max }
            pH { min max }
        }
    }
}`;

  return await SMS_API.post<GraphQLResponse<GetSpecieByPlantIdQuery>>('', { query, variables }, options);
};

export const useGetSpecieByPlantId = (idPlanta: string) => {
  const { notificar } = useNotificacoes();

  const {
    data,
    isLoading: getSpecieByPlantIdIsLoading,
    refetch: getSpecieByPlantId,
  } = useQuery({
    queryFn: () => request(idPlanta),
    queryKey: [QueryKeys.SPECIE_BY_PLANT_ID, idPlanta],
    cacheTime: 10 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
    staleTime: 10 * 60 * 1000,
    retry: false,
    enabled: true,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO', tempoEmSeg: 4 }),
  });

  const errors = data?.data?.errors;

  return {
    specie: data?.data?.data?.getSpecieByPlantId,
    getSpecieByPlantIdIsLoadingError: errors && errors.length > 0 ? errors[0].message : null,
    getSpecieByPlantIdIsLoading,
    getSpecieByPlantId,
  };
};
