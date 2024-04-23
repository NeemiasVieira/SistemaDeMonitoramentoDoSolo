import SMS_API from "../sms-api";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";

interface RelatorioSaudeQuery {
   nitrogenio: string;
   fosforo: string;
   potassio: string;
   umidade: string;
   temperatura: string;
   pH: string;
   luz: string
   estadoGeral: string;
   ultimaAtualizacao: string;
   alertas: string[];
   imagem?: string;
   diagnostico?: string;
  }
  
  interface Error {
    message: string;
  }
  
  interface RelatorioSaudeQueryResponse {
    data?: {
        getSaudeByPlantId: RelatorioSaudeQuery;
    };
    errors?: Error[];
  }

const getRelatorioDeSaude = async(idPlanta: string): Promise<AxiosResponse<RelatorioSaudeQueryResponse>> => {

    const token = `Bearer ${localStorage.getItem("token")}`
    const options = { headers: { Authorization: token }}
    const variables = { idPlanta };
    const query = `query GetSaudeByPlantId($idPlanta: String!) {
        getSaudeByPlantId(idPlanta: $idPlanta) { nitrogenio fosforo potassio luz umidade temperatura
            pH estadoGeral ultimaAtualizacao alertas }}`;                

    const response = await SMS_API.post<RelatorioSaudeQueryResponse>('', {query, variables}, options)

    return response;
}

export const useGetRelatorioSaude = (idPlanta: string) => {

    const { notificar } = useNotificacoes();

    const { isLoading: isLoadingSaude, data: relatorioSaude, refetch: refetchRelatorioSaude,} = useQuery({
      queryFn: () => getRelatorioDeSaude(idPlanta),
      queryKey: ["relatorioSaude"],
      cacheTime: 10 * 60 * 1000,
      refetchInterval: false,
      staleTime: 10 * 60 * 1000,
      enabled: false,
      onError: (e) => notificar({mensagem: String(e), tipo: "ERRO", tempoEmSeg: 4}),
    });
  
    return {
      relatorioSaude: relatorioSaude?.data?.data?.getSaudeByPlantId ?? null,
      erroRelatorioSaude: relatorioSaude?.data?.errors?.length > 0 ? relatorioSaude.data.errors[0].message : null,
      isLoadingSaude,
      refetchRelatorioSaude
    };
  };
  