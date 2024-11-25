import SMS_API, { GraphQLResponse } from '../sms-api';
import { useQuery } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import { QueryKeys } from '../types';

interface RelatorioSaude {
  getSaudeByPlantId: {
    nitrogenio: string;
    fosforo: string;
    potassio: string;
    umidade: string;
    temperatura: string;
    pH: string;
    luz: string;
    estadoGeral: string;
    ultimaAtualizacao: string;
    alertas: string[];
    imagem?: string;
    diagnostico?: string;
  };
}

const request = async (idPlanta: string) => {
  const token = `Bearer ${localStorage.getItem('token')}`;
  const options = { headers: { Authorization: token } };
  const variables = { idPlanta };
  const query = `query GetSaudeByPlantId($idPlanta: String!) {
        getSaudeByPlantId(idPlanta: $idPlanta) { nitrogenio fosforo potassio luz umidade temperatura
            pH estadoGeral ultimaAtualizacao alertas }}`;

  return await SMS_API.post<GraphQLResponse<RelatorioSaude>>('', { query, variables }, options);
};

export const useGetRelatorioSaude = (idPlanta: string) => {
  const { notificar } = useNotificacoes();

  const {
    isLoading: isLoadingSaude,
    data,
    refetch: getRelatorioSaude,
    error,
  } = useQuery({
    queryFn: () => request(idPlanta),
    queryKey: [QueryKeys.RELATORIO_SAUDE, idPlanta],
    cacheTime: 10 * 60 * 1000,
    refetchInterval: false,
    staleTime: 10 * 60 * 1000,
    retry: false,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO' }),
  });

  const relatorioSaude = data?.data?.data?.getSaudeByPlantId;

  return {
    relatorioSaude,
    erroRelatorioSaude: error,
    isLoadingSaude,
    getRelatorioSaude,
  };
};
