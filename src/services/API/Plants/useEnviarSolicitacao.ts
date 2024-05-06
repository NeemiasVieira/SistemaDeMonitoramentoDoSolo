import { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";
import SMS_API from "../sms-api";

interface Error {
  message: string;
}

interface EnviarSolicitacaoResponse {
  data: {
    updateSolicitacaoRegistro: "nenhuma" | "aguardando" | "confirmado";
  };
  errors: Error[];
}

const fetcher = async (idPlanta: string): AxiosPromise<EnviarSolicitacaoResponse> => {
  const token = `Bearer ${localStorage.getItem("token")}`;
  const variables = { idPlanta, aguardando: true };
  const query = `mutation Mutation($idPlanta: String!, $aguardando: Boolean) {
    updateSolicitacaoRegistro(idPlanta: $idPlanta, aguardando: $aguardando) {
      solicitacaoNovoRegistro
    }
  }`;

  const options = { headers: { Authorization: token } };

  const response = await SMS_API.post<EnviarSolicitacaoResponse>("", { query, variables }, options);
  return response;
};

export const useEnviarSolicitacao = (idPlanta: string) => {
  const { notificar } = useNotificacoes();
  const queryClient = useQueryClient();

  const { mutate: enviarSolicitacao, isLoading, data } = useMutation({
    mutationFn: () => fetcher(idPlanta),
    onError: (e) => notificar({ mensagem: String(e), tipo: "ERRO", tempoEmSeg: 4 }),
    onSuccess: () => {
      queryClient.invalidateQueries("planta");
      notificar({ tipo: "SUCESSO", mensagem: "Solicitação enviada com sucesso!", tempoEmSeg: 4 });
    },
    retry: false,
  });

  return {
    respostaEnvio: data?.data?.data?.updateSolicitacaoRegistro ? data.data.data.updateSolicitacaoRegistro : null,
    erro: data?.data?.errors?.length > 0 ? data.data.errors[0].message : null,
    isLoading,
    enviarSolicitacao,
  };
};
