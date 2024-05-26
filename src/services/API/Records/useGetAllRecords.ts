import { useQuery } from "react-query";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";
import SMS_API, { GraphQLResponse } from "../sms-api";

interface getAllRecords {
  getAllRecordsByPlant: {
    nitrogenio: string;
    fosforo: string;
    potassio: string;
    umidade: string;
    temperatura: string;
    pH: string;
    dataDeRegistro: string;
    luz: string;
    lux: string;
    idPlanta: string;
    nomeEspecie: string;
  }[];
}

interface allRecordsQueryParams {
  idPlanta: string;
  intervaloDeDias?: number | string;
  intervaloDeBusca?: number | string;
}

const request = async (params?: allRecordsQueryParams) => {
  let { idPlanta, intervaloDeBusca, intervaloDeDias } = params;

  const token = `Bearer ${localStorage.getItem("token")}`;

  intervaloDeBusca = intervaloDeBusca === "Selecione" ? null : Number(intervaloDeBusca);
  intervaloDeDias = intervaloDeDias === "Selecione" ? null : Number(intervaloDeDias);

  const query = `query GetAllRecordsByPlant($idPlanta: String!, $intervaloDeDias: Float, $intervaloDeBusca: Float ) {
        getAllRecordsByPlant( idPlanta: $idPlanta, intervaloDeDias: $intervaloDeDias, intervaloDeBusca: $intervaloDeBusca )   
        { nitrogenio fosforo potassio umidade temperatura pH dataDeRegistro luz lux idPlanta nomeEspecie } }`;

  const options = { headers: { Authorization: token } };
  const variables = { idPlanta, intervaloDeDias, intervaloDeBusca };

  return await SMS_API.post<GraphQLResponse<getAllRecords>>("", { query, variables }, options);
};

  export const useGetAllRecords = (params: allRecordsQueryParams) => {

  const { notificar } = useNotificacoes();
  const { idPlanta, intervaloDeBusca, intervaloDeDias } = params;

  const { data, refetch: getAllRecords, isLoading: allRecordsIsLoading, error } = useQuery({
    queryFn: () => request({ idPlanta, intervaloDeBusca, intervaloDeDias }),
    queryKey: ["allRecords", idPlanta, intervaloDeBusca, intervaloDeDias],
    cacheTime: 10 * 60 * 1000,
    refetchInterval: false,
    staleTime: 10 * 60 * 1000,
    retry: false,
    onError: (e) => notificar({ mensagem: String(e), tipo: "ERRO", tempoEmSeg: 4 }),
  });

  const allRecords = data?.data?.data?.getAllRecordsByPlant;

  return {
    allRecords,
    errorAllRecords: error as string,
    getAllRecords,
    allRecordsIsLoading,
  };
};
