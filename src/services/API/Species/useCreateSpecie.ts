// import { AxiosPromise } from "axios";
// import SMS_API from "../sms-api";
// import { useQuery, useQueryClient } from "react-query";

// interface Error {
//   message: string;
// }

// interface Parametro{
//   min: string;
//   max: string;
// }

// interface Parametros{
//   nitrogenio: Parametro;
//   fosforo: Parametro;
//   potassio: Parametro;
//   luz: Parametro;
//   umidade: Parametro;
//   temperatura: Parametro;
//   pH: Parametro;
// }

// interface Specie{
//   id: string;
//   nome: string;
//   descricao: string;
//   parametros: Parametros;
// }

// interface createSpecieResponse {
//   data?: {
//     getAllSpecies: Specie;
//   };
//   errors?: Error[];
// }

// const createSpecie = async(args: {nome: string, descricao: string, parametros: Parametros}): AxiosPromise<createSpecieResponse> => {
//   const { nome, descricao, parametros } = args;

//   const token = `Bearer ${localStorage.getItem("token")}`;
//   const options = { headers: {  Authorization: token, }};
//   const variables = { nome, descricao, parametros }

//   const mutation = `mutation Mutation($nome: String!, $descricao: String!, $parametros: IParametros!) { 
//     createSpecie(
//       nome: $nome, 
//       descricao: $descricao, 
//       parametros: $parametros
//     ) { 
//       id nome descricao 
//       parametros { 
//         nitrogenio { min max } 
//         fosforo { min max } 
//         potassio { min max } 
//         luz { min max } 
//         umidade { min max } 
//         temperatura { min max } 
//         pH { min max } 
//       } 
//     } 
//   }`

//   const response = await SMS_API.post<createSpecieResponse>('', {mutation, variables},options);

//   return response;

// }

// export const useCreateSpecie = (args: {nome: string, descricao: string, parametros: Parametros}) => {

//   const queryClient = useQueryClient();

//   const { data: createSpecieData, isLoading: createSpecieIsLoading, refetch: createSpecieRefetch } = useQuery({
//     queryFn: () => createSpecie(args),
//     onSuccess: () => queryClient.invalidateQueries('getAllSpecies'),
//     queryKey: ["createSpecie"],
//     retry: false,
//     enabled: true,
//   })

//   return{
//     createSpecieData: createSpecieData?.data?.data?.getAllSpecies ?? null,
//     createSpecieError: createSpecieData?.data?.errors?.length > 0 ? createSpecieData.data.errors[0].message : null,
//     createSpecieIsLoading,
//     createSpecieRefetch

//   }


// }