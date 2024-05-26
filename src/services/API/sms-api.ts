import axios from "axios";

interface GraphQLError {
  message: string;
}

export interface GraphQLResponse<T> {
  data?: T;
  errors?: GraphQLError[];
}

const SMS_API = axios.create({
  // baseURL: 'https://sms-api-oe8t.onrender.com/', render
  // baseURL: "http://3.95.189.148:3333/graphql", aws
  baseURL: "http://172.212.98.90:3333/graphql",
  // azure ˆ
  // baseURL: 'https://sms-api-git-main-neemiasvieira.vercel.app/', vercel
  // baseURL: "http://localhost:3333/graphql", //localhost
  timeout: 90000,
});

SMS_API.interceptors.response.use(
  (response) => {
    if (response?.data && response?.data?.errors) return Promise.reject(response?.data?.errors[0]?.message);
    return response;
  },
  (error) => {
    console.error("Erro na requisição:", error);
    const messages = error?.response?.data?.errors;
    const erro = messages?.length > 0 ? messages[0].message : "Erro inesperado, contate o suporte do site";
    return Promise.reject(erro);
  }
);

export default SMS_API;
