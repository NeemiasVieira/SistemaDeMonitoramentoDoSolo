import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import SMS_API, { GraphQLResponse } from '../sms-api';
import { QueryKeys } from '../types';

interface Planta {
  getPlant: {
    id: string;
    idDono: string;
    nome: string;
    especie: string;
    dataDaPlantacao: string;
    solicitacaoNovoRegistro: 'nenhuma' | 'aguardando' | 'confirmado';
    ultimaAtualizacao?: string;
    simulado: boolean;
    idEspecie: string;
  };
}

const request = async (idPlanta: string) => {
  const token = `Bearer ${localStorage.getItem('token')}`;
  const variables = { idPlanta };
  const query = `query GetPlant($idPlanta: String!) {        
    getPlant(idPlanta: $idPlanta) { id idDono nome especie dataDaPlantacao solicitacaoNovoRegistro ultimaAtualizacao simulado idEspecie }
    }`;

  const options = { headers: { Authorization: token } };

  return await SMS_API.post<GraphQLResponse<Planta>>('', { query, variables }, options);
};

export const useGetPlant = (idPlanta: string, refetchIntervalOn: boolean = false) => {
  const { notificar } = useNotificacoes();
  const [isLoadingNoCache, setIsLoadingNoCache] = useState<boolean>(false);

  const queryClient = useQueryClient();

  useEffect(() => {}, [isLoadingNoCache]);

  const QueryFunction = async () => {
    setIsLoadingNoCache(true);
    const response = await request(idPlanta);
    setIsLoadingNoCache(false);
    return response;
  };

  const onErro = (e: string) => notificar({ mensagem: String(e), tipo: 'ERRO', tempoEmSeg: 4 });

  const onSucesso = (data: AxiosResponse<GraphQLResponse<Planta>>) => {
    const status = data?.data?.data?.getPlant?.solicitacaoNovoRegistro;
    if (status === 'confirmado') {
      notificar({
        tipo: 'SUCESSO',
        mensagem: 'Sua solicitação de novo registro foi finalizada',
        tempoEmSeg: 10,
      });
      setTimeout(() => queryClient.invalidateQueries(QueryKeys.PLANT), 5000);
    }
  };

  const {
    isLoading,
    data,
    refetch: getPlant,
    error,
  } = useQuery({
    queryFn: QueryFunction,
    queryKey: [QueryKeys.PLANT, idPlanta],
    retry: false,
    refetchInterval: refetchIntervalOn ? 20 * 1000 : null,
    enabled: true,
    onError: (e) => onErro(e as string),
    onSuccess: (data) => onSucesso(data),
  });

  const planta = data?.data?.data?.getPlant;

  return {
    planta,
    erro: error as string,
    isLoading,
    isLoadingNoCache,
    getPlant,
  };
};
