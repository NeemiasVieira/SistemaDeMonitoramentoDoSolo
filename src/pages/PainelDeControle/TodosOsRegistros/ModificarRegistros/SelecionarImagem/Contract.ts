import { Notificar } from '@contexts/NotificacoesProvider';

const SIZE_15Mb = 15 * 1024 * 1024;
const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

export const fileNotValid = (file: File, notificar: Notificar): boolean => {
  if (file.size > SIZE_15Mb) {
    notificar({
      tipo: 'ERRO',
      mensagem: 'Tamanho máximo do arquivo ultrapassado, escolha um arquivo com 15Mb ou menos.',
      tempoEmSeg: 5,
    });
    return true;
  }

  const typeNotAllowed = !allowedTypes.includes(file.type);

  if (typeNotAllowed) {
    notificar({
      tipo: 'ERRO',
      mensagem: 'Formato do arquivo inválido, selecione um arquivo .png ou .jpeg',
      tempoEmSeg: 5,
    });
    return true;
  }
  return false;
};
