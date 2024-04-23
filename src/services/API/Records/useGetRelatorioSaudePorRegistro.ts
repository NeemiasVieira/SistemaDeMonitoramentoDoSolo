import SMS_API from "../sms-api";
import { useQuery } from "react-query";
import { AxiosPromise } from "axios";
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
  
  interface RelatorioSaudePorRegistroQueryResponse {
    data?: {
      getSaudeByRecordId: RelatorioSaudeQuery;
    };
    errors?: Error[];
  }

const getRelatorioDeSaude = async(idRegistro: string): AxiosPromise<RelatorioSaudePorRegistroQueryResponse> => {

    const token = `Bearer ${localStorage.getItem("token")}`
    const options = { headers: { Authorization: token }}
    const variables = { idRegistro };
    const query = `query GetSaudeByRecordId($idRegistro: String!) {
      getSaudeByRecordId(idRegistro: $idRegistro) { nitrogenio fosforo potassio luz umidade temperatura
            pH estadoGeral ultimaAtualizacao alertas imagem diagnostico }}`;                

    const response = await SMS_API.post<RelatorioSaudePorRegistroQueryResponse>('', {query, variables}, options)

    return response;
}

export const useGetRelatorioSaudePorRegistro = (idPlanta: string) => {

  const { notificar } = useNotificacoes();

    const { isLoading: isLoadingSaude, data: relatorioSaude, refetch: getRelatorioSaude,} = useQuery({
      queryFn: () => getRelatorioDeSaude(idPlanta),
      queryKey: ["relatorioSaudePorRegistro"],
      cacheTime: 10 * 60 * 1000,
      refetchInterval: false,
      staleTime: 10 * 60 * 1000,
      enabled: false,
      onError: (e) => notificar({mensagem: String(e), tipo: "ERRO", tempoEmSeg: 4}),
    });
  
    return {
      relatorioSaude: relatorioSaude?.data?.data?.getSaudeByRecordId ?? null,
      erroRelatorioSaude: relatorioSaude?.data?.errors?.length > 0 ? relatorioSaude.data.errors[0].message : null,
      isLoadingSaude,
      getRelatorioSaude
    };
  };
  