import SMS_API from "../sms-api";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
  
interface Error {
    message: string;
}
  
interface userLoginQueryResponse {
    data?: {
        loginUser: userLoginResponse;
    };
    errors?: Error[];
}

interface userLoginResponse {
  usuario: {
    id: string;
    nome: string;
  };
  token: string;
}

const login = async (email: string, senha: string): Promise<AxiosResponse<userLoginQueryResponse, any>> => {
  const mutation = `mutation LoginUser($email: String!, $senha: String!) {
    loginUser(email: $email, senha: $senha) { usuario { nome id } token }   }`;

  const variables = { email, senha };

  const response = await SMS_API.post<userLoginQueryResponse>("", { query: mutation, variables });

  return response;

};

export const useLogin = (email: string, senha: string) => {

  const { isLoading, data: loginResponse, refetch} = useQuery({
    queryKey: ["login", email, senha],
    queryFn: () => login(email, senha),
    retry: false,
    staleTime: 10 * 1000,
    cacheTime: 10 * 1000,
    enabled: false,
  })
  

  return {
    loginResponse: loginResponse?.data?.data?.loginUser ?? null,
    error: loginResponse?.data?.errors?.length > 0 ? loginResponse?.data?.errors[0]?.message : null,
    refetch,
    isLoading
  }
};
