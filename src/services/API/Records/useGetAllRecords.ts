import SMS_API from "../sms-api";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";

export interface RecordQuery {
    nitrogenio: string,
    fosforo: string,
    potassio: string,
    umidade: string,
    temperatura: string,
    pH: string,
    dataDeRegistro: string 
    luz: string
  }
  
  interface Error {
    message: string;
  }
  
  interface getAllRecordsResponse {
    data?: {
        getAllRecordsByPlant: RecordQuery[];
    };
    errors?: Error[];
  }

  interface allRecordsQueryParams{
    idPlanta: string;
    intervaloDeDias?: number | string;
    intervaloDeBusca?: number | string;
  }

    const getAllRecords = async(params?: allRecordsQueryParams): Promise<AxiosResponse<getAllRecordsResponse>> => {

    let { idPlanta, intervaloDeBusca, intervaloDeDias } = params;

    const token = `Bearer ${localStorage.getItem("token")}`;

    intervaloDeBusca = intervaloDeBusca === "Selecione" ? null : Number(intervaloDeBusca);
    intervaloDeDias = intervaloDeDias === "Selecione" ? null : Number(intervaloDeDias);

    const query = `query GetAllRecordsByPlant($idPlanta: String!, $intervaloDeDias: Float, $intervaloDeBusca: Float ) {
        getAllRecordsByPlant( idPlanta: $idPlanta, intervaloDeDias: $intervaloDeDias, intervaloDeBusca: $intervaloDeBusca )   
        { nitrogenio fosforo potassio umidade temperatura pH dataDeRegistro luz } }`
    
    const options = { headers: { Authorization: token }};
    const variables = {idPlanta, intervaloDeDias, intervaloDeBusca};
    
    const response = await SMS_API.post<getAllRecordsResponse>('', {query, variables},options);
    return response;
}
    

export const useGetAllRecords = (params?: allRecordsQueryParams) => {

    const { idPlanta, intervaloDeBusca, intervaloDeDias } = params;
    const { notificar } = useNotificacoes();
   

    const { data: allRecords, refetch: refetchAllRecords, isLoading: allRecordsIsLoading } = useQuery({
        queryFn: () => getAllRecords({idPlanta, intervaloDeBusca, intervaloDeDias}),
        queryKey: ["allRecords", idPlanta, intervaloDeBusca, intervaloDeDias],
        cacheTime: 10 * 60 * 1000,
        refetchInterval: false,
        staleTime: 10 * 60 * 1000,
        enabled: false,
        onError: (e) => notificar({mensagem: String(e), tipo: "ERRO", tempoEmSeg: 4}),
        });

    return {
        allRecords: allRecords?.data?.data?.getAllRecordsByPlant ?? null,
        errorAllRecords: allRecords?.data?.errors?.length > 0 ? allRecords.data.errors[0].message : null,
        refetchAllRecords,
        allRecordsIsLoading
    };
};