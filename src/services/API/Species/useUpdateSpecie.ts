import { AxiosPromise } from "axios";
import SMS_API from "../sms-api";
import { useQuery, useQueryClient } from "react-query";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";
import { useEffect, useState } from "react";

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

interface updateSpecieResponse {
  data?: {
    updateSpecie: Specie;
  };
  errors?: Error[];
}

const updateSpecie = async(args: {id: string, nome: string, descricao: string, parametros: Parametros}): AxiosPromise<updateSpecieResponse> => {
  const { id, nome, descricao, parametros } = args;

  const token = `Bearer ${localStorage.getItem("token")}`;
  const options = { headers: {  Authorization: token, }};
  const variables = { id, nome, descricao, parametros };

  const mutation = `mutation UpdateSpecie($id: String!, $nome: String, $descricao: String, $parametros: UParametros) {
    updateSpecie(id: $id, nome: $nome, descricao: $descricao, parametros: $parametros) {
      id nome 
    }
  }`

  const response = await SMS_API.post<updateSpecieResponse>('', {query: mutation, variables},options);

  return response;

}

export const useUpdateSpecie = (args: {id: string, nome: string, descricao: string, parametros: Parametros}) => {
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { notificar } = useNotificacoes();

  const { data: updateSpecieData, isLoading: updateSpecieIsLoading, refetch: confirmUpdateSpecie } = useQuery({
    queryFn: () => updateSpecie(args),
    onSuccess: () => {
      queryClient.invalidateQueries('getAllSpecies');
      queryClient.invalidateQueries("getSpecie");
      notificar({
          tipo: "SUCESSO",
          mensagem: "Espécie atualizada com sucesso",
          tempoEmSeg: 4,
        });
    },
    queryKey: ["updateSpecie"],
    retry: false,
    enabled: false,
    onError: (e) => notificar({mensagem: String(e), tipo: "ERRO", tempoEmSeg: 4}),
  });

  useEffect(() => {
    const handleConfirmUpdateSpecie = async () => {
      setIsSubmitting(true);
      try {
        await confirmUpdateSpecie();
      } 
       finally {
        setIsSubmitting(false);
      }
    };

    if (isSubmitting) {
      handleConfirmUpdateSpecie();
    }
  }, [isSubmitting, confirmUpdateSpecie]);

  return {
    updateSpecieData: updateSpecieData?.data?.data?.updateSpecie ?? null,
    updateSpecieError: updateSpecieData?.data?.errors?.length > 0 ? updateSpecieData?.data?.errors[0]?.message : null,
    updateSpecieIsLoading: updateSpecieIsLoading || isSubmitting,
    confirmUpdateSpecie: () => setIsSubmitting(true)
  };
};
