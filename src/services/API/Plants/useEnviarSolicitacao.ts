import { useMutation, useQueryClient } from "react-query";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";
import { GraphQLResponse } from "../sms-api";
import SMS_API from "../sms-api";

interface updateSolicitacaoRegistro {
    updateSolicitacaoRegistro: "nenhuma" | "aguardando" | "confirmado";
}

const request = async (idPlanta: string) => {
  const token = `Bearer ${localStorage.getItem("token")}`;
  const variables = { idPlanta, aguardando: true };
  const query = `mutation enviarSolicitacaoRegistro($idPlanta: String!, $aguardando: Boolean) {
    updateSolicitacaoRegistro(idPlanta: $idPlanta, aguardando: $aguardando) {
      solicitacaoNovoRegistro
    }
  }`;

  const options = { headers: { Authorization: token } };

  return await SMS_API.post<GraphQLResponse<updateSolicitacaoRegistro>>("", { query, variables }, options);
};

export const useEnviarSolicitacao = (idPlanta: string) => {

  const { notificar } = useNotificacoes();
  const queryClient = useQueryClient();

  const onSucesso = () => {
    queryClient.invalidateQueries("planta");
    notificar({ tipo: "SUCESSO", mensagem: "Solicitação enviada com sucesso!", tempoEmSeg: 4 });
  }

  const onErro = (e: string) => notificar({ mensagem: String(e), tipo: "ERRO", tempoEmSeg: 4 });

  const { mutate: enviarSolicitacao, isLoading, data, error } = useMutation({
    mutationFn: () => request(idPlanta),
    onError: (e) => onErro(String(e)),
    onSuccess: onSucesso,
    retry: false,
  });

  const response = data?.data?.data?.updateSolicitacaoRegistro;

  return {
    respostaEnvio: response,
    erro: error as string,
    isLoading,
    enviarSolicitacao,
  };
};
