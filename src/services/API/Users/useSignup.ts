import SMS_API, { GraphQLResponse } from '../sms-api';
import { useMutation } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import { MutationKeys } from '../types';

interface useSignUpProps {
  email: string;
  nome: string;
  senha: string;
}

interface createUser {
  createUser: {
    id: string;
  };
}

const cadastrarNovoUsuario = async (nome: string, email: string, senha: string) => {
  const query = `mutation CreateUser($email: String!, $nome: String!, $senha: String!) {
        createUser(email: $email, nome: $nome, senha: $senha) { id } }`;
  const options = { query, variables: { email, nome, senha } };

  return await SMS_API.post<GraphQLResponse<createUser>>('', options);
};

export const useSignUp = (params: useSignUpProps) => {
  const { nome, email, senha } = params;
  const { notificar } = useNotificacoes();

  const {
    isLoading,
    data,
    mutate: confirmCreateUser,
    error,
  } = useMutation({
    mutationKey: [MutationKeys.SIGNUP],
    mutationFn: () => cadastrarNovoUsuario(nome, email, senha),
    retry: false,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO' }),
  });

  const signupResponse = data?.data?.data?.createUser;

  return {
    signupResponse,
    error: error as string,
    confirmCreateUser,
    isLoading,
  };
};
