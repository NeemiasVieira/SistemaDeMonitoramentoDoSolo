import SMS_API from "../sms-api";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";

export interface Record{
    id: string;
    idPlanta: string;
    nitrogenio: string;
    fosforo: string;
    potassio: string;
    umidade: string;
    temperatura: string;
    pH: string;
    dataDeRegistro: string ;
    luz: string;
    lux: string;
    nomeEspecie: string;
    nuRegistro: number;
    imagem?: string;
    diagnostico?: string;

  }

interface getAllRecordsPaginated {
  registros: Record[];
  pagina: number;
  totalPaginas: number;
  
}
  
  interface Error {
    message: string;
  }
  
  interface getAllRecordsPaginatedResponse {
    data?: {
      getAllRecordsPaginated: getAllRecordsPaginated;
    };
    errors?: Error[];
  }

  interface allRecordsPaginatedQueryParams{
    idPlanta: string;
    registrosPorPag: number;
    pagina: number;
    dataDeInicioBusca?: string;
    dataDeFimBusca?: string;
  }

    const getAllRecords = async(params?: allRecordsPaginatedQueryParams): Promise<AxiosResponse<getAllRecordsPaginatedResponse>> => {

    const token = `Bearer ${localStorage.getItem("token")}`;

    const query = `query GetAllRecordsPaginated($idPlanta: String!, $registrosPorPag: Float!, $pagina: Float!, $dataDeInicioBusca: DateTime, $dataDeFimBusca: DateTime) { 
      getAllRecordsPaginated(idPlanta: $idPlanta, registrosPorPag: $registrosPorPag, pagina: $pagina, dataDeInicioBusca: $dataDeInicioBusca, dataDeFimBusca: $dataDeFimBusca) 
      { registros { id idPlanta nitrogenio fosforo potassio umidade temperatura pH luz lux dataDeRegistro imagem diagnostico nuRegistro idPlanta nomeEspecie } pagina totalPaginas } }
    `
    
    const options = { headers: { Authorization: token }};
    const variables = {...params};
    
    const response = await SMS_API.post<getAllRecordsPaginatedResponse>('', {query, variables} ,options);
    return response;
}
    

export const useGetAllRecordsPaginated = (params: allRecordsPaginatedQueryParams) => {

  const { notificar } = useNotificacoes();
  let { idPlanta, pagina, registrosPorPag, dataDeInicioBusca, dataDeFimBusca } = params;
  
  if (dataDeInicioBusca === "1970-01-01T00:00:00.000Z") dataDeInicioBusca = null;
  if (dataDeFimBusca === "1970-01-01T00:00:00.000Z") dataDeFimBusca = null;

    const { data: allRecordsPaginated, refetch: getAllRecordsPaginated, isLoading: allRecordsPaginatedIsLoading } = useQuery({
        queryFn: () => getAllRecords(params),
        queryKey: ["allRecordsPaginated", idPlanta, pagina, registrosPorPag, dataDeInicioBusca, dataDeFimBusca],
        cacheTime: 10 * 60 * 1000,
        refetchInterval: false,
        staleTime: 10 * 60 * 1000,
        enabled: false,
        onError: (e) => notificar({mensagem: String(e), tipo: "ERRO", tempoEmSeg: 4}),
        });

    return {
        allRecordsPaginated: allRecordsPaginated?.data?.data?.getAllRecordsPaginated ?? null,
        errorAllRecords: allRecordsPaginated?.data?.errors?.length > 0 ? allRecordsPaginated.data.errors[0].message : null,
        getAllRecordsPaginated,
        allRecordsPaginatedIsLoading
    };
};