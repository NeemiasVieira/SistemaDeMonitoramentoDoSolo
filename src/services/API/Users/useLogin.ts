import SMS_API, { GraphQLResponse } from "../sms-api";
import { useMutation } from "react-query";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";

interface userLogin {
  loginUser: {
    usuario: {
      id: string;
      nome: string;
      profile: string;
    };
    token: string;
  };
}

const request = async (email: string, senha: string) => {
  const query = `mutation LoginUser($email: String!, $senha: String!) {
    loginUser(email: $email, senha: $senha) { usuario { nome id profile } token }   }`;

  const variables = { email, senha };

  return await SMS_API.post<GraphQLResponse<userLogin>>("", { query, variables });
};

export const useLogin = (email: string, senha: string) => {

  const { notificar } = useNotificacoes();

  const { isLoading, data, mutate: confirmLogin, error} = useMutation({
    mutationKey: ["login", email, senha],
    mutationFn: () => request(email, senha),
    retry: false,
    onError: (e) => notificar({mensagem: String(e), tipo: "ERRO", tempoEmSeg: 4}),
  })

  const loginResponse = data?.data?.data?.loginUser;

  return {
    loginResponse,
    error: error as string,
    confirmLogin,
    isLoading
  }
};
