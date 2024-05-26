import SMS_API, { GraphQLResponse } from "../sms-api";
import { useQuery } from "react-query";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";

interface Plantas {
  getPlantasByDonoId: { id: string; nome: string; especie: string; dataDaPlantacao: string }[];
}

const request = async () => {
  const token = `Bearer ${localStorage.getItem("token")}`;
  const query = `query GetPlantasByDonoId { getPlantasByDonoId { id nome especie dataDaPlantacao } }`;
  const options = { headers: { Authorization: token } };
  return await SMS_API.post<GraphQLResponse<Plantas>>("", { query }, options);
};

export const useGetAllPlants = () => {
  const { notificar } = useNotificacoes();

  const { isLoading, data, refetch, error } = useQuery({
    queryFn: () => request(),
    queryKey: ["plantsByOwner"],
    cacheTime: 30 * 60 * 1000,
    refetchInterval: false,
    staleTime: 30 * 60 * 1000,
    onError: (e) => notificar({ mensagem: String(e), tipo: "ERRO", tempoEmSeg: 4 }),
    retry: false,
  });

  const plantas = data?.data?.data?.getPlantasByDonoId ?? [];

  return {
    plantas,
    erro: error as string,
    isLoading,
    refetch,
  };
};
