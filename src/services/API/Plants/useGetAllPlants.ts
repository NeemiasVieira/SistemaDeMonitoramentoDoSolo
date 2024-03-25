import { AxiosResponse } from "axios";
import SMS_API from "../sms-api";
import { useQuery } from "react-query";

interface PlantaQuery {
  id: string;
  nome: string;
  especie: string;
  dataDaPlantacao: string;
}

interface Error {
  message: string;
}

interface PlantaQueryResponse {
  data: {
    getPlantasByDonoId: PlantaQuery[];
  };
  errors: Error[];
}

const fetcher = async (): Promise<AxiosResponse<PlantaQueryResponse>> => {
  const token = `Bearer ${localStorage.getItem("token")}`;
  const query = `query GetPlantasByDonoId {        
      getPlantasByDonoId { id nome especie dataDaPlantacao }
    }`;

  const options = { headers: { Authorization: token } };

  const response = await SMS_API.post<PlantaQueryResponse>("", { query }, options);
  return response;
};

export const useGetAllPlants = () => {
  const { isLoading, data: plantas, refetch,} = useQuery({
    queryFn: () => fetcher(),
    queryKey: ["plantsByOwner"],
    cacheTime: 30 * 60 * 1000,
    refetchInterval: false,
    staleTime: 30 * 60 * 1000,
  });

  return {
    plantas: plantas?.data?.data?.getPlantasByDonoId?.length > 0 ? plantas.data.data.getPlantasByDonoId : null,
    erro: plantas?.data?.errors?.length > 0 ? plantas.data.errors[0].message : null,
    isLoading,
    refetch,
  };
};
