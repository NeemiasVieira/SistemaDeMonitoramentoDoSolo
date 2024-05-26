import { useMutation, useQueryClient } from "react-query";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";
import SMS_API, { GraphQLResponse } from "../sms-api";

interface Specie {
  id: string;
  nome: string;
  descricao: string;
  parametros?: {
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
  createSpecie: Specie;
}

const request = async (args: Specie) => {
  const { nome, descricao, parametros } = args;

  const token = `Bearer ${localStorage.getItem("token")}`;
  const options = { headers: { Authorization: token } };
  const variables = { nome, descricao, parametros };

  const query = `mutation CreateSpecie($nome: String!, $descricao: String!, $parametros: IParametros!) {
    createSpecie( nome: $nome, descricao: $descricao, parametros: $parametros ) { id nome descricao }
  }`;

  return await SMS_API.post<GraphQLResponse<SpecieQuery>>("", { query, variables }, options);
};

export const useCreateSpecie = (args: Specie) => {

  const queryClient = useQueryClient();
  const { notificar } = useNotificacoes();

  const onSucesso = () => {
    queryClient.invalidateQueries("getAllSpecies");
    queryClient.invalidateQueries("getSpecie");
    notificar({ tipo: "SUCESSO", mensagem: "Espécie criada com sucesso", tempoEmSeg: 4 });
  };

  const { data, error, isLoading: createSpecieIsLoading, mutate: confirmCreateSpecie } = useMutation({
    mutationFn: () => request(args),
    mutationKey: ["createSpecie"],
    onSuccess: onSucesso,
    retry: false,
    onError: (e) => notificar({ mensagem: String(e), tipo: "ERRO", tempoEmSeg: 4 }),
  });

  const newSpecie = data?.data?.data?.createSpecie;

  return {
    newSpecie,
    createSpecieError: error as string,
    createSpecieIsLoading,
    confirmCreateSpecie
  }
};
