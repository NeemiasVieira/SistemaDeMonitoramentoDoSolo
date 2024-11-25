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

interface SpecieQuery {
  getSpecie: Specie;
}

interface getSpecieParams {
  id: string;
  enabled?: boolean;
}

const request = async (args: getSpecieParams) => {
  const { id } = args;
  if (!id) return;
  const token = `Bearer ${localStorage.getItem('token')}`;
  const options = { headers: { Authorization: token } };
  const variables = { id };
  const query = `query GetSpecie($id: String!) {
    getSpecie(id: $id) { 
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

  return await SMS_API.post<GraphQLResponse<SpecieQuery>>('', { query, variables }, options);
};

export const useGetSpecie = (args: getSpecieParams) => {
  const { notificar } = useNotificacoes();
  const { enabled, id } = args;

  const {
    data: specieData,
    isLoading: specieIsLoading,
    refetch: getSpecie,
  } = useQuery({
    queryFn: () => request({ id }),
    queryKey: [QueryKeys.SPECIE, id],
    cacheTime: 10 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
    staleTime: 10 * 60 * 1000,
    retry: false,
    enabled,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO' }),
  });

  return {
    specieData: specieData?.data?.data?.getSpecie ?? null,
    specieError: specieData?.data?.errors?.length > 0 ? specieData.data.errors[0].message : null,
    specieIsLoading,
    getSpecie,
  };
};
