import SMS_API, { GraphQLResponse } from '../sms-api';
import { useMutation } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useApplication } from '../../../contexts/ApplicationContext';
import { MutationKeys } from '../types';

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

  return await SMS_API.post<GraphQLResponse<userLogin>>('', { query, variables });
};

export const useLogin = (email: string, senha: string) => {
  const navigate = useNavigate();
  const { notificar } = useNotificacoes();
  const { setAuth, setIsAdmin } = useApplication();

  const onSucesso = (data: AxiosResponse<GraphQLResponse<userLogin>>) => {
    const response = data?.data?.data?.loginUser;

    if (response) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('nome', response.usuario.nome);
      localStorage.setItem('profile', response.usuario.profile);

      setIsAdmin(response.usuario.profile === 'admin' ? true : false);
      setAuth(true);

      const redirectToUrl = sessionStorage.getItem('redirectUrl');
      sessionStorage.removeItem('redirectUrl');

      notificar({ tipo: 'SUCESSO', mensagem: `Bem vindo ${response.usuario.nome}`, tempoEmSeg: 4 });
      navigate(redirectToUrl ?? '/painel');
    }
  };

  const {
    isLoading,
    data,
    mutate: confirmLogin,
    error,
  } = useMutation({
    mutationKey: [MutationKeys.LOGIN, email, senha],
    mutationFn: () => request(email, senha),
    onSuccess: (data) => onSucesso(data),
    retry: false,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO', tempoEmSeg: 4 }),
  });

  const loginResponse = data?.data?.data?.loginUser;

  return {
    loginResponse,
    error: error as string,
    confirmLogin,
    isLoading,
  };
};
