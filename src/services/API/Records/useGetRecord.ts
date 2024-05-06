import SMS_API from "../sms-api";
import { AxiosPromise } from "axios";
import { useQuery } from "react-query";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";

interface RecordQuery {
    id: string,
    nitrogenio: string,
    fosforo: string,
    potassio: string,
    umidade: string,
    temperatura: string,
    pH: string,
    dataDeRegistro: string 
    luz: string
    imagem?: string;
    diagnostico?: string;
  }
  
  interface Error {
    message: string;
  }
  
  interface RecordResponse {
    data?: {
        getRecord: RecordQuery;
    };
    errors?: Error[];
  }


const fetcher = async(idRegistro: string): AxiosPromise<RecordResponse> => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const options = { headers: {  Authorization: token, }};
    const variables = { idRecord: idRegistro }
    const query = `query GetRecord($idRecord: String!) {
      getRecord(idRecord: $idRecord) { nitrogenio fosforo potassio umidade temperatura pH dataDeRegistro luz imagem diagnostico }}`; 

    const response = await SMS_API.post<RecordResponse>('', {query, variables}, options);

    return response;
} 

export const useGetRecord = (idRegistro: string) => {

  const { notificar } = useNotificacoes();
    
    const { data, refetch: getRecord, isLoading: recordIsLoading } = useQuery({
        queryFn: () => fetcher(idRegistro),
        queryKey: ["getRecord", idRegistro],
        cacheTime: 10 * 60 * 1000,
        refetchInterval: 10 * 60 * 1000,
        staleTime: 10 * 60 * 1000,
        onError: (e) => notificar({mensagem: String(e), tipo: "ERRO", tempoEmSeg: 4}),
      });

    return {
        record: data?.data?.data?.getRecord ?? null,
        errorLastRecord: data?.data?.errors?.length > 0 ? data.data.errors[0].message : null,
        recordIsLoading,
        getRecord
    }
    
}