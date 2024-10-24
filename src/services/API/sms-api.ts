import axios from 'axios';

interface GraphQLError {
  message: string;
}

export interface GraphQLResponse<T> {
  data?: T;
  errors?: GraphQLError[];
}

const SMS_API = axios.create({
  // baseURL: 'https://sms.devneemiasvieira.com/api/',
  // baseURL: 'http://localhost:3333/graphql',
  baseURL: 'http://192.168.15.7:3333/graphql',
  timeout: 90000,
});

SMS_API.interceptors.response.use(
  (response) => {
    if (response?.data && response?.data?.errors) return Promise.reject(response?.data?.errors[0]?.message);
    return response;
  },
  (error) => {
    console.error('Erro na requisição:', error);
    const messages = error?.response?.data?.errors;
    const erro = messages?.length > 0 ? messages[0].message : 'Erro inesperado, contate o suporte do site';
    return Promise.reject(erro);
  }
);

export default SMS_API;
