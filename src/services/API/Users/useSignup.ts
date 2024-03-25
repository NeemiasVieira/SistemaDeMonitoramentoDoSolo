import { AxiosResponse } from "axios";
import SMS_API from "../sms-api";
import { useQuery } from "react-query";

interface Error {
    message: string;
}

interface useSignUpProps{
    email: string,
    nome: string,
    senha: string,
}
  
interface userLoginQueryResponse {
    data?: {
        createUser: createUserResponse;
    };
    errors?: Error[];
}

interface createUserResponse {
  id: string;
}

const cadastrarNovoUsuario = async(nome: string, email: string, senha: string): Promise<AxiosResponse<userLoginQueryResponse>> => {
  
    const Query = `mutation CreateUser($email: String!, $nome: String!, $senha: String!) {
        createUser(email: $email, nome: $nome, senha: $senha) { id } }`
        
    const options = { query: Query, variables: { email, nome, senha } };
    
    const response = await SMS_API.post<userLoginQueryResponse>("", options);

    return response;
  }

  export const useSignUp = (params: useSignUpProps) => {
    const { nome, email, senha } = params;

    const { isLoading, data: signupResponse, refetch} = useQuery({
        queryKey: ["signup"],
        queryFn: () => cadastrarNovoUsuario(nome, email, senha),
        retry: false,
        staleTime: 0,
        cacheTime: 0,
        enabled: false,
      })

      return {
        signupResponse: signupResponse?.data?.data?.createUser ?? null,
        error: signupResponse?.data?.errors?.length > 0 ? signupResponse.data.errors[0].message : null,
        refetch,
        isLoading
      }

  }