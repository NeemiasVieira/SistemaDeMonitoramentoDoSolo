import { useQuery } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import SMS_API, { GraphQLResponse } from '../sms-api';
import { QueryKeys } from '../types';

interface Saude {
  getSaudeByRecordId: {
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

const request = async (idRegistro: string) => {
  const token = `Bearer ${localStorage.getItem('token')}`;
  const options = { headers: { Authorization: token } };
  const variables = { idRegistro };
  const query = `query GetSaudeByRecordId($idRegistro: String!) {
      getSaudeByRecordId(idRegistro: $idRegistro) { nitrogenio fosforo potassio luz umidade temperatura
            pH estadoGeral ultimaAtualizacao alertas imagem diagnostico }}`;

  return await SMS_API.post<GraphQLResponse<Saude>>('', { query, variables }, options);
};

export const useGetRelatorioSaudePorRegistro = (idPlanta: string) => {
  const { notificar } = useNotificacoes();

  const {
    isLoading: isLoadingSaude,
    data,
    refetch: getRelatorioSaude,
    error,
  } = useQuery({
    queryFn: () => request(idPlanta),
    queryKey: [QueryKeys.RELATORIO_SAUDE_POR_REGISTRO, idPlanta],
    cacheTime: 10 * 60 * 1000,
    refetchInterval: false,
    staleTime: 10 * 60 * 1000,
    enabled: false,
    retry: false,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO' }),
  });

  const relatorioSaude = data?.data?.data?.getSaudeByRecordId;

  return {
    relatorioSaude,
    erroRelatorioSaude: error as string,
    isLoadingSaude,
    getRelatorioSaude,
  };
};
