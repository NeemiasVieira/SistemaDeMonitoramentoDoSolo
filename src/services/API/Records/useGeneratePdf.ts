import { useMutation } from 'react-query';
import { useNotificacoes } from '../../../contexts/NotificacoesProvider';
import { GraphQLResponse } from '../sms-api';
import { useCallback } from 'react';
import { AxiosResponse } from 'axios';
import SMS_API from '../sms-api';
import { MutationKeys } from '../types';

interface generatePdf {
  generatePdf: string;
}

const request = async (recordId: string) => {
  const token = `Bearer ${localStorage.getItem('token')}`;

  const query = `query GeneratePDF($recordId: String!){
    generatePdf(recordId: $recordId)
  }`;

  const variables = { recordId };
  const options = { headers: { Authorization: token } };

  return await SMS_API.post<GraphQLResponse<generatePdf>>('', { query, variables }, options);
};

export const useGeneratePdf = (recordId: string) => {
  const { notificar } = useNotificacoes();

  const downloadPdf = useCallback((base64: string) => {
    const link = document.createElement('a');
    link.href = `data:application/pdf;base64,${base64}`;
    link.download = `registro_${recordId.slice(-7)}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const onSuccesso = useCallback(
    (data: AxiosResponse<GraphQLResponse<generatePdf>, unknown>) => {
      const base64 = data?.data?.data?.generatePdf;
      if (base64) {
        notificar({ tipo: 'SUCESSO', mensagem: 'PDF gerado com sucesso' });
        downloadPdf(base64);
      } else {
        notificar({ tipo: 'ERRO', mensagem: 'Erro ao gerar PDF' });
      } // eslint-disable-next-line
    },
    [notificar, downloadPdf]
  );

  const {
    isLoading,
    error,
    mutate: generatePdf,
  } = useMutation({
    mutationKey: MutationKeys.GENERATE_PDF,
    mutationFn: () => request(recordId),
    onError: (error) => notificar({ tipo: 'ERRO', mensagem: String(error) }),
    onMutate: () => notificar({ tipo: 'NOTIFICACAO', mensagem: 'Gerando PDF...' }),
    onSuccess: (data) => onSuccesso(data),
    retry: false,
  });

  return {
    isLoading,
    error,
    generatePdf,
  };
};
