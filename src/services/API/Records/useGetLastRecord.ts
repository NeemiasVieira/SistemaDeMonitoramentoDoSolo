import { AxiosResponse } from "axios";
import SMS_API from "../sms-api";
import { useQuery } from "react-query";

interface LastRecordQuery {
    id: string,
    idPlanta: string,
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
  
  interface LastRecordResponse {
    data?: {
        getLastRecordByPlant: LastRecordQuery;
    };
    errors?: Error[];
  }


const getUltimoRegistro = async(idPlanta: string): Promise<AxiosResponse<LastRecordResponse>> => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const options = { headers: {  Authorization: token, }};
    const variables = { idPlanta }
    const query = `query GetLastRecordByPlant($idPlanta: String!) {
        getLastRecordByPlant(idPlanta: $idPlanta) { nitrogenio fosforo potassio umidade temperatura pH dataDeRegistro luz}}`; 

    const response = await SMS_API.post<LastRecordResponse>('', {query, variables}, options);

    return response;
} 

export const useGetLastRecord = (idPlanta: string) => {
    
    const { data: lastRecord, refetch: refetchLastRecord, isLoading: lastRecordIsLoading } = useQuery({
        queryFn: () => getUltimoRegistro(idPlanta),
        queryKey: ["getLastRecord", idPlanta],
        cacheTime: 10 * 60 * 1000,
        refetchInterval: 10 * 60 * 1000,
        staleTime: 10 * 60 * 1000,
        enabled: false,
      });

    return {
        lastRecord: lastRecord?.data?.data?.getLastRecordByPlant ?? null,
        errorLastRecord: lastRecord?.data?.errors?.length > 0 ? lastRecord.data.errors[0].message : null,
        lastRecordIsLoading,
        refetchLastRecord
    }
    
}