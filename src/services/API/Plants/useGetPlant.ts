import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";
import { useEffect, useState } from "react";
import SMS_API from "../sms-api";

interface PlantaQuery {
  id: string;
  idDono: string;
  nome: string;
  especie: string;
  dataDaPlantacao: string;
  solicitacaoNovoRegistro: "nenhuma" | "aguardando" | "confirmado"
}

interface Error {
  message: string;
}

interface PlantaQueryResponse {
  data: {
    getPlant: PlantaQuery;
  };
  errors: Error[];
}

const fetcher = async (idPlanta: string): Promise<AxiosResponse<PlantaQueryResponse>> => {
  const token = `Bearer ${localStorage.getItem("token")}`;
  const variables = { idPlanta };
  const query = `query GetPlant($idPlanta: String!) {        
    getPlant(idPlanta: $idPlanta) { id idDono nome especie dataDaPlantacao solicitacaoNovoRegistro }
    }`;

  const options = { headers: { Authorization: token } };

  const response = await SMS_API.post<PlantaQueryResponse>("", { query, variables }, options);
  return response;
};

export const useGetPlant = (idPlanta: string) => {
  const { notificar } = useNotificacoes();
  const [ isLoadingNoCache, setIsLoadingNoCache ] = useState<boolean>(false);

  useEffect(() => {},[isLoadingNoCache]);

  const { isLoading, data, refetch: getPlant,} = useQuery({
    queryFn: async() => {
      setIsLoadingNoCache(true);
      const response = await fetcher(idPlanta)
      setIsLoadingNoCache(false);
      return response;
    },
    queryKey: ["planta", idPlanta],
    cacheTime: 30 * 60 * 1000,
    refetchInterval: false,
    staleTime: 30 * 60 * 1000,
    retry: false,
    onError: (e) => notificar({mensagem: String(e), tipo: "ERRO", tempoEmSeg: 4}),
    onSuccess: (data) => {
      if(data?.data?.data?.getPlant?.solicitacaoNovoRegistro === "confirmado"){
        notificar({tipo: "SUCESSO", mensagem: "Sua solicitação de novo registro foi finalizada", tempoEmSeg: 7});
      }
    }
  });

  return {
    planta: data?.data?.data?.getPlant ? data.data.data.getPlant : null,
    erro: data?.data?.errors?.length > 0 ? data.data.errors[0].message : null,
    isLoading,
    isLoadingNoCache,
    getPlant,
  };
};
