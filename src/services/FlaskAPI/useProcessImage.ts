import { AxiosResponse } from 'axios';
import FLASK_API from './flask-api.config';
import { useNotificacoes } from '../../contexts/NotificacoesProvider'; // Supondo que você tenha esse contexto para notificações
import { useMutation } from 'react-query';

interface UploadResponse {
  diagnostico: string;
  imagem: string;
}

const request = async (file: File): Promise<AxiosResponse<UploadResponse>> => {
  const formData = new FormData();
  formData.append('image', file);

  const headers = {
    'Content-Type': 'multipart/form-data',
  };

  return await FLASK_API.post<UploadResponse>('/upload', formData, { headers });
};

export const useProcessImage = () => {
  const { notificar } = useNotificacoes();
  const onError = (e: unknown) => {
    notificar({ mensagem: String(e), tipo: 'ERRO', tempoEmSeg: 4 });
  };

  const {
    data,
    error,
    isLoading: processImageIsLoading,
    mutate: processImage,
  } = useMutation({
    mutationFn: (file: File) => request(file),
    mutationKey: ['useProcessImage'],
    onError,
    retry: false,
  });

  const processedImage = data?.data;

  return {
    processedImage,
    processImageError: error as string,
    processImageIsLoading,
    processImage,
  };
};
