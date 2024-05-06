import { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";
import SMS_API from "../sms-api";

interface Error {
  message: string;
}

interface CancelarSolicitacaoResponse {
  data: {
    updateSolicitacaoRegistro: "nenhuma" | "aguardando" | "confirmado";
  };
  errors: Error[];
}

const fetcher = async (idPlanta: string): AxiosPromise<CancelarSolicitacaoResponse> => {
  const token = `Bearer ${localStorage.getItem("token")}`;
  const variables = { idPlanta, nenhuma: true };
  const query = `mutation Mutation($idPlanta: String!, $nenhuma: Boolean) {
    updateSolicitacaoRegistro(idPlanta: $idPlanta, nenhuma: $nenhuma) {
      solicitacaoNovoRegistro
    }
  }`;

  const options = { headers: { Authorization: token } };

  const response = await SMS_API.post<CancelarSolicitacaoResponse>("", { query, variables }, options);
  return response;
};

export const useCancelarSolicitacao = (idPlanta: string) => {
  const { notificar } = useNotificacoes();
  const queryClient = useQueryClient();

  const { mutate: cancelarSolicitacao, isLoading, data } = useMutation({
    mutationFn: () => fetcher(idPlanta),
    onError: (e) => notificar({ mensagem: String(e), tipo: "ERRO", tempoEmSeg: 4 }),
    onSuccess: () => {
      queryClient.invalidateQueries("planta");
      notificar({ tipo: "SUCESSO", mensagem: "Solicitação cancelada com sucesso!", tempoEmSeg: 4 });
    },
    retry: false
  });

  return {
    respostaCancelamento: data?.data?.data?.updateSolicitacaoRegistro ? data.data.data.updateSolicitacaoRegistro : null,
    erro: data?.data?.errors?.length > 0 ? data.data.errors[0].message : null,
    isLoading,
    cancelarSolicitacao,
  };
};
