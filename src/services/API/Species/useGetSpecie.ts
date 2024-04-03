import { AxiosPromise } from "axios";
import { useQuery } from "react-query";
import SMS_API from "../sms-api";

interface Error {
  message: string;
}

interface Parametro{
  min: string;
  max: string;
}

interface Parametros{
  nitrogenio: Parametro;
  fosforo: Parametro;
  potassio: Parametro;
  luz: Parametro;
  umidade: Parametro;
  temperatura: Parametro;
  pH: Parametro;
}

interface Specie{
  id: string;
  nome: string;
  descricao: string;
  parametros: Parametros;
}

interface SpecieResponse {
  data?: {
    getSpecie: Specie;
  };
  errors?: Error[];
}

interface getSpecieParams{
  id?: string;
  nome?: string
}


const getSpecieRequest = async(args: getSpecieParams): AxiosPromise<SpecieResponse> => {

  const { id, nome } = args;
  if(!id && !nome) return;

  const token = `Bearer ${localStorage.getItem("token")}`;
  const options = { headers: {  Authorization: token, }};
  const variables = { id, nome };
  const query = `query GetSpecie($nome: String, $id: String) {
    getSpecie(nome: $nome, id: $id) { 
        id 
        nome 
        descricao 
        parametros { 
            nitrogenio { min max } 
            fosforo { min max }
            potassio { min max }
            luz { min max }
            umidade { min max }
            temperatura { min max }
            pH { min max }
        }
    }
}`;

  const response = await SMS_API.post<SpecieResponse>('', {query, variables}, options);

  return response;
} 

export const useGetSpecie = (args: getSpecieParams) => {

  const { data: specieData, isLoading: specieIsLoading, refetch: getSpecie } = useQuery({
    queryFn: () => getSpecieRequest(args),
    queryKey: ["getSpecie"],
    cacheTime: 10 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
    staleTime: 10 * 60 * 1000,
    retry: false,
    enabled: false,
  })

  return{
    specieData: specieData?.data?.data?.getSpecie ?? null,
    specieError: specieData?.data?.errors?.length > 0 ? specieData.data.errors[0].message : null,
    specieIsLoading,
    getSpecie
  }

}


