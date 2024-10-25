import { useQuery } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import SMS_API, { GraphQLResponse } from '../sms-api';
import { useApplication } from '@contexts/ApplicationContext';
import { QueryKeys } from '../types';
import { Option } from '@components/Select/Select';
import { useMemo } from 'react';

interface Specie {
  id: string;
  nome: string;
  simulado: boolean;
}

interface SpecieQuery {
  getAllSpecies: Specie[];
}

const getAllSpecies = async (variables: { comSimulados: boolean }) => {
  const token = `Bearer ${localStorage.getItem('token')}`;
  const options = { headers: { Authorization: token } };
  const query = `query SelectSpecies($comSimulados: Boolean) {
    getAllSpecies(comSimulados: $comSimulados) {
      id
      nome
      simulado
    }
  }`;

  return await SMS_API.post<GraphQLResponse<SpecieQuery>>('', { query, variables }, options);
};

export const useSelectSpecies = () => {
  const { notificar } = useNotificacoes();
  const { simulationMode } = useApplication();
  const variables = { comSimulados: simulationMode };
  const {
    data,
    isLoading: selectSpeciesIsLoading,
    refetch: getOptions,
    error,
  } = useQuery({
    queryFn: () => getAllSpecies(variables),
    queryKey: [QueryKeys.SELECT_SPECIE, simulationMode],
    cacheTime: 10 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
    staleTime: 10 * 60 * 1000,
    retry: false,
    enabled: true,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO' }),
  });

  const options = useMemo(() => {
    return data?.data?.data?.getAllSpecies.map((option) => {
      const description = option.simulado ? 'Espécie simulada' : 'Espécie oficial';
      return {
        label: option.nome,
        id: option.id,
        description: simulationMode ? description : '',
      } as Option;
    });
  }, [data, simulationMode]);

  return {
    options,
    selectSpeciesError: error as string,
    selectSpeciesIsLoading,
    getOptions,
  };
};
