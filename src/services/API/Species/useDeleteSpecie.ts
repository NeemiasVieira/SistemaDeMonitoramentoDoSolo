// 660ac67e05f2b8bb382ca1f7

import { AxiosPromise } from "axios";
import SMS_API from "../sms-api";
import { useQuery, useQueryClient } from "react-query";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";

interface Error{
  message: string;
}

interface DeleteSpecieResponse {
  data?: {
    deleteSpecie: string;
  };
  errors?: Error[];
}

const deleteSpecieRequest = async(id: string): AxiosPromise<DeleteSpecieResponse> => {

  const token = `Bearer ${localStorage.getItem("token")}`;
  const options = { headers: {  Authorization: token, }};
  const variables = { id };

  const mutation = `mutation DeleteSpecie($id: String!) {
    deleteSpecie(id: $id)
  }`

  const response = await SMS_API.post<DeleteSpecieResponse>('', {query: mutation, variables},options);

  return response;

}

export const useDeleteSpecie = (id: string) => {

  const queryClient = useQueryClient();
  const { notificar } = useNotificacoes()

  const { data: deleteSpecieData, isLoading: deleteSpecieIsLoading, refetch: confirmDeleteSpecie } = useQuery({
    queryFn: () => deleteSpecieRequest(id),
    onSuccess: () => {
      queryClient.invalidateQueries("getAllSpecies")
      queryClient.invalidateQueries("getSpecie");
      if(deleteSpecieData?.data?.errors?.length < 1){
        notificar({tipo: "SUCESSO", mensagem: "Espécie excluída com sucesso!", tempoEmSeg: 4});
      }
    },
    enabled: false,
  })

  return{
    deleteSpecieData: deleteSpecieData?.data?.data?.deleteSpecie ?? null,
    deleteSpecieError: deleteSpecieData?.data?.errors?.length > 0 ? deleteSpecieData.data.errors[0].message : null,
    deleteSpecieIsLoading,
    confirmDeleteSpecie
  }
}