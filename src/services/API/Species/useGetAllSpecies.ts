import { useQuery } from "react-query";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";
import SMS_API, { GraphQLResponse } from "../sms-api";

interface Specie {
  id: string;
  nome: string;
  descricao: string;
  parametros: {
    nitrogenio: { min: string; max: string };
    fosforo: { min: string; max: string };
    potassio: { min: string; max: string };
    luz: { min: string; max: string };
    umidade: { min: string; max: string };
    temperatura: { min: string; max: string };
    pH: { min: string; max: string };
  };
}

interface SpecieQuery {
    getAllSpecies: Specie[];
}

const getAllSpecies = async() => {
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

  return await SMS_API.post<GraphQLResponse<SpecieQuery>>('', {query}, options);
} 

export const useGetAllSpecies = () => {

  const { notificar } = useNotificacoes();

  const { data, isLoading: allSpeciesIsLoading, refetch: refetchAllSpecies, error } = useQuery({
    queryFn: () => getAllSpecies(),
    queryKey: ["getAllSpecies"],
    cacheTime: 10 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
    staleTime: 10 * 60 * 1000,
    retry: false,
    enabled: true,
    onError: (e) => notificar({mensagem: String(e), tipo: "ERRO", tempoEmSeg: 4}),
  })

  const allSpeciesData = data?.data?.data?.getAllSpecies;

  return{
    allSpeciesData,
    allSpeciesError: error as string,
    allSpeciesIsLoading,
    refetchAllSpecies
  }
}