import { useMutation, useQueryClient } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import SMS_API, { GraphQLResponse } from '../sms-api';
import { MutationKeys, QueryKeys } from '../types';
import { Record } from './useGetAllRecordsPaginated';
import { useNavigate, useParams } from 'react-router-dom';

interface RecordQuery {
  updateRecord: {
    id: string;
  };
}

const request = async (record: Record) => {
  const { id, nitrogenio, fosforo, potassio, lux, umidade, temperatura, pH, imagem, diagnostico } = record;
  const token = `Bearer ${localStorage.getItem('token')}`;
  const options = { headers: { Authorization: token } };
  const variables = {
    updateRecordId: id,
    nitrogenio,
    fosforo,
    potassio,
    lux,
    umidade,
    temperatura,
    pH,
    imagem,
    diagnostico,
  };
  const query = `mutation UpdateRecord( $updateRecordId: String! $nitrogenio: String $fosforo: String $potassio: String $umidade: String $temperatura: String $pH: String $lux: String $imagem: String $diagnostico: String) {
  updateRecord(id: $updateRecordId nitrogenio: $nitrogenio fosforo: $fosforo potassio: $potassio umidade: $umidade temperatura: $temperatura pH: $pH lux: $lux imagem: $imagem diagnostico: $diagnostico) {
    id 
  }
}`;

  return await SMS_API.post<GraphQLResponse<RecordQuery>>('', { query, variables }, options);
};

export const useUpdateRecord = () => {
  const queryClient = useQueryClient();
  const { notificar } = useNotificacoes();
  const navigate = useNavigate();
  const { idPlanta, idRegistro } = useParams();
  const onSuccess = () => {
    queryClient.invalidateQueries(QueryKeys.ALL_RECORDS);
    queryClient.invalidateQueries(QueryKeys.ALL_RECORDS_PAGINATED);
    queryClient.invalidateQueries(QueryKeys.RECORD);
    notificar({
      tipo: 'SUCESSO',
      mensagem: 'Registro atualizado com sucesso',
      tempoEmSeg: 4,
    });
    navigate(`/painel/plantas/${idPlanta}/registros/${idRegistro}/atualizar/menu`);
  };

  const {
    data,
    isLoading: updateRecordIsLoading,
    mutate: updateRecord,
    error,
  } = useMutation({
    mutationFn: (record: Record) => request(record),
    onSuccess,
    mutationKey: [MutationKeys.UPDATE_RECORD],
    retry: false,
    onError: (e) => notificar({ mensagem: String(e), tipo: 'ERRO', tempoEmSeg: 4 }),
  });

  const record = data?.data?.data?.updateRecord;

  return {
    record,
    updateRecordError: error as string,
    updateRecordIsLoading,
    updateRecord,
  };
};
