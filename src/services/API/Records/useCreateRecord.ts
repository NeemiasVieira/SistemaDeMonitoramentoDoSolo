import { useMutation, useQueryClient } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import SMS_API, { GraphQLResponse } from '../sms-api';
import { MutationKeys, QueryKeys } from '../types';
import { Record } from './useGetAllRecordsPaginated';
import { useNavigate, useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { useMutateRecordContext } from '@contexts/MutateRecordContext';

interface CreateRecord {
  createRecord: {
    id: string;
  };
}

const request = async (record: Record, idPlanta: string) => {
  const { nitrogenio, fosforo, potassio, umidade, temperatura, pH, lux, imagem, diagnostico } = record;

  const token = `Bearer ${localStorage.getItem('token')}`;
  const options = { headers: { Authorization: token } };
  const variables = { nitrogenio, fosforo, potassio, umidade, temperatura, pH, lux, idPlanta, imagem, diagnostico };

  const query = `mutation ( $idPlanta: String! $nitrogenio: String! $fosforo: String! $potassio: String! $umidade: String! $temperatura: String! $pH: String! $lux: String! $imagem: String $diagnostico: String) {
    createRecord( idPlanta: $idPlanta nitrogenio: $nitrogenio fosforo: $fosforo potassio: $potassio umidade: $umidade temperatura: $temperatura pH: $pH lux: $lux imagem: $imagem diagnostico: $diagnostico) {
      id
    }
  }`;

  return await SMS_API.post<GraphQLResponse<CreateRecord>>('', { query, variables }, options);
};

export const useCreateRecord = () => {
  const queryClient = useQueryClient();
  const { notificar } = useNotificacoes();
  const navigate = useNavigate();
  const { idPlanta } = useParams();
  const { setId } = useMutateRecordContext();

  const onSucesso = (data: AxiosResponse<GraphQLResponse<CreateRecord>, any>) => {
    queryClient.invalidateQueries(QueryKeys.RECORD);
    queryClient.invalidateQueries(QueryKeys.ALL_RECORDS);
    queryClient.invalidateQueries(QueryKeys.ALL_RECORDS_PAGINATED);
    notificar({ tipo: 'SUCESSO', mensagem: 'Registro criado com sucesso' });
    navigate(`/painel/plantas/${idPlanta}/registros/novo/menu`);
    setId(data?.data?.data?.createRecord?.id);
  };

  const {
    data,
    error,
    isLoading: createErrorIsLoading,
    mutate: createRecord,
  } = useMutation({
    mutationFn: (record: Record) => request(record, idPlanta),
    mutationKey: MutationKeys.CREATE_RECORD,
    onSuccess: onSucesso,
    retry: false,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO' }),
  });

  const newRecord = data?.data?.data?.createRecord;

  return {
    newRecord,
    createRecordError: error as string,
    createErrorIsLoading,
    createRecord,
  };
};
