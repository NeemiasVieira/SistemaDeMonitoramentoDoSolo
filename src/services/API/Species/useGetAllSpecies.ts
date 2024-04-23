import { AxiosPromise } from "axios";
import SMS_API from "../sms-api";
import { useQuery } from "react-query";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";

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

interface AllSpeciesResponse {
  data?: {
    getAllSpecies: Specie[];
  };
  errors?: Error[];
}


const getAllSpecies = async(): AxiosPromise<AllSpeciesResponse> => {
  const token = `Bearer ${localStorage.getItem("token")}`;
  const options = { headers: {  Authorization: token, }};
  const query = `query GetAllSpecies {
    getAllSpecies { 
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


  const response = await SMS_API.post<AllSpeciesResponse>('', {query}, options);

  return response;
} 

export const useGetAllSpecies = () => {

  const { notificar } = useNotificacoes();

  const { data: allSpeciesData, isLoading: allSpeciesIsLoading, refetch: refetchAllSpecies } = useQuery({
    queryFn: () => getAllSpecies(),
    queryKey: ["getAllSpecies"],
    cacheTime: 10 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
    staleTime: 10 * 60 * 1000,
    retry: false,
    enabled: true,
    onError: (e) => notificar({mensagem: String(e), tipo: "ERRO", tempoEmSeg: 4}),
  })

  return{
    allSpeciesData: allSpeciesData?.data?.data?.getAllSpecies ?? null,
    allSpeciesError: allSpeciesData?.data?.errors?.length > 0 ? allSpeciesData.data.errors[0].message : null,
    allSpeciesIsLoading,
    refetchAllSpecies
  }

}


